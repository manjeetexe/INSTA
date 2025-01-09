import React, { useState } from "react";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [appearance, setAppearance] = useState("system");

  return (
    <main className="p-4 sm:p-6 bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Settings
        </h1>
        <p className="text-sm text-gray-900 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6 sm:space-y-8">
        {/* Account Settings */}
        <section className="bg-gray-100  dark:bg-zinc-900/50 border-gray-200 border-[1px] dark:border-gray-700 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Account Settings
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Email
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  manjeet@example.com
                </p>
              </div>
              <button className="text-sm font-medium border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-200 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Change
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Password
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Last changed 3 months ago
                </p>
              </div>
              <button className="text-sm font-medium border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-200 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Update
              </button>
            </div>
          </div>
        </section>

        {/* Notification Preferences */}
        <section className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email-notifications"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
                Email Notifications
              </label>
              <input
                id="email-notifications"
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="toggle-checkbox"
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="push-notifications"
                className="text-sm font-medium text-gray-900 dark:text-gray-50"
              >
                Push Notifications
              </label>
              <input
                id="push-notifications"
                type="checkbox"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
                className="toggle-checkbox"
              />
            </div>
          </div>
        </section>

        {/* Appearance Settings */}
        <section className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
            Appearance
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="light"
                value="light"
                checked={appearance === "light"}
                onChange={(e) => setAppearance(e.target.value)}
                className="appearance-radio"
              />
              <label htmlFor="light" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Light
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="dark"
                value="dark"
                checked={appearance === "dark"}
                onChange={(e) => setAppearance(e.target.value)}
                className="appearance-radio"
              />
              <label htmlFor="dark" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                Dark
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="system"
                value="system"
                checked={appearance === "system"}
                onChange={(e) => setAppearance(e.target.value)}
                className="appearance-radio"
              />
              <label htmlFor="system" className="text-sm font-medium text-gray-900 dark:text-gray-50">
                System
              </label>
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 rounded-lg">
          <h2 className="text-lg  font-semibold text-gray-900 dark:text-white mb-4">
            Help & Support
          </h2>
          <div className="space-y-4">
            <button className="w-full flex justify-between items-center dark:text-gray-400 text-sm font-medium border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              FAQs
            </button>
            <button className="w-full flex justify-between items-center dark:text-gray-400 text-sm font-medium border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Contact Support
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}