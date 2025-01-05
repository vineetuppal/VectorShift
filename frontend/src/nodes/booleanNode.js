import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const BooleanNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || false);

  const handleChange = (e) => {
    setValue(e.target.checked);
  };

  return (
    <BaseNode
      id={id}
      label="Boolean"
      handlePosition={Position.Right}
      handleType="source"
    >
      <div className="flex flex-col items-start space-y-3">
        {/* Checkbox */}
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={value}
            onChange={handleChange}
            className="w-5 h-5 text-purple-500 bg-gray-800 border-gray-600 rounded-md focus:ring-purple-500 focus:ring-2"
          />
          <span className="text-white text-sm font-medium">True/False</span>
        </label>
      </div>
    </BaseNode>
  );
};

