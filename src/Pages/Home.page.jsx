import React from "react"
//Components
import EnterainmentCardSlider from "../components/Enterainment/Enterainmentcard.component";
import Premier from "../components/Premier/Premier.component";
const HomePage = () =>{
    return (
        <>
         <div className=" container mx-auto px-4">
             <h1 className="text-2xl font-bold text-gray-800 my-3">
                  The best of Enterainment 
                  </h1>
        <EnterainmentCardSlider/>
        <Premier/>
        </div>
        </>
    )
};
export default HomePage;