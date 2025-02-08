import './App.css';
import love1 from "./Assets/love3.gif"
import {useNavigate} from "react-router-dom"




function Slide3() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <img src={love1} alt="loading..." />
          <div className='subText'>The truth is... </div>
          <div><button onClick={() =>
        {
              navigate("/slide4")
        }}>Next</button></div>
        </header>
      </div>
    );
  }
export default Slide3;
