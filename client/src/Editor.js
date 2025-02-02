// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// const Editor = () => {
//   const [markdown, setMarkdown] = useState('');
//   const [html, setHtml] = useState('');

//   const handleChange = (event) => {
//     setMarkdown(event.target.value);
//   };

//   useEffect(() => {
//     const convertMarkdown = async () => {
//       try {
//         const response = await axios.post('http://localhost:5000/convert', markdown, {
//           headers: {
//             'Content-Type': 'text/plain',
//           },
//         });
//         setHtml(response.data.html);
//       } catch (error) {
//         console.error("Error converting markdown", error);
//       }
//     };

//     if (markdown !== '') {
//       convertMarkdown();
//     }
//   }, [markdown]);

//   return (
//     <div>
      
//       {/* Markdown Editor */}
//       <textarea
//         value={markdown}
//         onChange={handleChange}
//         placeholder="Type your markdown here..."
//       />
      
//       {/* Live Preview */}
//       <div>
//         <div dangerouslySetInnerHTML={{ __html: html }} />
        
//         {/* Optionally show live syntax highlight */}
//         <SyntaxHighlighter language="markdown" style={dracula}>
//           {markdown}
//         </SyntaxHighlighter>
//       </div>
//     </div>
//   );
// };

// export default Editor;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Editor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await axios.post('http://localhost:5000/convert', markdown, {
          headers: {
            'Content-Type': 'text/plain',
          },
        });
        setHtml(response.data.html);
      } catch (error) {
        console.error("Error converting markdown", error);
      }
    };

    if (markdown !== '') {
      convertMarkdown();
    }
  }, [markdown]);

  return (
    <div className="editor">
      {/* Markdown Editor */}
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Type your markdown here..."
      />

      {/* Optionally show live syntax highlight */}
      <SyntaxHighlighter language="markdown" style={dracula} className="syntax-highlighter">
        {markdown}
      </SyntaxHighlighter>
    </div>
  );
};

export default Editor;
