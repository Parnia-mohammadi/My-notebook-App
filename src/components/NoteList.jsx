import NoteStatus from "./NoteStatus"
function NoteList({ notes, onDelete, onComplete }) {
  return (
    <div className="note-container">
      <NoteStatus  notes={notes}/>
      {notes.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}
export default NoteList;
function NoteItem({ note, onDelete, onComplete }) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button className="trash" onClick={() => onDelete(note.id)}>
            &#128465;
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={onComplete}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
