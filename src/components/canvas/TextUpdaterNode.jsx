import React, { useState, useEffect, useRef } from "react";
import { Handle } from "@xyflow/react";

const TextUpdaterNode = ({ data }) => {
  const [value, setValue] = useState(data.value || "");
  const textareaRef = useRef(null);

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (data.onChange) {
      data.onChange(event.target.value);
    }
  };

  return (
    <div className="w-fit h-fit flex justify-center items-center p-2 border bg-white rounded-md">
      <Handle type="target" position="top" className="bg-black" />
      <textarea
        ref={textareaRef}
        placeholder="Enter text"
        autoFocus
        value={value}
        onChange={handleChange}
        rows={1}
        className="min-w-[10rem] max-w-[15rem] text-center outline-0 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 resize-none overflow-hidden"
      />
      <Handle type="source" position="bottom" className="bg-black" />
    </div>
  );
};

export default TextUpdaterNode;
