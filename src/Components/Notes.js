import React from "react";
import noteContext from "../context/notes/notecontext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = React.useContext(noteContext);
  const { notes,GetNotes,GetAllNotes } = context;
  React.useEffect(() => {
    GetNotes();
    GetAllNotes();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <AddNotes />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
