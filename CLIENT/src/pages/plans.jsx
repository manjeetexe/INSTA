import React, { useState } from 'react';
import { Check, CreditCard, Shield, TrendingUp } from 'lucide-react';
import { Rocket } from 'lucide-react';
const PlanPage = () => {
  const [currentPlan, setCurrentPlan] = useState('Pro');

  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Access to basic tools',
        'Limited support',
        'Community access',
      ],
    },
    {
      name: 'Pro',
      price: '$29/month',
      features: [
        'All Basic features',
        'Priority support',
        'Advanced analytics',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      features: [
        'All Pro features',
        'Dedicated account manager',
        'Custom integrations',
      ],
    },
  ];

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Subscription Plans</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Manage your subscription and explore available plans.
        </p>
      </div>

      {/* Current Plan */}
      <section className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Your Current Plan</h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{currentPlan} Plan</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Access expires on: <strong>2025-12-31</strong>
            </p>
          </div>
          <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
      </section>

      {/* Available Plans */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md border ${
                currentPlan === plan.name
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-900/50'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name} Plan</h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white my-4">
                {plan.price}
              </p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Check className="w-4 h-4 text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              {currentPlan === plan.name ? (
                <button className="w-full px-4 py-2 bg-gray-300 dark:bg-zinc-800 text-gray-700 dark:text-gray-400 rounded-lg cursor-not-allowed">
                  Current Plan
                </button>
              ) : (
                <button
                  onClick={() => setCurrentPlan(plan.name)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                >
                  Upgrade
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Benefits */}
      <section className="bg-gray-100 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-700 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why Upgrade?</h2>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                    Unlock advanced analytics and insights.
                    </span>
                </li>
                <li className="flex items-center">
                    <CreditCard className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                    Enjoy priority support and faster responses.
                    </span>
                </li>
                <li className="flex items-center">
                    <Rocket className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                    Automate and scale your workflows efficiently.
                    </span>
                </li>
                </ul>
      </section>
    </main>
  );
};

export default PlanPage;