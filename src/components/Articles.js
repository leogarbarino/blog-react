import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/es";
import Global from "../Global";

class Articles extends Component {
  url = Global.url;

  state = {
    articles: {},
    status: null,
  };

  componentDidMount() {
    var home = this.props.home;
    var search = this.props.search;

    if (home === "true") {
      this.getLastArticles();

    } else if (search && search !== null && search !== undefined) {
      this.getArticlesBySearch(search);
    } else {
      this.getArticles();
    }
  }
  

  getLastArticles = () => {
    axios.get("http://localhost:3900/articles/last").then( res => {
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
    });
  }

  getArticles = () => {
    axios.get("http://localhost:3900/articles").then(res => {
      this.setState({
        articles: res.data.articles,
        status: "success",
      });
    });
  };

  getArticlesBySearch = (searched) => {
    axios.get("http://localhost:3900/search/" + searched).then(res => {
      
        this.setState({
          articles: res.data.articles,
          status: "success",
        });
        console.log(this.state);
     
        })

        .catch (err => {
           this.setState({
              articles: [],
              status: "success"
           });
        });
    
  }


  render() {
    if (this.state.articles.length >= 1) {
      var listArticles = this.state.articles.map((article) => {
        return (
          <article key={article._id} className="article-item" id="article-template" >
            <div className="image-wrap">
              {article.image !== null ? (
                <img
                  src={`http://localhost:3900/get-image/${article.image}`}
                  alt={article.title}
                />
              ) : (
                <img
                  src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
                  alt={article.title}
                />
              )}
            </div>

            <h2>{article.title}</h2>
            <span className="date">
              <Moment locale="es" fromNow>
                {article.date}
              </Moment>
            </span>
            <Link to={"/blog/articulo/" + article._id}>Leer mas...</Link>
            <div className="clearfix"></div>
          </article>
        );
      });

      return <div id="articles">{listArticles}</div>;
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "success"
    ) {
      return (
        <div id="articles">
          <h2 className="subheader">
            {" "}
            <i>No hay artículos para mostrar</i>
          </h2>
          <p>No hay contenido en esta sección aún</p>
        </div>
      );
    } else {
      return (
        <div id="articles">
          <h2 className="subheader">
            {" "}
            <i>Cargando...</i>
          </h2>
          <p>Espere unos segundos a que cargue el contenido</p>
        </div>
      );
    }
  }
}

export default Articles;
