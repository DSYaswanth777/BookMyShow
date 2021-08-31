
//Hoc 
import DefaultHOC from "./HOC/Deafult.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
<DefaultHOC path ="/" exact component={HomePage}/>
<MovieHOC path ="/movie/:id" exact component={Movie}/>
    </>
  );
}

export default App;
