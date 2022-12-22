import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

class Home extends Component {
  render() {
    
    return (
      <div id="home">
        <Slider title="Bienvenidos al curso de React 2022" btn="Ir al Blog" size="slider-big"/>
        <div className="center">
          <div id="content">
            <h1 className="subheader">Ultimos artículos</h1>
            <Articles 
               home="true"
            />
          </div>

          <Sidebar />

        </div>
      </div>
    );
  }
}

export default Home;
