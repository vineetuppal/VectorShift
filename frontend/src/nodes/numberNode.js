import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const NumberNode = ({ id, data }) => {
  const [number, setNumber] = useState(data?.number || '');

  const handleNumberChange = (e) => {
    // Only allow numeric input (or empty string to allow clearing)
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setNumber(value);
    }
  };

  return (
    <BaseNode id={id} label="Number" handlePosition={Position.Right} handleType="source">
      <div className="flex flex-col items-center space-y-4">
        {/* Number Input without arrows */}
        <label htmlFor={`${id}-number`} className="flex flex-col items-start space-y-2">
          <span className="text-white text-sm font-medium">Enter a Number:</span>
          <input
            id={`${id}-number`}
            type="text"  // Using text to remove the arrows
            value={number}
            onChange={handleNumberChange}
            className="w-16 px-3 py-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </label>
      </div>
    </BaseNode>
  );
};
