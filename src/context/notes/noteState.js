import NoteContext from "./notecontext";
import React, { useState } from "react";

const NoteState = (props) => {
  const state = {
    name: "Harry",
    age: 24,
  };
  const [notes, setNotes] = useState(state);

  const update = () => {
    setTimeout(() => {
      setNotes({
        name: "Rohan",
        age: 25,
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ notes, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
