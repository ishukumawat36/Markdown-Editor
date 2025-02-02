import React from 'react';

const Preview = ({ html }) => {
  return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default Preview;

