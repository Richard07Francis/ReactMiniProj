import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/randomcolor';
import StarRating from './components/starrating';
import ImageSlider from './components/imageslider';
import LoadMoreData from './components/loadmoredata';

function App() {
  return (
    <div className="App">
      {/*Accordian Component*/}
      {/* <Accordian/> */}
      {/*Random Color Component*/}
      {/* <RandomColor/> */}
      {/*Star Rating Component*/}
      {/* <StarRating noOfStars={10}/> */}
      {/* Image Slider Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={5} page={1}/> */}
      {/* Load More Data Component */}
      <LoadMoreData/>
    </div>
  );
}

export default App;
