import React, { useState } from 'react';
import { FiPlus, FiEdit2, FiCheckCircle, FiFilter, FiSearch, FiChevronDown } from 'react-icons/fi';

const Automation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by: Name');
  const automations = [1, 2, 3]; // Replace with actual data
  const options = ['Sort by: Name', 'Sort by: Status', 'Sort by: Date'];

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="space-y-8 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Automations</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
          <FiPlus className="w-5 h-5 mr-2" />
          New Automation
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 relative">
          <button className="bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md flex items-center">
            <FiFilter className="w-5 h-5 mr-2" />
            Filter
          </button>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-md shadow-md focus:outline-none"
            >
              <span>{selectedOption}</span>
              <FiChevronDown
                className={`w-5 h-5 transform transition-transform ${
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
        </div>

        {/* Search */}
        <div className="relative max-w-md w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 bg-gray-200 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search automations..."
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Automations</h3>
          <p className="text-2xl font-bold">15</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Active</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Inactive</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      {/* Automation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automations.length > 0 ? (
          automations.map((index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Automation {index}</h3>
                <FiCheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                This is a description of automation {index}.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Status: <span className="text-green-500">Active</span>
                </span>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center">
                  <FiEdit2 className="w-4 h-4 mr-1" />
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>No automations found. Create your first automation!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automation;