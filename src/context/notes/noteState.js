import { useState } from "react";
import NoteContext from "./notecontext";


const NoteState = (props) => {
  const initialnotes = [
  {
    "_id": "6902fbd5e84cf063e166fa76",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:01.106Z",
    "__v": 0
  },
  {
    "_id": "6902fbd9e84cf063e166fa78",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 2",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:05.148Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  }
];
const [notes, setnotes] = useState(initialnotes);
  
  return (
    <NoteContext.Provider value={{notes,setnotes}}>  
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
