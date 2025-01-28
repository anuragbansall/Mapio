import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function Canva() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const initialView = {
    x: 450,
    y: 150,
    zoom: 1,
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const shape = JSON.parse(e.dataTransfer.getData("shape"));
      const bounds = e.target.getBoundingClientRect();
      const offsetX = e.clientX - bounds.left - 500; 
      const offsetY = e.clientY - bounds.top - 150;

      const newNode = {
        id: `${nodes.length + 1}`,
        position: { x: offsetX, y: offsetY },
        data: { label: shape.label, type: shape.type },
      };

      setNodes((nodes) => [...nodes, newNode]);
    },
    [nodes, setNodes]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-1 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        defaultViewport={initialView}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
