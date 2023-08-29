import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
//Context Provider
import MovieProvider from "./context/movie.component"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
        </MovieProvider>
      </BrowserRouter>
  </React.StrictMode>,
  
);
