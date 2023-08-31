import React, { useState } from 'react';

function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleIsPublishedChange = () => {
    setIsPublished(!isPublished);
  };

  const handleSave = () => {
    // Handle save logic here (e.g., send new post data to the server)
  };

  return (
    <div>
      <h2>New Post</h2>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={handleContentChange} />
        </div>
        <div>
          <label>Is Published:</label>
          <input type="checkbox" checked={isPublished} onChange={handleIsPublishedChange} />
        </div>
        <button onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

export default NewPostPage;
