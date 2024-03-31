import AddNewNote from "./AddNewNote";
import NoteList from "./NoteList";
function NoteApp({ sortBy }) {
  return (
    <div className="note-app">
      {/* <AddNewNote onAddNote={handleAddNote} />
       */}
      <AddNewNote />
      <NoteList sortBy={sortBy} />
    </div>
  );
}

export default NoteApp;
