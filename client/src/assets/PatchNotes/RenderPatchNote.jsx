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
        <div className="flexColumn">
            <h1>{note.title}</h1>
            <p>{note.date}</p>
        </div>
        <div>
            <img src={note.thumbnail} alt={note.title} />
            <pre style={{ whiteSpace: "pre-wrap" }}>{markdown}</pre>
        </div>
    </div>
  );
}

export default RenderPatchNote;

//This is garbage. Change it. Make smaller components like the Dota page. Limit properties.