
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-600 rounded-full animate-spin"></div>
    </div>
  );
};
