import React, { useState } from 'react';

function PostForm({ initialTitle = '', initialContent = '', onSubmit, submitLabel }) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
            required
            maxLength={100}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base min-h-[160px] resize-vertical"
            required
            maxLength={2000}
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

export default PostForm; 