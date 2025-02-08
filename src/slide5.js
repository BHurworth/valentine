import './App.css';
import love1 from "./Assets/love5.gif"
import {useNavigate} from "react-router-dom"




function Slide5() {
  const navigate = useNavigate();
    return (
      <div className="App">
        <header className="App-header">
          <img src={love1} alt="loading..." />
          <div className='subText'>There is not a single being who could make my heart sink, or my nerve endings tingle... not a single one i'd rather ask this question to...</div>
          <div><button onClick={() =>
        {
              navigate("/slide6")
        }}>Next</button></div>
        </header>
      </div>
    );
  }
export default Slide5;
