import React, { useEffect, useState } from "react";
//note gets passed from RenderPatchNote.jsx
function RenderPatchNote({ note }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(note.content)
      .then(res => res.text())
      .then(setMarkdown);
  }, [note.content]);

  return (
    <div>
      <h1>{note.title}</h1>
      <img src={note.thumbnail} alt={note.title} />
      <p>{note.date}</p>
      <pre style={{ whiteSpace: "pre-wrap" }}>{markdown}</pre>
    </div>
  );
}

export default RenderPatchNote;