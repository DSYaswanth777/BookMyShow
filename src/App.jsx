
//Hoc 
import DefaultHOC from "./HOC/Deafult.HOC";
//Components
import Temp from "./components/temp";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
<DefaultHOC path ="/" exact component={Temp}/>
    </>
  );
}

export default App;
