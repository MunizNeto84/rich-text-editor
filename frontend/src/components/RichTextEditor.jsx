import React, { useState, useRef } from "react";
import EditorToolbar from "./EditorToolbar";
import TextEditor from "./TextEditor";

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("<p>Digite seu texto aqui... </p>");

  const applyFormat = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
  };

  return (
    <div>
      <EditorToolbar applyFormat={applyFormat} />
      <TextEditor ref={editorRef} content={content} setContent={setContent} />
    </div>
  );
};

export default RichTextEditor;
