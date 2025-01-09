import React from "react";
import { HelpCircle, Search, ChevronRight } from "lucide-react";

const HelpPage = () => {
  return (
    <main className="p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="text-center">
        <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-semibold leading-tight">Help Center</h1>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions or reach out for support.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for help articles or topics..."
            className="w-full p-4 pl-12 rounded-lg bg-card border border-muted focus:ring focus:ring-primary outline-none text-sm"
          />
          <Search className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      {/* Topics Section */}
      <section>
        <h2 className="text-lg font-semibold leading-tight mb-4">Popular Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Getting Started",
              description: "Learn the basics to get up and running.",
            },
            {
              title: "Account Management",
              description: "Update your profile, password, and settings.",
            },
            {
              title: "Automated Responses",
              description: "Set up and customize your automations.",
            },
            {
              title: "Billing and Plans",
              description: "Manage your subscription and payment details.",
            },
            {
              title: "Troubleshooting",
              description: "Resolve common issues and errors.",
            },
            {
              title: "Privacy and Security",
              description: "Learn how we protect your data.",
            },
          ].map((topic, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{topic.description}</p>
              <button className="mt-4 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support */}
      <section className="rounded-lg border bg-card p-6 text-center">
        <h2 className="text-lg font-semibold leading-tight">Still need help?</h2>
        <p className="text-sm text-muted-foreground mt-2">
          If you can't find what you're looking for, contact our support team.
        </p>
        <button className="mt-4 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors">
          Contact Support
        </button>
      </section>
    </main>
  );
};

export default HelpPage;