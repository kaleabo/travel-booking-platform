import React from 'react';

const ImageHeader: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-4xl h-96 bg-cover bg-center bg-no-repeat rounded-t-xl" style={{ backgroundImage: 'url("/header-bg.png")' }}></div>
  );
};

export default ImageHeader;
