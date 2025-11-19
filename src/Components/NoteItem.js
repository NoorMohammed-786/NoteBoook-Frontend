import React from "react";

const noteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 my-1">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description}</p>
            <div className="icons my-1">
              <button className="btn btn-danger">
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className="btn btn-warning mx-2">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default noteItem;
