import React from 'react';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default PostCard;
