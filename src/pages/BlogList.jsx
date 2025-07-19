import React, { useEffect, useState, useContext } from 'react';
import { getPosts, deletePost } from '../utils/storage';
import BlogCard from '../components/BlogCard';
import { AuthContext } from '../context/AuthContext';

function BlogList() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setPosts(getPosts().reverse());
  }, []);

  const handleDelete = (id) => {
    deletePost(id);
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const handleDeleteAll = () => {
    if (!user) return;
    if (window.confirm('Delete all your posts?')) {
      const userPosts = posts.filter(post => post.author === user.username);
      userPosts.forEach(post => deletePost(post.id));
      setPosts(getPosts().reverse());
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-700 text-center sm:text-left">All Blog Posts</h2>
        {user && posts.some(post => post.author === user.username) && (
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white w-1-00 px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-600 active:scale-95 transition"
          >
            Delete All My Posts
          </button>
        )}
      </div>
      {posts.length === 0 ? (
        <div className="text-center text-gray-400">No posts yet.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogList;