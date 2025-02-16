import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/randomcolor';
import StarRating from './components/starrating';

function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
      {/* <Accordian/> */}
      {/*Random Color Component*/}
      {/* <RandomColor/> */}
      {/*Star Rating Component*/}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
