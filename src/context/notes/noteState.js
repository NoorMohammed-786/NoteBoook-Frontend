import NoteContext from "./notecontext";


const NoteState = (props) => {
  const notes = {
    name: "Harry",
    age: 24,
  };
  
  return (
    <NoteContext.Provider value={notes  }>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
