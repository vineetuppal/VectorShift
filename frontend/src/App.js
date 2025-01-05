import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { useStore } from './store';

function App() {
  // Accessing the nodes and edges from the store 
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  return (
    <div relative min-h-screen>
      <div  className="bg-classy-gradient text-white min-h-screen">
        <div className="inset-0 bg-black opacity-20 relative z-10"></div>
        {/* Render the PipelineToolbar component */}
        <PipelineToolbar />
        {/* Render the PipelineUI component where the pipeline is displayed */}
        <PipelineUI />
        {/* Render the SubmitButton component, passing the nodes and edges as props */}
        <div className="flex justify-center mt-6">
          <SubmitButton nodes={nodes} edges={edges} />
        </div>
      </div>
    </div>
  );
}

export default App;
