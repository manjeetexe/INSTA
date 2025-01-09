import React from 'react';
import { Bell, ChevronRight, Cog, HelpCircle, Home, LineChart, Menu, Moon, Plus, Search, Sun, User, X } from 'lucide-react';

const Layout = ({ NavLinks, BottomNavLinks, isSidebarOpen, toggleTheme,setIsSidebarOpen, theme, children }) => {
  return (
    <div className={`flex flex-col md:flex-row h-screen bg-white dark:bg-black`}>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-100 dark:bg-zinc-950 p-4 flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Slide</h1>
        </div>
        <nav className="space-y-2 flex-1">
          <NavLinks />
        </nav>
        <div className="space-y-2">
          <BottomNavLinks />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 dark:bg-zinc-950 p-4 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Slide</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="space-y-2 flex-1">
          <NavLinks />
        </nav>
        <div className="space-y-2">
          <BottomNavLinks />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="p-4 gap-4 flex items-center justify-between border-b border-gray-200 dark:border-zinc-800">
          <div className="flex items-center gap-4 flex-1">
            <button
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex-1 max-w-xl relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-1 sm:py-2 rounded-md bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search by name, email or status"
                
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200">
              <Plus className="w-4 h-4 mr-2" />
              Create an Automation
            </button>
            <button className="sm:hidden p-2 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              <Plus className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800">
              <Bell className="w-5 h-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
};

export default Layout;