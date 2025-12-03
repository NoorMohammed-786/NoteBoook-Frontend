import React from "react";
import noteContext from "../context/notes/notecontext";
import NoteItem from "./NoteItem";
import AddNotes from "./AddNotes";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const showAlert = props.showAlert;
  const context = React.useContext(noteContext);
  const { notes, GetNotes, UpdateNote } = context;
  const ref = React.useRef(null);
  const refclose = React.useRef(null);
  const navigate = useNavigate();
  const [anote, setnote] = React.useState({
    _id: "",
    title: "",
    description: "",
    tag: "",
  });
  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      showAlert("Please login to access your notes", "danger");
      navigate("/login");
      return; // important: stop running GetNotes()
    }

    GetNotes();
  }, []);

  const updatenote = (currentnote) => {
    ref.current.click(); // open modal
    //console.log("current note", currentnote);

    setnote({
      _id: currentnote._id,
      title: currentnote.title,
      description: currentnote.description,
      tag: currentnote.tag,
    });
  };

  const onchange = (e) => {
    setnote({ ...anote, [e.target.name]: e.target.value });
  };
  const handlechange = (e) => {
    //console.log("updating the note", anote);
    UpdateNote(anote._id, anote.title, anote.description, anote.tag);
    refclose.current.click(); // close modal
    showAlert("Updated Successfully", "success");
  };
  return (
    <>
      <AddNotes showAlert={showAlert} />
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
                ref={refclose}
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
                    value={anote.title}
                    minLength={5}
                    required
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
                    value={anote.description}
                    minLength={5}
                    required
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
                    value={anote.tag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlechange}
                disabled={
                  anote.title.length < 5 || anote.description.length < 5
                }
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 container">
        <h2>Your Notes</h2>
        <div className="container mx-3">
          {notes.length === 0 && (
            <h2 style={{ color: "red", fontStyle: "italic" }}>
              No notes to display
            </h2>
          )}
        </div>
        {notes &&
          notes.map((note) => (
            <NoteItem
              showAlert={showAlert}
              key={note._id || Math.random()}
              note={note}
              updatenote={updatenote}
            />
          ))}
      </div>
    </>
  );
};

export default Notes;
