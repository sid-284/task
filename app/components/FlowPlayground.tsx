'use client'; // Ensures this component is rendered on the client side

import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';

// Add custom styles for nodes
const nodeStyles = {
  background: 'white',
  color: 'black',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '10px',
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Start Node' },
    position: { x: 250, y: 5 },
    style: nodeStyles,
  },
  {
    id: '2',
    data: { label: 'Middle Node' },
    position: { x: 100, y: 100 },
    style: nodeStyles,
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'End Node' },
    position: { x: 400, y: 200 },
    style: nodeStyles,
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const FlowEditor: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  return (
    <div className="w-full h-screen bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className="bg-white"
      >
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowEditor;
