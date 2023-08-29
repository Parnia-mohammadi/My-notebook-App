import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteItem from "./components/NoteList";
function App() {
  const [notes, setNotes]=useState([]);
  const handleAddNote =(newNote)=>{(prevNote)=>{setNotes([...prevNote,newNote])}};
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
        <AddNewNote onAddNote={handleAddNote}/>
        <NoteItem notes={notes}/>
      </div>
    </div>
  );
}

export default App;
