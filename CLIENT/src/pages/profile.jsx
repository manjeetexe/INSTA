import React, { useState, useEffect } from 'react';
import { FiEdit2, FiCheckCircle } from 'react-icons/fi';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Web Developer and Automation Enthusiast',
    subscriptionPlan: 'Pro Plan',
    subscriptionExpiration: '2025-12-31',
    activeAutomations: [
      { id: 1, name: 'Email Sequence', createdAt: '2024-01-01', updatedAt: '2024-01-15' },
      { id: 2, name: 'Social Media Posting', createdAt: '2023-12-15', updatedAt: '2024-01-10' },
    ],
    inactiveAutomations: [
      { id: 3, name: 'Lead Scoring', createdAt: '2023-11-01', updatedAt: '2023-11-30' },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    setUser({ ...user });
  }, []);

  const handleSaveChanges = () => {
    setIsLoading(true);
    setError(null);
    try {
      setUser({ ...editedUser });
      setIsEditing(false);
      setIsLoading(false);
    } catch (e) {
      setError('An error occurred while saving changes');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
      </div>

      {/* Profile Info */}
      <section className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-500 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Profile Information</h2>
        <div className="space-y-6">
          {/* Name */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-white">Name</h3>
              <p className="text-sm text-gray-200">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                    className="bg-gray-200 dark:bg-zinc-800 p-3 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  editedUser.name
                )}
              </p>
            </div>
            {isEditing && !isLoading && (
              <button onClick={handleSaveChanges} className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-all ease-in-out duration-200">
                Save
              </button>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-white">Email</h3>
              <p className="text-sm text-gray-200">
                {isEditing ? (
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    className="bg-gray-200 dark:bg-zinc-800 p-3 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                  />
                ) : (
                  editedUser.email
                )}
              </p>
            </div>
            {isEditing && !isLoading && (
              <button onClick={handleSaveChanges} className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-all ease-in-out duration-200">
                Save
              </button>
            )}
          </div>

          {/* Bio */}
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-white">Bio</h3>
              <p className="text-sm text-gray-200">
                {isEditing ? (
                  <textarea
                    value={editedUser.bio}
                    onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
                    className="bg-gray-200 dark:bg-zinc-800 p-3 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                  />
                ) : (
                  editedUser.bio
                )}
              </p>
            </div>
            {isEditing && !isLoading && (
              <button onClick={handleSaveChanges} className="text-sm font-medium text-blue-400 hover:text-blue-600 transition-all ease-in-out duration-200">
                Save
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Subscription Plan */}
      <section className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Subscription Plan</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Current Plan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{user.subscriptionPlan}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">Expiration Date</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{user.subscriptionExpiration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Automations */}
      <section className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Active Automations</h2>
        <div className="space-y-4">
          {user.activeAutomations.map((automation) => (
            <div key={automation.id} className="flex justify-between items-center bg-white dark:bg-zinc-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{automation.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Created: {automation.createdAt}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: {automation.updatedAt}</p>
              </div>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center">
                <FiEdit2 className="w-4 h-4 mr-1" />
                Edit
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Inactive Automations */}
      <section className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-lg shadow-md border border-gray-200 dark:border-zinc-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inactive Automations</h2>
        <div className="space-y-4">
          {user.inactiveAutomations.map((automation) => (
            <div key={automation.id} className="flex justify-between items-center bg-white dark:bg-zinc-800 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{automation.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Created: {automation.createdAt}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last Updated: {automation.updatedAt}</p>
              </div>
              <button className="text-green-600 dark:text-green-400 hover:text-green-500 flex items-center">
                <FiCheckCircle className="w-4 h-4 mr-1" />
                Activate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Loading and Error State */}
      {isLoading && <div className="text-center text-blue-500">Saving changes...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
    </div>
  );
};

export default Profile;