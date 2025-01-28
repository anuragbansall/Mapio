import React from "react";

function index() {
  const draggableShapes = [
    { id: "1", label: "Process", type: "textUpdater", color: "#A855F7" },
    { id: "2", label: "Decision", type: "textUpdater", color: "#3B82F6" },
    { id: "3", label: "Entity", type: "textUpdater", color: "#22C55E" },
  ];

  const handleDragStart = (e, shape) => {
    e.dataTransfer.setData("shape", JSON.stringify(shape));
  };

  return (
    <div className="w-[18rem] shadow-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Flowchart Shapes</h2>
      <div className="flex flex-col gap-2">
        {draggableShapes.map((shape) => (
          <div
            className={`p-3 cursor-pointer border-2 rounded-md ${shape.type}`}
            style={{ borderColor: shape.color }}
            key={shape.id}
            draggable
            onDragStart={(e) => handleDragStart(e, shape)}
          >
            {shape.label}
          </div>
        ))}
        <p className="text-sm text-gray-500 mt-4">
          Drag shapes to the canvas Connect nodes by dragging between handles
          Double-click to edit text
        </p>
      </div>
    </div>
  );
}

export default index;
