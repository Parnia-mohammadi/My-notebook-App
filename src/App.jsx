import "./App.css";
import AddNewNote from "./components/AddNewNote";
function App() {
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
        <AddNewNote />
        <div className="note-container">
          <div className="note-status">
            <p>
              All <span>1</span>
            </p>
            <p>
              Completed <span>2</span>
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
      </div>
    </div>
  );
}

export default App;
