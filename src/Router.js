import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useParams,
 
} from "react-router-dom";

//Importar componentes

import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Search from "./components/Search";
import Article from "./components/Article";
import CreateArticle from "./components/CreateArticle";


class Router extends Component {
  render() {
    function PruebaParametros() {
      let params = useParams();
      let { apellidos } = useParams();

      let siApellidos = null;

      if (apellidos) {
        siApellidos = (
          <h5 className="subheader">
            <i>Prueba obtener apellidos: {apellidos}</i>
          </h5>
        );
      }

      return (
        <div id="content">
          <h5 className="subheader">
            <i>Prueba obtener nombre: {params.nombre}</i>
          </h5>
          {siApellidos}
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Header />
        

        {/*Configuramos rutas y páginas */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog } />

          <Route exact path="blog/articulo/:id" component={Article} />
          <Route exact path="/blog/crear" component={CreateArticle} />

          <Route exact path="/blog/busqueda/:search" component={Search} />
          <Route exact
            path="/redirect/:search"
            render={(props) => {
              var search = props.match.params.search;
              return (<Redirect to={"/blog/busqueda/" + search} />
              )
            }}
          />

          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/segunda-ruta" component={MiComponente} />

          {/* Rutas sin componente */}
          <Route exact
            path="/pagina-1"
            component={
              <React.Fragment>
                <h1>Hola mundo desde la ruta pagina 1</h1>
                <p>
                  <i>
                    Ruta que tiene desarrollado{" "}
                    <code>
                      <strong>JSX</strong>
                    </code>{" "}
                    dentro del element
                  </i>
                </p>
                <MiComponente mensaje="Leonardo Garbarino Frontend Developer" />
              </React.Fragment>
            }
          />

          <Route exact path="/pruebas/:nombre" component={PruebaParametros} />
          <Route 
            path="/pruebas/:nombre/:apellidos"
            component={<PruebaParametros />}
          />
          <Route exact path="*" component={Error} />
        </Switch>

        <div className="clearfix"></div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
