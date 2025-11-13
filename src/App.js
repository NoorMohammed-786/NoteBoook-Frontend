import "./App.css";

import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from "./context/notes/noteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <MyNavbar />
          <Alert message="This is amazing React Course"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
