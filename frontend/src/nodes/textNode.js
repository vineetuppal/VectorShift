import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textAreaRef = useRef(null);
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 150 });
  const [variables, setVariables] = useState([]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      // Adjust height to fit the content
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;

      // Adjust width based on the content (scrollWidth)
      const textAreaWidth = textAreaRef.current.scrollWidth;
      const textAreaHeight = textAreaRef.current.scrollHeight;

      setNodeSize({
        width: Math.min(Math.max(textAreaWidth + 20 , 200), 400), // Set width between 200px and 400px
        height: Math.max(textAreaHeight + 20, 100 + variables.length * 30), // Adjust height for the content and handles
      });
    }

    // Extract valid variable names from the text
    const newVariables = [
      ...currText.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g),
    ].map((match) => match[1]);

    setVariables(newVariables);
  }, [currText]);

  return (
    <BaseNode id={id} label="Text" style={nodeSize}>
      <div className="flex flex-col space-y-4">
        {/* Text Area */}
        <label className="text-white text-sm font-medium">
          Text:
          <textarea
            ref={textAreaRef}
            value={currText}
            onChange={handleTextChange}
            className="w-full text-white bg-gray-800 border border-gray-600 rounded-md p-2 resize-none overflow-hidden focus:ring-2 focus:ring-purple-500 focus:outline-none"
            style={{ minHeight: '80px', width: '100%' }}
          />
        </label>
      </div>

      {/* Variables */}
      {variables.map((variable, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${50 + index * 30}px`, // Position handles vertically
            left: '-50px', // Position labels to the left of the node
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              background: '#2d2d2d', // Dark background for better contrast
              color: '#fff', // White text for readability
              padding: '4px 8px', // Increased padding for better visibility
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '5px',
            }}
          >
            {variable}
          </span>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${variable}`}
            style={{
              background: '#555',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
            }}
          />
        </div>
      ))}
    </BaseNode>
  );
};
