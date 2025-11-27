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
  setnote({ title: "", description: "", tag: "default" });
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
              value={note.title}
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
              minLength={5}
              required
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
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handlechange}
            disabled={note.title.length<5 || note.description.length<5}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNotes;
