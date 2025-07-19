import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      <div className="container mx-auto max-w-2xl py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-700 drop-shadow">Welcome to the Blog System!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Create, share, and manage your own blog posts.<br />Register or log in to get started!
        </p>
        <Link
          to="/blogs"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-indigo-700 transition"
        >
          View Blogs
        </Link>
      </div>
    </div>
  );
}

export default Home;