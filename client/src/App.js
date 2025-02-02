import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    // Markdown-to-HTML conversion (can be done here or via server-side)
    setHtml(markdown); // Simple example: set markdown directly as HTML
  }, [markdown]);

  return (
    <div className="app">
      <h1>Markdown Live Preview</h1>
      <div className="editor-preview-container">
        <div className="editor">
          <textarea 
            value={markdown} 
            onChange={handleChange} 
            placeholder="Write your markdown here..." 
          />
        </div>
        <div className="preview">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
};

export default App;
