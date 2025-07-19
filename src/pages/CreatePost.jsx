import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { savePost } from '../utils/storage';
import PostForm from '../components/PostForm';

function CreatePost() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreate = ({ title, content }) => {
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      author: user.username,
    };
    savePost(newPost);
    navigate(`/blog/${newPost.id}`);
  };

  return (
    <div className="container mx-auto max-w-2xl py-16">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">Create New Post</h2>
      <PostForm onSubmit={handleCreate} submitLabel="Create Post" />
    </div>
  );
}

export default CreatePost;