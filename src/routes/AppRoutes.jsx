import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import CreatePost from '../pages/CreatePost';
import EditPost from '../pages/EditPost';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/create" element={<PrivateRoute><CreatePost /></PrivateRoute>} />
      <Route path="/edit/:id" element={<PrivateRoute><EditPost /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
