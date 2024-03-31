import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
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
