import React from "react";
import HeroSlider from "react-slick";
//Components
import { NextArrow,PrevArrow } from "./Arrows.component";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const HeroCarousal = () => {
    const settingsLG={
        arrows:true,
        centerMode:true,
        centerPading:"300px",
        slidesToShow:2,
        infinte:1,
        slidesToScroll:1,
        nextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>,
    }
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        PrevArrow:<PrevArrow/>,
      };

      const images =[
         "https://images.unsplash.com/photo-1571780723643-4bfd5aa05ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1570196428827-24a4140e7091?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1504649346668-2cc86afaa2e1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1570196428827-24a4140e7091?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         "https://images.unsplash.com/photo-1570196428827-24a4140e7091?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      ];
    return (
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {images.map((image,id) => (
                <div className="w-full h-56 md:h-80 py-3 " 
                key ={id}>
                    <img 
                    src = {image} 
                    alt ="testing" 
                    className ="w-full h-full" 
                    />
                </div>
            ))}
        </HeroSlider>
        </div>
        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {images.map((image,id) => (
                <div className="w-20 h-96 px-2 py-3 rounded-md" 
                key ={id}>
                    <img 
                    src = {image} 
                    alt ="testing" 
                    className ="w-full h-full" 
                    />
                </div>
            ))}
        </HeroSlider>
        </div>
        </>
    )
}
export default HeroCarousal;