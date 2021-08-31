import React from "react"
//Components
import EnterainmentCardSlider from "../components/Enterainment/Enterainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../config/TempPosters.config"
const HomePage = () =>{
    return (
        <>
        <div className="flex flex-col gap-6">
         <div className=" container mx-auto px-4">
             <h1 className="text-2xl font-bold text-gray-800 my-3">
                  The best of Enterainment 
                  </h1>
        <EnterainmentCardSlider/>
        </div>
       <div className="bg-bms-800 py-12 ">
           <div className="container mx-auto px-4 flex flex-col gap-3">
           <div className="hidden md:flex">
                   <img
                   src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                   alt="Premier"
                   className="w-full h-full"
                   />
           </div>
           <PosterSlider 
           images={TempPosters} 
           title=" Premiers" 
           subtitle="Brand new Releases every Friday"
           isDark
            />
           </div>
        </div>
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title ="Online Streaming Events" isDark={false}
            />
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title ="Outdoor Events" isDark={false}
            />
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title ="Laughter Therapy" isDark={false}
            />
        </div>
        <div className="container mx-auto px-4 my-8">
            <PosterSlider
            images={TempPosters}
            title ="Popular Events" isDark={false}
            />
        </div>
        </>
    )
};
export default HomePage;