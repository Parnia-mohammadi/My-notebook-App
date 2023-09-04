import { useState } from "react";

function SortNote({ notes, sortBy, onSort }) {
  return (
    <div className="note-header">
      <h1>My Notes: ({notes.length})</h1>
      <select name="sort" id="sort" onChange={onSort} value={sortBy}>
        <option value="latest">sort based on latest notes</option>
        <option value="earliest">sort based on earliest notes</option>
        <option value="completed">sort based on completed notes</option>
      </select>
    </div>
  );
}

export default SortNote;
