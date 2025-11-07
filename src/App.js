import './App.css';

import MyNavbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <MyNavbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
    </Router>
     
    </>
   
  );
}

export default App;
