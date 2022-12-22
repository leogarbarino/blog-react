import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {

    //Creamos las propiedades nombre,apellidos,bio y genero
    nombreRef= React.createRef();
    apellidoRef= React.createRef();
    bioRef= React.createRef();
    generoHombreRef= React.createRef();
    generoMujerRef= React.createRef();

    state= {
       user: {}

    };


    recibirFormulario= (e) => {
       // para que no se recargue la pantalla hacemos
       e.preventDefault();

       var genero= "hombre";

       if(this.generoHombreRef.current.checked){
            genero=  this.generoHombreRef.current.value;;
       }else if(this.generoMujerRef.current.checked){
            genero= this.generoMujerRef.current.value;
       }

       var user= {
           nombre: this.nombreRef.current.value,
           apellido: this.apellidoRef.current.value,
           bio: this.bioRef.current.value,
           genero: genero
       };

       this.setState({
           user: user
       });

      console.log("Se envío el fomulario!");
      console.log(user);
     
      
    }

    

  render() {

    if(this.state.user.nombre){
        var user= this.state.user;
    }

    return (

      <div id="formulario">
        <div className="center">
          <div id="content">
              <h1 className="subheader">Formulario</h1>

               {/* Mostrar datos del  formulario */}
              {this.state.user.nombre && 
              <div id="user-data">
                  <h3>Impresión de datos del formulario:</h3>
                  <p><strong>Nombre: </strong> <i>{user.nombre}</i></p>
                  <p><strong>Apellido: </strong> <i> {user.apellido}</i></p>
                  <p><strong>Bio: </strong> <i>{user.bio}</i></p>
                  <p><strong>Genero: </strong> <i>{user.genero}</i></p>
              </div>

              }

            {/* Creamos un formulario */}

            <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
             <div className="form-group">
                 <label htmlFor="nombre">Nombre:</label>
                 <input type="text" name="nombre" ref={this.nombreRef} placeholder="Ingresa tu nombre..."/>
             </div>

             <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" name="apellido" ref={this.apellidoRef} placeholder="Ingresa tu apellido..."/>
            </div>

            <div className="form-group">
                <label htmlFor="bio">Biografía:</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
            </div>

            <div className="form-group radiobuttons">
                <input type="radio" name="genero" ref={this.generoHombreRef} value="hombre"/>Hombre
                <input type="radio" name="genero" ref={this.generoMujerRef} value="mujer"/>Mujer
            </div>

            <div className="clearfix"></div>

            <input type="submit" value="Envíar" className="btn btn-success" />
         </form>
          </div>

          <Sidebar />
           
          

        </div>
      </div>
    );
  }
}

export default Formulario;
