import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Input"
      handlePosition={Position.Right}
      handleType="source"
    >
      <div className="flex flex-col space-y-3">
        {/* Name Input */}
        <div className="flex flex-col">
          <label className="text-white text-xs font-medium mb-1">Name:</label>
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
            className="bg-gray-800 text-white text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Type Dropdown */}
        <div className="flex flex-col">
          <label className="text-white text-xs font-medium mb-1">Type:</label>
          <select
            value={inputType}
            onChange={handleTypeChange}
            className="bg-gray-800 text-white text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
    </BaseNode>
  );
};

