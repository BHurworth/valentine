import './App.css';
import love1 from "./Assets/love1.gif"
import {useNavigate} from "react-router-dom"



function Slide1() {
    const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <img className="gif" src={love1} alt="loading..." />
          <div>To el amor de mi vida...</div>
          <div className='subText'>A small love letter from me to you</div>
          <div>
         <div class="love">
      <button onClick={() =>
        {
              navigate("/slide2")
        }}>View Letter</button>
      <div id="heart1" class="hearts"></div>
      <div id="heart2" class="hearts"></div>
      <div id="heart3" class="hearts"></div>
      <div id="heart4" class="hearts"></div>
      <div id="heart5" class="hearts"></div>
    </div></div>
        </header>
      </div>
    );
  }
export default Slide1;
