import React from 'react';
import { BaseNode } from './BaseNode';
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} label="LLM" handlePosition={Position.Right} handleType="source">
      <div className="flex flex-col items-center space-y-3">
        {/* LLM Text */}
        <span className="text-white text-sm font-medium">This is a LLM.</span>
      </div>

      {/* Target Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        className="bg-blue-500 w-6 h-6 rounded-full border-2 border-white"
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        className="bg-blue-500 w-6 h-6 rounded-full border-2 border-white"
        style={{ top: `${200 / 3}%` }}
      />

      {/* Source Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="bg-blue-500 w-6 h-6 rounded-full border-2 border-white"
      />
    </BaseNode>
  );
};
