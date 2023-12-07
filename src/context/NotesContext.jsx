import { createContext, useContext, useReducer } from "react";

const NotesContext= createContext();
const NotesDispatchContext= createContext(null);
function noteReducer(notes, { type, payload }) {
    switch (type) {
      case "add": {
        return [...notes, payload];
      }
      case "delete": {
        const filterNotes = notes.filter((n) => n.id != payload);
        return filterNotes;
      }
      case "complete": {
        const id = payload.target.id;
        return notes.map((note) =>
          note.id == id ? { ...note, completed: !note.completed } : note
        );
      }
      default:
        throw new Error("unknown error :" + type);
    }
  }

export default function NotesProvider({children}){
    const [notes, dispatch] = useReducer(noteReducer, []);
    return(
        <NotesContext.Provider value={notes}>
            <NotesDispatchContext.Provider value={dispatch}>
                {children}
            </NotesDispatchContext.Provider>
        </NotesContext.Provider>
    );
}

export function useNotes(){
    return useContext(NotesContext);
}

export function useNotesDispatch(){
    return useContext(NotesDispatchContext);
}