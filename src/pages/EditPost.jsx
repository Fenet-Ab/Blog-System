import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { getPosts, updatePost } from '../utils/storage';
import PostForm from '../components/PostForm';

function EditPost() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const found = getPosts().find(p => p.id === id);
    setPost(found);
  }, [id]);

  const handleEdit = ({ title, content }) => {
    if (!post) return;
    const updated = { ...post, title, content };
    updatePost(updated);
    navigate(`/blog/${id}`);
  };

  if (!post) {
    return <div className="container mx-auto max-w-2xl py-16 text-center">Post not found.</div>;
  }

  if (!user || user.username !== post.author) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto max-w-2xl py-16">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700">Edit Post</h2>
      <PostForm
        initialTitle={post.title}
        initialContent={post.content}
        onSubmit={handleEdit}
        submitLabel="Save Changes"
      />
    </div>
  );
}

export default EditPost;