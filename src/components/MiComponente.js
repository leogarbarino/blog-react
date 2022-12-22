import React, { Component } from "react";

class MiComponente extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["Tomate", "Queso", "Jamón cocido"],
      calorias: 450,
    };

    return (
      //Para usar dos etiquetas de html debemos agregar un react fragment
      <React.Fragment>
        <h1>{"Receta: " + receta.nombre}</h1>
        <hr></hr>
        <h2>{"Calorías: " + receta.calorias}</h2>

        

        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            console.log(ingrediente);
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
        <hr/>
        {this.props.mensaje && 
            <React.Fragment><h1>Mensaje desde una prop:</h1><h3>{this.props.mensaje}</h3></React.Fragment>
            
            }
      </React.Fragment>
      
    );
  }
}

export default MiComponente;
