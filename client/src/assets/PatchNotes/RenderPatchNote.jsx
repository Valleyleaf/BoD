import React, { useEffect, useState } from "react";
import "./patchnotes.css";

function RenderPatchNote({ note }) {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (note.content) {
      setLoading(true);
      fetch(note.content)
        .then((res) => (res.ok ? res.text() : "Content unavailable."))
        .then((text) => {
          setMarkdown(text);
          setLoading(false);
        })
        .catch(() => {
          setMarkdown("Error loading content.");
          setLoading(false);
        });
    }
  }, [note.content]);

  if (!note) return null;

  return (
    <article className="patch-note-card">
      <div className="flexColumn">
        {note.title && <h1>{note.title}</h1>}
        {note.date && <p className="patch-date">{note.date}</p>}
      </div>

      <div className="patch-body">
        {note.thumbnail && (
          <img 
            src={note.thumbnail} 
            alt={note.title || "Patch thumbnail"} 
            className="patch-thumbnail"
          />
        )}

        {loading ? (
          <p>Loading details...</p>
        ) : (
          <pre style={{ whiteSpace: "pre-wrap" }}>{markdown}</pre>
        )}
      </div>
      <hr /> {/* Visual separator between patches */}
    </article>
  );
}

export default RenderPatchNote;