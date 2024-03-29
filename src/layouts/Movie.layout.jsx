
import axios from 'axios';
import React,{useEffect,useContext} from 'react'
import {useParams} from "react-router-dom";
//Components
import MovieNavbar from '../components/Navbar/movieNavbar.component';
//context
import {MovieContext} from "../context/movie.component" 
const MovieLayout = (props) => {
     const {id} = useParams();
     // eslint-disable-next-line
     const {movie, setMovie} = useContext(MovieContext);
     useEffect(()=> {
         const requestMovie = async () =>{
             const getMovieData = await axios.get(`/movie/${id}`);
             setMovie(getMovieData.data);
         }
         requestMovie();
         // eslint-disable-next-line
     },[id]);
    return (
        <>
        <MovieNavbar/>
        {props.children}
        </>
    )
}
export default MovieLayout;