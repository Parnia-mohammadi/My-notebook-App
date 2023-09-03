import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>Add new note</h2>
      <form
        action=""
        className="note-form"
        onSubmit={handleSubmit}
        name="noteForm"
        id="noteForm"
      >
        <input
          className="text-field"
          type="text"
          placeholder="note title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
        />
        <input
          className="text-field"
          type="text"
          placeholder="note description ..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="desc"
          id="desc"
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
