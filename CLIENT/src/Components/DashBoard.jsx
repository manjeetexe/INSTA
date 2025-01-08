import { Bell, ChevronRight, Cog, HelpCircle, Home, LineChart, Menu, Moon, Plus, Search, Sun, User, X, Zap } from 'lucide-react';
import React from 'react'

const DashBoard = () => {
  return (
    <main className="p-4 sm:p-6">
    {/* Welcome Message */}
    <div className="mb-6 sm:mb-8">
      <h2 className="text-sm text-gray-600 dark:text-gray-400">Welcome back</h2>
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
        Manjeet Sharma!
      </h1>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
      {[
        {
          title: 'Set-up Auto Replies',
          description: 'Deliver a product lineup through Instagram DM',
        },
        {
          title: 'Answer Questions with AI',
          description: 'Identify and respond to queries with AI',
        },
        {
          title: 'Answer Questions with AI',
          description: 'Identify and respond to queries with AI',
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 rounded-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {feature.description}
          </p>
          <button className="text-blue-400 hover:text-blue-300">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>

    {/* Analytics Section */}
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
          <LineChart className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          Automated Activity
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Automated 0 out of 1 interactions
        </p>
      </div>

      {/* Chart */}
      <div className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 rounded-lg">
        <div className="h-48 sm:h-64 w-full bg-gradient-to-b from-blue-500/20 to-transparent rounded-lg relative overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background:
                'linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, transparent 100%)',
            }}
          />
        </div>
        <div className="flex justify-between mt-4 overflow-x-auto">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
            <span
              key={month}
              className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap"
            >
              {month}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            title: 'Comments',
            subtitle: 'On your posts',
            percentage: '100%',
            details: '8 out of 8 comments replied',
          },
          {
            title: 'Direct Messages',
            subtitle: 'On your account',
            percentage: '100%',
            details: '4 out of 4 DMs replied',
          },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 rounded-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{metric.subtitle}</p>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.percentage}
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{metric.details}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
  )
}

export default DashBoard