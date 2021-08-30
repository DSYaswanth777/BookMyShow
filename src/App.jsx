
//Hoc 
import DefaultHOC from "./HOC/Deafult.HOC";
//Pages
import HomePage from "./Pages/Home.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
<DefaultHOC path ="/" exact component={HomePage}/>
    </>
  );
}

export default App;
