import RenderPatchNote from "./RenderPatchNote.jsx";
import patchService from '../../services/patchService';
import { useState, useEffect } from 'react';
import Loading from '../Loading/Loading.jsx';

function PatchNotesList() {
  const [patches, setPatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatches = async () => {
      try {
        const data = await patchService.getAllPatches();
        setPatches(data);
        setError(null);
      } catch (err) {
        setError('Failed to load the latest patches.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPatches();
    const intervalId = setInterval(fetchPatches, 60000); 
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <Loading />;
  if (error) return <h2 className="center-content">{error}</h2>;
  if (patches.length === 0) return <h2 className="center-content">No updates found.</h2>;

  return (
    <div className="patch-notes-container">
      <h2 className="Bio center-content">Latest Updates</h2>
      <div className="patch-list">
        {patches.map((patch) => (
          <RenderPatchNote key={patch._id || patch.id} note={patch} />
          // Reminder: Note comes from RenderPatchNote.jsx
        ))}
      </div>
    </div>
  );
}

export default PatchNotesList;