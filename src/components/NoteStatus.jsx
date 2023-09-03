function NoteStatus({notes}) {
    let completedNoteNumber = 0;
    notes.map((note) => {
      note.completed
        ? (completedNoteNumber += 1)
        : (completedNoteNumber += 0);
    });
    return (
    <div className="note-status">
        <li>
          All <span>{notes.length}</span>
        </li>
        <li>
          Completed 
          <span>
            {completedNoteNumber}
          </span>
        </li>
        <li>
          Open<span> 3</span>
        </li>
      </div>
  )
}

export default NoteStatus