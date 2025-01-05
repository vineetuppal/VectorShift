// submit.js
// submit.js
import React from 'react';

export const SubmitButton = ({ nodes, edges }) => {
  const handleSubmit = async () => {
    try {
      // Convert nodes and edges to a JSON object
      const pipeline = { nodes, edges };

      // Send the POST request to the backend
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set content type as JSON
        },
        body: JSON.stringify(pipeline), // Send the pipeline as JSON
      });

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to parse pipeline: ' + response.statusText);
      }

      // Parse the response data
      const data = await response.json();
      console.log('Pipeline parsed successfully:', data);
      alert(`Number of Nodes: ${data.num_nodes}\nNumber of Edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    } catch (error) {
      console.error('Error during submission:', error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-4 rounded-lg glow hover:scale-105 transform transition-transform duration-300">
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
