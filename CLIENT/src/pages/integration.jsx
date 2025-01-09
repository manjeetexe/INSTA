import React, { useState, useEffect } from 'react';
import { FiPlus, FiSearch, FiChevronDown, FiX, FiFilter, FiLink2 } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaFacebookF } from 'react-icons/fa';

const Integration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by: Name');
  const [integrations, setIntegrations] = useState([]);
  const options = ['Sort by: Name', 'Sort by: Status', 'Sort by: Date Added'];

  useEffect(() => {
    // Simulating API call to fetch integrations
    const fetchedIntegrations = [
      { id: 1, name: 'Instagram', description: 'Share posts and stories automatically', status: 'connected', icon: FaInstagram },
      { id: 2, name: 'WhatsApp', description: 'Send automated messages and updates', status: 'disconnected', icon: FaWhatsapp },
      { id: 3, name: 'LinkedIn', description: 'Post updates and engage with your network', status: 'connected', icon: FaLinkedin },
      { id: 4, name: 'Facebook', description: 'Manage pages and automate posts', status: 'disconnected', icon: FaFacebookF },
    ];
    setIntegrations(fetchedIntegrations);
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortIntegrations = (integrations) => {
    switch (selectedOption) {
      case 'Sort by: Name':
        return [...integrations].sort((a, b) => a.name.localeCompare(b.name));
      case 'Sort by: Status':
        return [...integrations].sort((a, b) => a.status.localeCompare(b.status));
      case 'Sort by: Date Added':
        // Assuming we had a 'dateAdded' field, we would sort by that here
        return integrations;
      default:
        return integrations;
    }
  };

  const sortedAndFilteredIntegrations = sortIntegrations(filteredIntegrations);

  return (
    <div className="space-y-6 p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"> Integrations</h1>
        
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4">
        

        {/* Search */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-10 pr-10 py-2 bg-gray-200 dark:bg-zinc-900 text-gray-900 dark:text-white rounded-md placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            placeholder="Search integrations..."
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
        <button className="w-full sm:w-auto bg-blue-600 sm:h-20 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition duration-300 ease-in-out">
          <FiPlus className="w-5 h-5 mr-2" />
          Add New Integration
        </button>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Integrations</h3>
          <p className="text-2xl font-bold">{integrations.length}</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Connected</h3>
          <p className="text-2xl font-bold">{integrations.filter(i => i.status === 'connected').length}</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Disconnected</h3>
          <p className="text-2xl font-bold">{integrations.filter(i => i.status === 'disconnected').length}</p>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {sortedAndFilteredIntegrations.length > 0 ? (
          sortedAndFilteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-zinc-800 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <integration.icon className="w-8 h-8 mr-3 text-gray-700 dark:text-gray-300" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{integration.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {integration.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Status: <span className={integration.status === 'connected' ? 'text-green-500' : 'text-red-500'}>
                    {integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}
                  </span>
                </span>
                <button className={`flex items-center transition duration-300 ease-in-out ${
                  integration.status === 'connected' ? 'text-red-600 dark:text-red-400 hover:text-red-500' : 'text-blue-600 dark:text-blue-400 hover:text-blue-500'
                }`}>
                  <FiLink2 className={`w-4 h-4 mr-1 ${integration.status === 'connected' ? 'transform rotate-45' : ''}`} />
                  {integration.status === 'connected' ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600 dark:text-gray-400 py-8">
            <p>No integrations found. Add your first integration!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integration;

