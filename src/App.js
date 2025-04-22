import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function App() {
  const plans = [
    {
      name: 'Personal',
      description: 'Ideal for freelancers and solo users.',
    },
    {
      name: 'Medium Teams',
      description: 'Perfect for growing teams or departments.',
    },
    {
      name: 'Large Scale',
      description: 'Built for enterprise-grade scale and control.',
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">ManageMatePro</h1>
        <div className="flex gap-4 items-center">
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>English</option>
            <option>Español</option>
            <option>Монгол</option>
            <option>Русский</option>
          </select>
          <Link to="/login" className="bg-gray-900 text-white px-4 py-2 rounded">Login</Link>
          <Link to="/signup" className="border border-gray-900 px-4 py-2 rounded">Sign Up</Link>
        </div>
      </header>

      {/* Main */}
      <main className="px-6 pt-10 pb-16">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Smart Inventory Tracking for Any Business</h2>
          <p className="text-lg text-gray-600 mb-6">
            Simple. Powerful. Built for everyone — from small teams to large operations.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded text-lg hover:bg-gray-800 transition">
            Start Your Free Trial
          </button>
        </section>

        {/* Plans */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              <button className="text-sm text-blue-600 hover:underline">View Features</button>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mt-20 max-w-4xl mx-auto">
          <h4 className="text-2xl font-semibold mb-4 text-center">Why ManageMatePro?</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li>✔️ Real-time inventory tracking</li>
            <li>✔️ Multi-language support</li>
            <li>✔️ Powerful analytics and reporting</li>
            <li>✔️ Seamless mobile experience</li>
            <li>✔️ Trusted technology stack (Stripe, Supabase, Vercel)</li>
            <li>✔️ Designed with security and privacy in mind</li>
          </ul>
        </section>

        {/* Footer */}
        <section className="mt-20 max-w-3xl mx-auto text-center text-gray-600">
          <p className="mb-4">
            We use the same secure infrastructure trusted by leading companies. Your data is safe,
            and your payments are protected.
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} ManageMatePro. All rights reserved.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
