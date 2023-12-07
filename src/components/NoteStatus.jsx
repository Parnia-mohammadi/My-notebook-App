import { useNotes } from "../context/NotesContext";

function NoteStatus() {
  const notes= useNotes();
  //first way
  // let completedNoteNumber = 0;
  // notes.map((note) => {
  //   note.completed
  //     ? (completedNoteNumber += 1)
  //     : (completedNoteNumber += 0);
  // });
  //second way
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  //conditional rendering:
  if(!allNotes) return <h2>No Notes has been added yet.</h2> 
  return (
    <div className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed 
        <span>
          {
            /* {completedNoteNumber} */
            //second way:
            completedNotes
          }
        </span>
      </li>
      <li>
        Open <span>{allNotes - completedNotes}</span>
      </li>
    </div>
  );
}

export default NoteStatus;
