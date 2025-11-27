import React from "react";
import noteContext from "../context/notes/notecontext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = React.useContext(noteContext);
  const { notes, GetNotes, GetAllNotes } = context;
  React.useEffect(() => {
    GetNotes();
    GetAllNotes();
    // eslint-disable-next-line
  }, []);
  const ref = React.useRef(null);
  const [note, setnote] = React.useState({
    title: "",
    description: "",
    tag: "",
  });
  const updatenote = (currentnote) => {
    ref.current.click(); // open modal

    setnote({
      title: currentnote.title,
      description: currentnote.description,
      tag: currentnote.tag,
    });
  };

  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handlechange = (e) => {
    e.preventDefault();
    console.log("Updating the note to" , note);
  };
  return (
    <>
      <AddNotes />
      {/* Button that opens the modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
        style={{ display: "none" }} // hide if you're using ref click only
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-2">
                  <label htmlFor="title" className="form-label">
                    TiTle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    onChange={onchange}
                    value={note.title}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="Description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Description"
                    name="description"
                    onChange={onchange}
                    value={note.description}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    onChange={onchange}
                    value={note.tag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handlechange}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updatenote={updatenote} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
// import React from "react";
// import noteContext from "../context/notes/notecontext";
// import NoteItem from "./NoteItem";
// import AddNotes from "./AddNotes";

// const Notes = () => {
//   const context = React.useContext(noteContext);
//   const { notes, GetNotes, GetAllNotes } = context;

//   React.useEffect(() => {
//     GetNotes();
//     GetAllNotes();
//     // eslint-disable-next-line
//   }, []);

//   // Modal ref
//   const ref = React.useRef(null);

//   // Correct state
//   const [note, setnote] = React.useState({
//     title: "",
//     description: "",
//     tag: "",
//   });

//   // FIXED: loads data into modal
//   const updatenote = (currentnote) => {
//     ref.current.click(); // open modal

//     setnote({
//       title: currentnote.title,
//       description: currentnote.description,
//       tag: currentnote.tag,
//     });
//   };

//   // FIXED: names match state
//   const onchange = (e) => {
//     setnote({ ...note, [e.target.name]: e.target.value });
//   };

//   const handlechange = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <AddNotes />

//       {/* Hidden button to open modal */}
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#exampleModal"
//         ref={ref}
//         style={{ display: "none" }}
//       >
//         Launch demo modal
//       </button>

//       {/* Modal */}
//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">

//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>

//             <div className="modal-body">
//               <form className="my-3">
//                 <div className="mb-2">
//                   <label htmlFor="title" className="form-label">Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="title"
//                     name="title"
//                     onChange={onchange}
//                     value={note.title}
//                   />
//                 </div>

//                 <div className="mb-2">
//                   <label htmlFor="description" className="form-label">Description</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="description"
//                     name="description"
//                     onChange={onchange}
//                     value={note.description}
//                   />
//                 </div>

//                 <div className="mb-2">
//                   <label htmlFor="tag" className="form-label">Tag</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="tag"
//                     name="tag"
//                     onChange={onchange}
//                     value={note.tag}
//                   />
//                 </div>
//               </form>
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" className="btn btn-primary">
//                 Update
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="row my-3">
//         <h2>Your Notes</h2>
//         {notes.map((note) => {
//           return (
//             <NoteItem key={note._id} note={note} updatenote={updatenote} />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Notes;
