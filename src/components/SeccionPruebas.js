import React, { Component } from "react";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {
  /* Forma larga de definir el state
constructor(props){
    super(props);
    this.state= {
        contador: 0
    };
}
*/

  state = {
    contador: 0
  };

  HolaMundo(nombre, profesion) {
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2>
        <h3> {profesion} </h3>
      </div>
    );

    return presentacion;
  }

  sumar = (e) => {
    // this.contador= this.contador + 1;
    //this.state.contador= this.state.contador+1;
    //la siguiente es la unica forma para que funcione el boton de sumar
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = (e) => {
    // this.contador= this.contador - 1;
    //this.state.contador= this.state.contador-1;
    //la siguiente es la unica forma para que funcione el boton de restar
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    var nombre = "Leonardo Garbarino";
    var profesion = "Desarrollador Frontend";

    return (
      <section id="content">
        <h2 className="subheader">Últimos artículos</h2>
        <p>Bienvenido al curso de React 2022!</p>

        <h2 className="subheader">Funciones y JSX básico</h2>
        {this.HolaMundo(nombre, profesion)}

        <h2 className="subheader">Componentes</h2>
        <section className="componentes">
          <MiComponente />
          
         
        </section>

        <h2 className="subheader">Estado</h2>
        <p>Contador:{this.state.contador}</p>

        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input
            type="button"
            value="Restar"
            onClick={this.restar}
          />
        </p>
      </section>
    );
  }
}

export default SeccionPruebas;
