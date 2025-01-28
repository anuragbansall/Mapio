import React from "react";
import Canva from "./components/canvas";
import SideBar from "./components/sidebar";
import "@xyflow/react/dist/style.css";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <Canva />
    </div>
  );
}

export default App;
