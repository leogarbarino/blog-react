import React from "react";
import { useParams } from "react-router-dom";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";



const Search= () => {
  let searched= useParams().search;
  console.log(searched);

    
    return (
      <div id="blog">
        <Slider title={"Busqueda : " + searched} size="slider-small" />
        <div className="center">
          <div id="content">
            {/* Listado de articulos que vendran de la API rest de node */}

           <Articles  search={searched}/>

          </div>

          <Sidebar blog= "true" />
        </div>
      </div>
    );
  };


export default Search;
