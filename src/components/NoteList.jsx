function NoteList({ notes }) {
  return (
    <div className="note-container">
      <div className="note-status">
        <p>
          All <span></span>
        </p>
        <p>
          Completed <span></span>
        </p>
        <p>
          Open <span>3</span>
        </p>
      </div>
      <div className="note-item">
        <div className="note-item__header">
          <div className="title">jkf</div>
          <div className="desc">adding a new note</div>
          <div className="trash">&#128465;</div>
          <div className="action">
            <input type="checkbox" />
          </div>
        </div>
        <div className="note-item__footer">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
