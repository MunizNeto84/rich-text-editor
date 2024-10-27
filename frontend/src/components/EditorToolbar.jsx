import React from "react";

const EditorToolbar = ({ applyFormat }) => {
  return (
    <div className="toolbar">
      <button onClick={() => applyFormat("bold")}>Negrito</button>
      <button onClick={() => applyFormat("italic")}>Itálico</button>
      <button onClick={() => applyFormat("underline")}>Sublinhado</button>
      <button onClick={() => applyFormat("insertOrderedList")}>
        Lista Ordenada
      </button>
    </div>
  );
};

export default EditorToolbar;
