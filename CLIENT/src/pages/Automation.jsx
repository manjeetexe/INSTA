import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiSearch, FiChevronDown, FiX } from 'react-icons/fi';

const Automation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by: Name');
  const [automations, setAutomations] = useState([]);
  const options = ['Sort by: Name', 'Sort by: Date'];

  useEffect(() => {
    // Simulating API call to fetch automations
    const fetchedAutomations = [
      { id: 1, name: 'Email Sequence', description: 'Automated email sequence for new subscribers' },
      { id: 2, name: 'Social Media Posting', description: 'Schedule and post content across platforms' },
      { id: 3, name: 'Lead Scoring', description: 'Automatically score and qualify leads' },
    ];
    setAutomations(fetchedAutomations);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredAutomations = automations.filter((automation) =>
    automation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    automation.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortAutomations = (automations) => {
    switch (selectedOption) {
      case 'Sort by: Name':
        return [...automations].sort((a, b) => a.name.localeCompare(b.name));
      case 'Sort by: Date':
        return automations; // Assuming we'd sort by 'createdAt' if it existed
      default:
        return automations;
    }
  };

  const sortedAndFilteredAutomations = sortAutomations(filteredAutomations);

  return (
    <div className="space-y-6 p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Automations</h1>
        <button className="bg-blue-600 text-sm lg:text-lg hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <FiPlus className="w-5 h-5 mr-2" />
          New Automation
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center w-full px-4 py-2 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md shadow-md focus:outline-none"
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
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full sm:h-16 pl-10 pr-10 py-2 bg-gray-200 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search automations..."
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Automation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAndFilteredAutomations.length > 0 ? (
          sortedAndFilteredAutomations.map((automation) => (
            <div
              key={automation.id}
              className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{automation.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {automation.description}
              </p>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center">
                <FiEdit2 className="w-4 h-4 mr-1" />
                Edit
              </button>
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