import PatchNotesList from './RenderPatchNoteList.jsx';

function PatchNotes() {
  return (
    <div>
      <PatchNotesList />
    </div>
  );
}

export default PatchNotes;

//This is garbage. Change it. Future will pull from atlasDB collection.
// Collection structure will be based on: Title, Date, disc and then an array of Patch footnotes. Each footnote will have a Title, justification and a list of changes.

// Note, I will need to have a general article looking layout for the patch notes page, and then I will need a dynamic rendering option simular to how I did the commander.jsx
// To render the whole patch note. The article will contain Title, Date and disc, while the full content will include the array of Patch footnotes.