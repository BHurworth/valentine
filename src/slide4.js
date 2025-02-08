import './App.css';
import love1 from "./Assets/love4.gif"
import {useNavigate} from "react-router-dom"




function Slide4() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <img style={{width: 50, height: 100}} src={love1} alt="loading..." />
          <div className='subText'>There is no one I would rather spend this special day with...</div>
          <div><button onClick={() =>
        {
              navigate("/slide5")
        }}>Next</button></div>
        </header>
      </div>
    );
  }
export default Slide4;
