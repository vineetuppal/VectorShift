import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const VideoNode = ({ id, data }) => {
  const [videoUrl, setVideoUrl] = useState(data?.videoUrl || '');

  const handleVideoChange = (e) => {
    setVideoUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <BaseNode id={id} label="Video" handlePosition={Position.Right} handleType="source">
      <div className="flex flex-col items-center space-y-4">
        {/* File Input */}
        <label htmlFor={`${id}-video`} className="flex flex-col items-start space-y-2">
          <span className="text-white text-sm font-medium">Upload Video:</span>
          <input
            id={`${id}-video`}
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </label>

        {/* Video Preview */}
        {videoUrl && (
          <div className="w-24 h-24 border border-gray-600 rounded-md overflow-hidden flex justify-center items-center">
            <video width="100" height="100" controls className="object-cover">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </BaseNode>
  );
};
