import { fireEvent, render, screen } from "../../test-utils";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";
import AppProviders from "../Providers/AppProviders";

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
  // render(
  //   <NotesProvider>
  //     <NoteApp sortBy="latest" />
  //   </NotesProvider>
  // );
  render(<NoteApp sortBy="latest" />);
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
  // render(
  //   <NotesProvider>
  //     <NoteApp sortBy="latest" />
  //   </NotesProvider>
  // );
  render(<NoteApp sortBy="latest" />);
  AddNote([
    { title: "note title one", description: "note description one" },
    { title: "note title two", description: "note description two" },
    { title: "note title three", description: "note description three" },
  ]);
  const divEl = screen.getAllByText(/note title/i);
  expect(divEl.length).toBe(3);
});
test("NoteApp #3:should not have active class when rendered initially", () => {
  // render(
  //   <NotesProvider>
  //     <NoteApp sortBy="latest" />
  //   </NotesProvider>
  // );
  render(<NoteApp sortBy="latest" />);
  AddNote([{ title: "note title one", description: "note description one" }]);
  const el = screen.getByTestId("note-item");
  expect(el).not.toHaveClass("completed");
});
test("NoteApp #4:should have active class when item clicked", () => {
  //adding wrapper
  // render(<NoteApp sortBy="latest" />, { wrapper: AppProviders });
  render(<NoteApp sortBy="latest" />);
  AddNote([{ title: "note title one", description: "note description one" }]);
  const el = screen.getByTestId("note-item");
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(el).toHaveClass("completed");
});
