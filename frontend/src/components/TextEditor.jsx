import React, { forwardRef } from "react";

const TextEditor = forwardRef(({ content, setContent }, ref) => {
  const handleInputChange = (event) => {
    setContent(event.target.innerHTML);
  };

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning={true}
      onInput={handleInputChange}
      style={{
        minHeight: "200px",
        border: "1px solid #ccc",
        padding: "10px",
        maarginTop: "10px",
      }}
      dangerousSetInnetHTML={{ __html: content }}
    ></div>
  );
});

export default TextEditor;
