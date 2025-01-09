import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from './Components/Layout';
import Automation from './pages/Automation';
import DashBoard from './Components/DashBoard';
import Profile from './pages/profile';
import Plans from './pages/plans';
import Settings from './pages/setting';
import Help from './pages/help';
import Integration from './pages/integration';
import { Home, Zap, LineChart,CreditCard, Cog, User, HelpCircle } from 'lucide-react';


export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const NavLinks = () => {
    const location = useLocation(); // Get the current path
    const isActive = (path) => location.pathname === path;

    return (
      <>
        <Link
          to="/dashboard"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/dashboard') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/automation"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/automation') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Zap className="w-5 h-5" />
          <span>Automations</span>
        </Link>
        <Link
          to="/integrations"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/integrations') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <LineChart className="w-5 h-5" />
          <span>Integrations</span>
        </Link>
        <Link
          to="/settings"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/settings') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <Cog className="w-5 h-5" />
          <span>Settings</span>
        </Link>
        <Link
          to="/plans"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/plans') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>Plans</span>
        </Link>
      </>
    );
  };

  const BottomNavLinks = () => {
    const location = useLocation(); // Get the current path
    const isActive = (path) => location.pathname === path;

    return (
      <>
        <Link
          to="/profile"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/profile') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </Link>
        <Link
          to="/help"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            isActive('/help') ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-white hover:bg-zinc-900'
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          <span>Help</span>
        </Link>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Layout
        NavLinks={NavLinks}
        BottomNavLinks={BottomNavLinks}
        setIsSidebarOpen={setIsSidebarOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        isSidebarOpen={isSidebarOpen}
      >
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/integrations" element={<Integration />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/plans" element={<Plans />} />
     
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}