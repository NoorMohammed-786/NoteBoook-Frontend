import { useState } from "react";
import NoteContext from "./notecontext";


const NoteState = (props) => {
  const initialnotes = [
  {
    "_id": "6902fbd5e84cf063he166fa76",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:01.106Z",
    "__v": 0
  },
  {
    "_id": "6902fbd9e84chf063e166fa78",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 2",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:05.148Z",
    "__v": 0
  },
  {
    "_id": "6902rfbdde84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde84cf063eh166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde84cf0h63e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbddge84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbddeh84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde8g4cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdtde84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdd4e84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde834cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbd2de84cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde284cf063e166fa7a",
    "user": "6901da454a78b129d884a78e",
    "title": "Noor 3",
    "description": "Noor Mearr Bagu 2",
    "tag": "savings",
    "date": "2025-10-30T05:47:09.998Z",
    "__v": 0
  },
  {
    "_id": "6902fbdde84cf1063e166fa7a",
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
