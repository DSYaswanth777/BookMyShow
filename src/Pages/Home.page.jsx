import axios from "axios";
import React, { useState, useEffect } from "react";
//Components
import EnterainmentCardSlider from "../components/Enterainment/Enterainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setPopularMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className=" container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Enterainment
          </h1>
          <EnterainmentCardSlider />
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
              images={popularMovies}
              title=" Premiers"
              subtitle="Brand new Releases every Friday"
              isDark
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Outdoor Events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={popularMovies}
          title="Laughter Therapy"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Popular Events"
          isDark={false}
        />
      </div>
    </>
  );
};
export default HomePage;
