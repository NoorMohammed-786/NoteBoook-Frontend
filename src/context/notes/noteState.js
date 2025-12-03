import { useState } from "react";
import NoteContext from "./notecontext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setnotes] = useState("");
  const [user, setUser] = useState({});
  const Addnote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    // setnotes(notes.concat(note));
    //  console.log("Adding a new note", note);
    setnotes((prevNotes) => [...prevNotes, note]); // ← safest
    console.log("Adding a new note:", note);
  };

  // const GetAllNotes = async () => {
  //   //API Call
  //   const response = await fetch(`${host}/api/notes/fetchnotesall`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   //setnotes(json);
  // };

  const GetNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    //console.log("Fetched notes json:", json); // 🔥 DEBUG HERE
    setnotes(json);

    // if (Array.isArray(json)) {
    //   setnotes(json);
    // } else {
    //   // Backend returned an error instead of notes array
    //   setnotes([]);
    // }
  };

  const DeleteNote = async (_id) => {
    console.log("Deleting the note with id" + _id);
    const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    setnotes(newNotes);
  };
  const UpdateNote = async (_id, title, description, tag) => {
    //console.log("Updating the note with id" + _id);
    const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    //logically we can update the note but to keep the data consistent we will fetch the updated note from server

    // const updatedNote = await response.json();
    // setnotes((prevNotes) =>
    //   prevNotes.map((note) => (note._id === _id ? updatedNote : note))
    // );

    //logic to edit in client side
    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === _id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  };

  const loggedUser = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setUser(json.User);
    //console.log("User data:", json); // 🔥 DEBUG HERE
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        setnotes,
        Addnote,
        DeleteNote,
        UpdateNote,
        loggedUser,
        GetNotes,
        user,
        setUser,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
