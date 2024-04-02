import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";

function AddNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note Title/i);
  const inputDescription = screen.getByPlaceholderText(/Note Description/i);
  const button = screen.getByRole("button", { name: /Add New Note/i });
  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, { target: { value: note.description } });
    fireEvent.click(button);
  });
}
test("NoteApp #1:should input be empty after submit", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  const inputTitle = screen.getByPlaceholderText("note title ...");
  // const inputDescription = screen.getByPlaceholderText("note description ...");
  // fireEvent.change(inputTitle, { target: { value: "note one title" } });
  // fireEvent.change(inputDescription, {
  //   target: { value: "note one description" },
  // });
  // const button = screen.getByRole("button", { name: /Add New Note/i });
  // fireEvent.click(button);
  AddNote([{ title: "note title one", description: "note description one" }]);
  expect(inputTitle.value).toBe("");
});
test("NoteAPP #2:should add multiple items", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  AddNote([
    { title: "note title one", description: "note description one" },
    { title: "note title two", description: "note description two" },
    { title: "note title three", description: "note description three" },
  ]);
  const divEl = screen.getAllByText(/note title/i);
  expect(divEl.length).toBe(3);
});
