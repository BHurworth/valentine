import './App.css';
import love1 from "./Assets/love6.gif"
import GoodGirl2 from "./Assets/GoodGirl.gif"
import {useNavigate} from "react-router-dom"
import { useState } from 'react';




function GoodGirl() {
  const navigate = useNavigate();

    return (
      <div className="App">
        <header className="App-header">
          <img src={GoodGirl2} alt="loading..." />
          <div className='subText'>Good Girl.</div>
        
        </header>
      </div>
    );
  }
export default GoodGirl;
