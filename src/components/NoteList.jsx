function NoteList({ notes }) {
  return (
    <div className="note-container">
      <div className="note-status">
        <p>
          All <span>{notes.length}</span>
        </p>
        <p>
          Completed <span></span>
        </p>
        <p>
          Open <span>3</span>
        </p>
      </div>
      {notes.map((note) => {
        return <NoteItem note={note} key={note.id} />;
      })}
    </div>
  );
}
export default NoteList;
function NoteItem({ note }) {
  const handleDelete = ()=>{
    return(
      note={}
    )
  }
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button className="trash" onClick={handleDelete}>&#128465;</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
