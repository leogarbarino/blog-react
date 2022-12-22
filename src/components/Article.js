import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import "moment/locale/es";
import Sidebar from "./Sidebar";

class Article extends Component {
  url = Global.url;

  state = {
    article: false,
    status: null,
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    var id = this.props.match.params.id;
    

    axios.get( "http://localhost:3900/article/" + id)
    .then(res => {
      this.setState({
        article: res.data.article,
        status: "success",
      });
    }).catch(
      this.setState({
        article: false,
        status: "success"
      })
    );
   
  }

  render() {
    var article= this.state.article;

    return (
      <div className="center">
        <section id="content">

          {this.state.article && 
            <article className="article-item article-detail">
              <div className="image-wrap">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMzC_FoICsHYhnBW5gDpRSEtktNzXhl6IiA&usqp=CAU"
                  alt="paisaje"
                />
              </div>
              <h1 className="subheader">{article.title}</h1>

              <span className="date">Hace 5 minutos</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et dapibus eros. Pellentesque egestas nulla eu sapien laoreet,
                eu tincidunt urna volutpat. Suspendisse id augue aliquam,
                placerat risus sit amet, feugiat nunc. Vivamus nec turpis
                varius, hendrerit nibh eu, dapibus lorem. Pellentesque dignissim
                suscipit mattis. Nam urna lectus, ultrices vitae faucibus eget,
                fermentum sit amet diam. Orci varius natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Fusce elementum
                purus eget purus porta faucibus. Suspendisse sapien ante,
                maximus vel varius maximus, bibendum in quam. Mauris euismod leo
                sit amet augue mollis, sed vehicula nisi dapibus. Suspendisse
                sed malesuada sapien, id luctus erat. Vestibulum malesuada
                iaculis leo scelerisque dapibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam bibendum nisl erat, nec feugiat
                ex lacinia maximus. Fusce non dignissim nunc, vitae euismod
                turpis. Suspendisse molestie quam sed ex porta, ut sollicitudin
                ante aliquet.
              </p>
              <p>
                Morbi lectus eros, consectetur id consectetur sed, elementum ut
                leo. Sed accumsan faucibus nunc, a cursus nisl suscipit nec.
                Nullam dapibus vestibulum dui, sit amet bibendum felis. Quisque
                sed porta nulla. In ut tellus vel sem fringilla porttitor sed eu
                nunc. Proin pretium eros ac eros suscipit euismod. Morbi mattis
                velit non nibh consequat, ac lobortis dolor fringilla. Nunc arcu
                tortor, laoreet nec lorem sit amet, sollicitudin porta nisl.
                Donec at cursus ligula. Suspendisse sed sagittis enim. Nulla
                congue lectus eu mi vulputate feugiat.
              </p>
              <p>
                Ut at sapien elit. Phasellus bibendum condimentum tortor, a
                malesuada nisi porta quis. Donec imperdiet magna felis. Nullam
                lacus turpis, rhoncus id enim et, volutpat accumsan enim. Mauris
                vitae tortor et risus egestas dictum non nec lectus. Ut dapibus
                vitae ante at varius. Sed eget ornare enim.
              </p>
              <button className="btn btn-danger">
                Eliminar
              </button>
              <button className="btn btn-warning">
                Editar
              </button>
              <div className="clearfix"></div>
            </article>
          
          }

          {!this.state.article && this.state.status === "success" && 
            <div id="article">
              <h2 className="subheader">El artículo no existe</h2>
              <p>Intetalo de nuevo</p>
            </div>
          }
        </section>

        <Sidebar />
      </div>
    );
  }
}
export default Article;
