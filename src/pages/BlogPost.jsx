import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPosts, deletePost } from '../utils/storage';
import { AuthContext } from '../context/AuthContext';
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

function BlogPost() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = getPosts().find(p => p.id === id);
    setPost(found);
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
      navigate('/blogs');
    }
  };

  if (!post) {
    return <div className="container mx-auto max-w-2xl py-16 text-center">Post not found.</div>;
  }

  return (
    <div className="container mx-auto max-w-2xl py-16">
      <h2 className="text-4xl font-extrabold mb-4 text-indigo-700 drop-shadow-sm leading-tight">{post.title}</h2>
      <div className="flex items-center gap-3 mb-6">
        <span className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold uppercase text-lg">
          {post.author[0]}
        </span>
        <span className="text-gray-600 font-medium">By {post.author}</span>
      </div>
      <div className="text-gray-800 mb-8 text-lg leading-relaxed bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-inner">
        {post.content}
      </div>
      {user && user.username === post.author && (
        <div className="flex gap-4 mb-8">
          <Link
            to={`/edit/${post.id}`}
            className=" text-white px-6 py-2 rounded-lg font-semibold shadow  transition"
          >
            <img src={editIcon} alt="edit" />
          </Link>
          <button
            onClick={handleDelete}
            className=" text-white px-6 py-2 rounded-lg font-semibold shadow transition"
          >
           <img src={deleteIcon} alt="delete" />
          </button>
        </div>
      )}
      <div className="mt-8">
        <Link to="/blogs" className="text-indigo-600 hover:underline font-medium">← Back to Blogs</Link>
      </div>
    </div>
  );
}

export default BlogPost;