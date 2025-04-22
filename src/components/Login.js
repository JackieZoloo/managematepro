import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow p-6 rounded">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to ManageMatePro</h2>
        <input className="w-full border px-4 py-2 mb-4 rounded" placeholder="Email" />
        <input className="w-full border px-4 py-2 mb-4 rounded" placeholder="Password" type="password" />
        <button className="w-full bg-gray-900 text-white py-2 rounded mb-4">Login</button>
        <p className="text-center text-sm">
          Don’t have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
