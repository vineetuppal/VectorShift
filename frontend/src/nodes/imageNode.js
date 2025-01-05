import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ImageNode = ({ id, data }) => {
  const [imageUrl, setImageUrl] = useState(data?.imageUrl || '');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <BaseNode
      id={id}
      label="Image"
      handlePosition={Position.Right}
      handleType="source"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* File Input */}
        <label htmlFor={`${id}-image`} className="flex flex-col items-start space-y-2">
          <span className="text-white text-sm font-medium">Upload Image:</span>
          <input
            id={`${id}-image`}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </label>

        {/* Image Preview */}
        {imageUrl && (
          <div className="w-24 h-24 border border-gray-600 rounded-md overflow-hidden flex justify-center items-center">
            <img
              src={imageUrl}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>
    </BaseNode>
  );
};
