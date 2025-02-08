import './App.css';
import love1 from "./Assets/love6.gif"
import bad1 from "./Assets/bad1.gif"
import bad2 from "./Assets/bad2.gif"
import bad3 from "./Assets/bad3.gif"
import bad4 from "./Assets/bad4.gif"
import bad5 from "./Assets/bad5.gif"

import {useNavigate} from "react-router-dom"
import { useState} from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function Slide6() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  let badGirl = [bad1,bad2, bad3,  bad4, bad5]



  const [img, setImg] = useState(love1);
    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: "500px", height: 500}}> <img src={img} alt="loading..." /></div>
         
          <div className='subText'>Will you be my valentine?</div>
          <div><button  onPointerOver={() =>
          {
            
              let index = getRandomInt(1,4);
              setImg(badGirl[index]);
         
            
        
            
          }} onMouseLeave={() =>
          {
           
              setImg(love1);
            
          }}>No</button>

          <button style ={{}} onClick={() =>
        {
              navigate("/GoodGirl")
        }} >Yes</button>
          
          </div>
        </header>
      </div>
    );
  }
export default Slide6;
