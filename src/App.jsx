import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };
  const handleDelete = (id) => {
    //first way:
    // const filterNotes = notes.filter((n) => n.id !== id);
    // setNotes(filterNotes);
    //second way
    setNotes((prevNote)=>prevNote.filter((n)=>n.id !==id))
  };
  const handleComplete = (e) => {
    const id = Number(e.target.value);
    //first way
    // const newNotes = notes.map((note) =>
    //   note.id == id ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);
    //second way
    setNotes((prevNote) =>
    prevNote.map((note) =>
      note.id == id ? { ...note, completed: !note.completed } : note
    )
  );
  };
  return (
    <div className="container">
      <div className="note-header">
        <h1>02: NoteApp starter file</h1>
        <select name="sort" id="sort">
          <option value="sort by completed">sort by completed</option>
          <option value="sort by time">sort by time</option>
          <option value="sort by adding time">sort by adding time</option>
        </select>
      </div>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNote} />
        <NoteList
          notes={notes}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </div>
    </div>
  );
}

export default App;
