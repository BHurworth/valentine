import './App.css';
import love1 from "./Assets/love2.gif"
import {useNavigate} from "react-router-dom"




function Slide2() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <img src={love1} alt="loading..." />
          <div className='subText'>I love you so much...
          Meeting you has marked the beginning of so many things, and so many changes. </div>
          <div><button onClick={() =>
        {
              navigate("/slide3")
        }}>Next</button></div>
        </header>
      </div>
    );
  }
export default Slide2;
