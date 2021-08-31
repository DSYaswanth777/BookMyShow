import React from "react";
import Slider from "react-slick";
//Components
import Poster from "../Poster/poster.component";
//Configs
import PosterCarosuelSettings from '../../config/PosterCarousel.config';

const PosterSlider = (props) =>{
    return (
        <>
        <div className="flex flex-col items-start">
          <h3 className={`text-xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
          <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
        </div>
          <Slider {...PosterCarosuelSettings}>
              {props.images.map((image,id)=>(
                  <Poster {...image} key={id} isDark={props.isDark}/>
              ))}
              </Slider>  
        </>
    )
}
export default PosterSlider;