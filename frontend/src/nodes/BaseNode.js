import React from 'react';
import { Handle, Position } from 'reactflow';

// BaseNode component to create a custom node 
export const BaseNode = ({ id, type, label, children, handlePosition = Position.Right, handleType = 'source', style }) => {
    return (
      <div  className="bg-gradient-to-r from-purple-600 to-purple-800 shadow-lg rounded-lg p-4 flex flex-col justify-center items-center relative" style={{ width: 200, height: 150, border: '1px solid black', ...style }}>
        <div className="text-white font-semibold text-sm mb-2">
          <span>{label}</span>
        </div>
        <div className="flex-1 flex items-center justify-center">{children}</div>
        <Handle
          style={{
            background: '#555', 
            width: '12px',       
            height: '12px',      
            borderRadius: '50%', 
          }}
          type={handleType}
          position={handlePosition}
          id={`${id}-handle`}
          className="bg-blue-500 w-3 h-3 rounded-full border-2 border-white"
        />
      </div>
    );
  };