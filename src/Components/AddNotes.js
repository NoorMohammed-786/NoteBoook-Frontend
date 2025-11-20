import React from "react";
import noteContext from "../context/notes/notecontext";


const AddNotes = () => {
  const context = React.useContext(noteContext);
  const [note, setnote] = React.useState({
    title: "",
    description: "",
    tag: "default",
  });
  const { Addnote } = context;
  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
    const handlechange = (e) => {
    e.preventDefault();
    Addnote(note.title, note.description, note.tag);
  };
  return (
    <div>
      <div className="my-3">
        <h2>Add a note</h2>
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handlechange}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
