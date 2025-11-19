import { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const initialnotes = [
   
    {
      _id: "6902fbdde84cf1063e166fa7a",
      user: "6901da454a78b129d884a78e",
      title: "Noor 3",
      description: "Noor Mearr Bagu 2",
      tag: "savings",
      date: "2025-10-30T05:47:09.998Z",
      __v: 0,
    },
  ];
  const [notes, setnotes] = useState(initialnotes);
  const Addnote = (title, description, tag) => {
    console.log("Adding a new note");
    const note = {
      _id: "6902fbdde84cf063e166fa7a",
      user: "6901da454a78b129d884a78e",
      title: title,
      description: description,
    };
    setnotes(notes.concat(note));
  };

  return (
    <NoteContext.Provider value={{ notes, setnotes, Addnote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
