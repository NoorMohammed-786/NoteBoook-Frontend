import { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
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
      tag: tag,
      description: description,
    };
    setnotes(notes.concat(note));
  };

  const GetAllNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchnotesall`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    //setnotes(json);
  };

  const GetNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMWRhNDU0YTc4YjEyOWQ4ODRhNzhlIn0sImlhdCI6MTc2MTgwMzE5Mn0.t8QWvfTmfKnNfwMowGSXsRJepW-qe8761YyuFqr1Rm0",
      },
    });
    const json = await response.json();
    //console.log(json);
    setnotes(json);
  };
  

  const DeleteNote = async(id) => {
    console.log("Deleting the note with id" + id);
   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjkwMWRhNDU0YTc4YjEyOWQ4ODRhNzhlIn0sImlhdCI6MTc2MTgwMzE5Mn0.t8QWvfTmfKnNfwMowGSXsRJepW-qe8761YyuFqr1Rm0",
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => { return note._id !== id; });
    setnotes(newNotes);
    

  };
  const UpdateNote = (id) => {
    console.log("Updating the note with id" + id);
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        setnotes,
        Addnote,
        DeleteNote,
        UpdateNote,
        GetAllNotes,
        GetNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
