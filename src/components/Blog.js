import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";


class Blog extends Component {
 

  render() {
    
    return (
      <div id="blog">
        <Slider title="Blog" size="slider-small" />
        <div className="center">
          <div id="content">
            {/* Listado de articulos que vendran de la API rest de node */}

           <Articles />

          </div>

          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Blog;
