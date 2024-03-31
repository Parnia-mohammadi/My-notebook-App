import { useState } from "react";
import "./App.css";
import NoteApp from "./components/NoteApp";
import SortNote from "./components/SortNote";
import NotesProvider from "./context/NotesContext";
function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("earliest");
  // function noteReducer(notes, { type, payload }) {
  //   switch (type) {
  //     case "add": {
  //       return [...notes, payload];
  //     }
  //     case "del": {
  //       const filterNotes = notes.filter((n) => n.id != payload);
  //       return filterNotes;
  //     }
  //     case "complete": {
  //       const id = payload.target.id;
  //       return notes.map((note) =>
  //         note.id == id ? { ...note, completed: !note.completed } : note
  //       );
  //     }
  //     default:
  //       throw new Error("unknown error :" + type);
  //   }
  // }
  // const [notes, dispatch] = useReducer(noteReducer, []);
  //using useReducer
  // const handleAddNote = (newNote) => {
  //   dispatch({ type: "add", payload: newNote });
  // };
  // const handleDelete = (id) => {
  //   dispatch({ type: "del", payload: id });
  // };
  // const handleComplete = (e) => {
  //   dispatch({ type: "complete", payload: e });
  // };
  // const handleAddNote = (newNote) => {
  //   setNotes((prevNote) => [...prevNote, newNote]);
  // };
  // const handleDelete = (id) => {
  //   //first way:
  //   // const filterNotes = notes.filter((n) => n.id !== id);
  //   // setNotes(filterNotes);
  //   //second way
  //   setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
  // };
  // const handleComplete = (e) => {
  //   const id = Number(e.target.value);
  //   //first way
  //   // const newNotes = notes.map((note) =>
  //   //   note.id == id ? { ...note, completed: !note.completed } : note
  //   // );
  //   // setNotes(newNotes);
  //   //second way
  //   setNotes((prevNote) =>
  //     prevNote.map((note) =>
  //       note.id == id ? { ...note, completed: !note.completed } : note
  //     )
  //   );
  // };
  return (
    <NotesProvider>
      <div className="container">
        <SortNote sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteApp sortBy={sortBy} />
      </div>
    </NotesProvider>
  );
}

export default App;
