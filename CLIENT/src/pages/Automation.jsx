import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiCheckCircle, FiFilter, FiSearch, FiChevronDown, FiX } from 'react-icons/fi';

const Automation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by: Name');
  const [automations, setAutomations] = useState([]);
  const options = ['Sort by: Name', 'Sort by: Status', 'Sort by: Date'];

  useEffect(() => {
    // Simulating API call to fetch automations
    const fetchedAutomations = [
      { id: 1, name: 'Email Sequence', description: 'Automated email sequence for new subscribers', status: 'active' },
      { id: 2, name: 'Social Media Posting', description: 'Schedule and post content across platforms', status: 'active' },
      { id: 3, name: 'Lead Scoring', description: 'Automatically score and qualify leads', status: 'inactive' },
    ];
    setAutomations(fetchedAutomations);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredAutomations = automations.filter(automation =>
    automation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    automation.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortAutomations = (automations) => {
    switch (selectedOption) {
      case 'Sort by: Name':
        return [...automations].sort((a, b) => a.name.localeCompare(b.name));
      case 'Sort by: Status':
        return [...automations].sort((a, b) => a.status.localeCompare(b.status));
      case 'Sort by: Date':
        // Assuming we had a 'createdAt' field, we would sort by that here
        return automations;
      default:
        return automations;
    }
  };

  const sortedAndFilteredAutomations = sortAutomations(filteredAutomations);

  return (
    <div className="space-y-6 p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Automations</h1>
        
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button className="w-full sm:w-auto bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md flex items-center justify-center transition duration-300 ease-in-out">
            <FiFilter className="w-5 h-5 mr-2" />
            Filter
          </button>

          {/* Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-full px-4 py-2 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md shadow-md focus:outline-none transition duration-300 ease-in-out"
            >
              <span>{selectedOption}</span>
              <FiChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-full bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-md shadow-lg">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(option)}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition duration-300 ease-in-out"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-10 py-2 bg-gray-200 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Search automations..."
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition duration-300 ease-in-out"
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
        </div>
        <button className="w-full sm:w-auto h-20 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md flex items-center justify-center transition duration-300 ease-in-out">
          <FiPlus className="w-5 h-5 mr-2" />
          New Automation
        </button>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Automations</h3>
          <p className="text-2xl font-bold">{automations.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Active</h3>
          <p className="text-2xl font-bold">{automations.filter(a => a.status === 'active').length}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Inactive</h3>
          <p className="text-2xl font-bold">{automations.filter(a => a.status === 'inactive').length}</p>
        </div>
      </div>

      {/* Automation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAndFilteredAutomations.length > 0 ? (
          sortedAndFilteredAutomations.map((automation) => (
            <div
              key={automation.id}
              className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{automation.name}</h3>
                {automation.status === 'active' ? (
                  <FiCheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <FiX className="w-5 h-5 text-red-500" />
                )}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {automation.description}
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Status: <span className={automation.status === 'active' ? 'text-green-500' : 'text-red-500'}>
                    {automation.status.charAt(0).toUpperCase() + automation.status.slice(1)}
                  </span>
                </span>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center transition duration-300 ease-in-out">
                  <FiEdit2 className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 dark:text-gray-400 py-8">
            <p>No automations found. Create your first automation!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automation;

