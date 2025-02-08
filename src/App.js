import logo from './logo.svg';
import './App.css';
import love1 from "./Assets/love1.gif"
import Slide1 from './slide1';
import Slide2 from "./slide2"
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom"
import Slide3 from './slide3';
import Slide4 from './slide4';
import Slide5 from './slide5';
import Slide6 from './slide6';
import GoodGirl from './goodgirl';



function App() {
  

  return (
    <Router>    <div className="App">
      <header className="App-header">
        <Routes >
          <Route path ="" element={<Slide1></Slide1>}>
            </Route>


          <Route path ="/slide2" element={<Slide2></Slide2>}></Route>

            <Route path="/slide3" element={<Slide3></Slide3>}></Route>
            
            <Route path="/slide4" element={<Slide4></Slide4>}></Route>
            <Route path="/slide5" element={<Slide5></Slide5>}></Route>
            <Route path="/slide6" element={<Slide6></Slide6>}></Route>
            <Route path="/GoodGirl" element={<GoodGirl></GoodGirl>}></Route>


        </Routes>
     
      
 
      </header>
    </div>
    </Router>

  );
}

export default App;
