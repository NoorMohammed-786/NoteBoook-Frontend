// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import NoteContext from "../context/notes/notecontext";

// const Navbar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {}, [location]);

//   const handleClick = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const { user, setUser, loggedUser } = React.useContext(NoteContext);

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       loggedUser();
//     } else {
//       setUser({});
//     }
//   }, []);

//   console.log("Navbar user:", user);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a className="navbar-brand" href="/">
//         Navbar
//       </a>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item active">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/" ? "active" : ""
//               }`}
//               to="/"
//             >
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               className={`nav-link ${
//                 location.pathname === "/about" ? "active" : ""
//               }`}
//               to="/about"
//             >
//               About
//             </Link>
//           </li>
//         </ul>

//         {localStorage.getItem("token") ? (
//           <form className="d-flex align-items-center">
//             <span className="text-light me-3">
//               Welcome, {user?.name || user?.email || "User"}
//             </span>
//             <button
//               onClick={handleClick}
//               className="btn btn-primary mx-1"
//               type="submit"
//             >
//               Logout
//             </button>
//           </form>
//         ) : (
//           <form className="d-flex" role="search">
//             <Link to="/login" className="btn btn-primary mx-1" type="submit">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-primary mx-" type="submit">
//               Sign-Up
//             </Link>
//           </form>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoteContext from "../context/notes/notecontext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser, loggedUser } = React.useContext(NoteContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (localStorage.getItem("token")) {
        await loggedUser();  // fetch user from backend
      } else {
        setUser({});
      }
      setLoading(false); // stop loading after user is ready
    };
    fetchUser();
  }, []);

  const handleClick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
          </li>
        </ul>

        {localStorage.getItem("token") ? (
          <form className="d-flex align-items-center">
            <span className="text-light me-3">
              {loading ? "Loading..." : `Welcome, ${user?.name || user?.email || "User"}`}
            </span>
            <button onClick={handleClick} className="btn btn-primary mx-1" type="button">
              Logout
            </button>
            
          </form>
        ) : (
          <form className="d-flex" role="search">
            <Link to="/login" className="btn btn-primary mx-1">Login</Link>
            <Link to="/signup" className="btn btn-primary mx-1">Sign-Up</Link>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
