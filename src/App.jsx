import { Route } from "react-router-dom";
//Hoc 
import DefaultHOC from "./HOC/Deafult.HOC";
//Components
import Temp from "./components/temp";
function App() {
  return (
    <>
<DefaultHOC path ="/" exact component={Temp}/>
    </>
  );
}

export default App;
