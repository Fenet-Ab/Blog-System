import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/delete.png';

function BlogCard({ post, onDelete }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const isOwner = user && user.username === post.author;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleEdit = () => {
    navigate(`/edit/${post.id}`);
  };

  const handleDelete = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    onDelete(post.id);
    setShowDeleteDialog(false);
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
  };

  return (
    <div className="bg-white  rounded-2xl shadow-lg p-4 sm:p-6 mb-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl border border-gray-100 flex flex-col justify-between min-h-[220px] relative">
      <div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 hover:underline mb-2 line-clamp-1 transition-colors duration-150">{post.title}</h3>
        </Link>
        <p className="text-gray-700 mb-4 line-clamp-2 text-base sm:text-lg">{post.content.slice(0, 120)}{post.content.length > 120 ? '...' : ''}</p>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto mb-2">
        <span className="w-7 h-7 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold uppercase">
          {post.author[0]}
        </span>
        <span>By {post.author}</span>
      </div>
      {isOwner && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleEdit}
            className="e px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg font-semibold shadow  active:scale-95 transition flex items-center justify-center"
            title="Edit"
            aria-label="Edit"
          >
            <img src={editIcon} alt="Edit" className="w-5 h-5" />
          </button>
          <button
            onClick={handleDelete}
            className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg font-semibold shadow active:scale-95 transition flex items-center justify-center"
            title="Delete"
            aria-label="Delete"
          >
            <img src={deleteIcon} alt="Delete" className="w-5 h-5" />
          </button>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 opacity-100">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-xs w-full text-center transition-all duration-300 scale-100">
            <div className="flex flex-col items-center gap-2">
              <img src={deleteIcon} alt="Delete" className="w-10 h-10 mb-2" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Delete Post?</h3>
              <p className="text-gray-600 mb-4">Are you sure you want to delete this post? This action cannot be undone.</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={confirmDelete}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-700 transition"
                >
                  Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogCard; 