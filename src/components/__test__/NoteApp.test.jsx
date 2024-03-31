import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NotesProvider from "../../context/NotesContext";

test("NoteApp #1:should input be empty after submit", () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  const inputTitle = screen.getByPlaceholderText("note title ...");
  const inputDescription = screen.getByPlaceholderText("note description ...");
  fireEvent.change(inputTitle, { target: { value: "note one title" } });
  fireEvent.change(inputDescription, {
    target: { value: "note one description" },
  });
  const button = screen.getByRole("button", { name: /Add New Note/i });
  fireEvent.click(button);
  expect(inputTitle.value).toBe("");
});
