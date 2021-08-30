import React from "react"
//Components
import EnterainmentCardSlider from "../components/Enterainment/Enterainmentcard.component";
const HomePage = () =>{
    return (
        <>
         <div className=" container mx-auto px-4">
             <h1 className="text-2xl font-bold text-gray-800 my-3">
                  The best of Enterainment 
                  </h1>
        <EnterainmentCardSlider/>
        </div>
        </>
    )
};
export default HomePage; 