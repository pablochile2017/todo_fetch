import React, { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import { base } from './base.json';


class App extends Component {
          constructor(){
              super();
              this.state = {
                base
              }
              this.id = document.getElementById("i");
            }


        agregarTexto = (texto) => {
          this.setState({
            base: [...this.state.base, texto]
          })
        }


        borrarTexto = (index) => {
            this.setState({
              base: this.state.base.filter((e,i) => {
                return i !== index
              })
            })
        }


          render(){
            const base = this.state.base.map((texto,i) => {
              return(
                      


                    <ul className="list-group" key={i}>
                        <li className="list-group-item list-group-item-action">
                          {texto.contenido}
                          <button onClick={ this.borrarTexto.bind(this,i) } type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </li>
                    </ul>
                )
            })

            return(
                <div className="container">
                  <div className="row">
                  <div className="col-md-6">

                    <Formulario agregarAhora={ this.agregarTexto } />
                    { base }
                  </div>

                    
                  </div>

                </div>
                        );
                    } 

}
export default App;
