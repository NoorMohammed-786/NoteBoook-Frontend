import React, { useEffect, useContext } from "react";
import NoteContext from "../context/notes/notecontext";

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, []); // ← dependency array is empty

  return (
    <div>
      <h1>This is about us page {a.notes.name}</h1>
    </div>
  );
};

export default About;
