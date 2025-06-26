import React from "react";
import { PatchNotes } from "../Info/PatchNotes/PatchNotes.js";
import RenderPatchNote from "./RenderPatchNote.jsx";
//Below passes PatchNotes into RenderPatchNote.jsx using it's function PatchNoteRender.
//to bring back a result. Technically could just fuse the two.
function PatchNotesList() {
  return (
    <div>
      {PatchNotes.map(note => (
        <RenderPatchNote key={note.id} note={note} />
      ))}
      
    </div>
  );
}
//This will need to be changed to allow filtering.

export default PatchNotesList;