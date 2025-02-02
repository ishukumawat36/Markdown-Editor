import React from 'react';

const Preview = ({ html }) => {
  return (
    // <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    // {/* </div> */}
  );
};

export default Preview;

