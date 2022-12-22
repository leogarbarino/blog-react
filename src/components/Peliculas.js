import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    peliculas[6].titulo = "The Hunt";

    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula) => {
    console.log("Pelicula marcada como favorita");
    console.log(pelicula);
    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    // alert("Se va a montar el componente");
    this.setState({
      peliculas: [
        {
          titulo: "Spiderman 4",
          image: "https://wallpapercave.com/wp/L7CROlA.jpg",
        },
        {
          titulo: "Encanto",
          image:
            "https://gogocatrina.com/wp-content/uploads/2021/11/mirabel-encanto.jpg",
        },
        {
          titulo: "Alerta Roja",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alerta-roja-netflix-pelicula-1634826059.jpg",
        },
        {
          titulo: "Sonic 2",
          image:
            "https://phantom-marca.unidadeditorial.es/b27b101408b7c09524e5bf4c7976c5ec/crop/0x635/1200x1306/resize/1320/f/jpg/assets/multimedia/imagenes/2021/12/10/16391010713852.jpg",
        },
        {
          titulo: "Jurassic World: Dominion",
          image:
            "https://as01.epimg.net/meristation/imagenes/2022/06/08/reportajes/1654679321_653974_1654681984_noticia_normal.jpg",
        },
        {
          titulo: "Top Gun: Maverick",
          image:
            "https://estereofonica.com/wp-content/uploads/2022/05/top-gun-2-macerick-tom-cruise-nos-hace-regresar-al-cine-y-a-los-80s_1653297680-702523-1653300885-noticia-normal.jpg",
        },
        {
          titulo: "La cacería",
          image: "https://i.ytimg.com/vi/-h2Uh9P4c8k/maxresdefault.jpg",
        },
        {
          titulo: "Turning red",
          image:
            "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FN3FNUKUA5BGHKMP5W7DN7FRY4.jpg",
        },
        {
          titulo: "Looper",
          image:
            "https://i.blogs.es/1bf2df/looper_movie_banner_by_dcomp-d5d7awv_650/1366_2000.jpg",
        },
      ],
      nombre: "Leonardo Garbarino",
      favorita: {},
    });
  }

  componentDidMount() {
    //alert("Ya se ha montado el componente");
  }

  componentWillUnmount() {
    //alert("Me voy a desmontar");
  }

  render() {
    // Estilo para imprimir en película favorita
    var pStyle = {
      background: "blue",
      color: "white",
      padding: "10px",
    };

    var favorita;
    if (this.state.favorita.titulo) {
      favorita = (
        <>
          <p className="favorita" style={pStyle}>
            <i>La película seleccionada como favorita es </i>
            <span>
              <strong>{this.state.favorita.titulo}</strong>
            </span>
          </p>
        </>
      );
    } else {
      favorita = <p>No hay película favorita seleccionada aún</p>;
    }

    return (
      <React.Fragment>
        <Slider title="Películas" size="slider-small" />
        <div className="center">
          <div id="content" className="peliculas">
            <h2 className="subheader">Lista de películas</h2>
            <p>
              <strong>
                Selección de las películas favoritas realizado por{" "}
                {this.state.nombre}
              </strong>
            </p>
            <div>
              <button onClick={this.cambiarTitulo}>
                Cambiar titulo La cacería
              </button>
            </div>

            {favorita}

            {/*Crear componente de pelicula */}

            <div id="articles" className="peliculas">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
