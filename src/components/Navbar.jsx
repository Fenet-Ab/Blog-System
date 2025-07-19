import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md mb-8">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-indigo-600 drop-shadow">Blog System</Link>
        <button
          className="sm:hidden ml-auto text-indigo-700 focus:outline-none"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`w-full sm:w-auto ${menuOpen ? '' : 'hidden sm:flex'} flex-col sm:flex-row flex gap-4 sm:gap-4 mt-4 sm:mt-0 items-center sm:items-center`}> 
          <Link to="/blogs" className="hover:text-indigo-600 font-medium transition">Blogs</Link>
          {user ? (
            <>
              <Link to="/create" className="hover:text-indigo-600 font-medium transition">Create</Link>
              <span className="inline-flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold">
                <span className="w-6 h-6 bg-indigo-200 text-indigo-700 rounded-full flex items-center justify-center font-bold uppercase">
                  {user.username[0]}
                </span>
                {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="bg-indigo-600 text-white px-4 py-1.5 rounded-full font-semibold shadow hover:bg-indigo-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-600 font-medium transition">Login</Link>
              <Link to="/register" className="hover:text-indigo-600 font-medium transition">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;