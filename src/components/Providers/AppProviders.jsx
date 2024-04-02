import NotesProvider from "../../context/NotesContext";

// this function used when we have more then one context
function AppProviders({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}

export default AppProviders;
