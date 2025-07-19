import React, { useState } from 'react';

function AuthForm({ onSubmit, submitLabel }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            required
            maxLength={32}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            required
            maxLength={64}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold text-lg shadow hover:bg-indigo-700 transition"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

export default AuthForm; 