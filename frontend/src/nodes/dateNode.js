import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || '');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      label="Date"
      handlePosition={Position.Right}
      handleType="source"
    >
      <div className="flex flex-col items-start space-y-3">
        {/* Date Input */}
        <label className="flex flex-col space-y-1">
          <span className="text-white text-sm font-medium">Select Date:</span>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </label>
      </div>
    </BaseNode>
  );
};
