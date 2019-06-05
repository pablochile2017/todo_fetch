import React, { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import { base } from './base.json';


class App extends Component {
          constructor(){
              super();
              this.state = {
                base: []
              }
              this.id = document.getElementById("i");
            }


            componentDidMount(){
                this.obtenerDatos();

            }

        obtenerDatos(){
            fetch('https://assets.breatheco.de/apis/fake/todos/user/juan')
            .then(res => res.json())
            .then(json =>{
                console.log(json)
            this.setState({
             base: json
                })

      });
        }



        agregarTexto = (texto) => {
          /*this.setState({
            /base: [...this.state.base, texto]*/
                        fetch('https://assets.breatheco.de/apis/fake/todos/user/juan', {
                method: "PUT",
                body: JSON.stringify([...this.state.base, texto]),
                headers: {
                    "Content-Type": "application/json"
                }
                })
                .then(resp => {
                    return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
                })
                .then(data => {

                    //here is were your code should start after the fetch finishes
                    console.log(data); //this will print on the console the exact object received from the server
                    this.obtenerDatos();
                })
                .catch(error => {
                    //error handling
                    console.log(error);
                });
          }



        borrarTexto = (index) => {
           /* this.setState({
              base: this.state.base.filter((e,i) => {
                return i !== index
              })
            })*/

                fetch('https://assets.breatheco.de/apis/fake/todos/user/juan', {
                method: "PUT",
                body: JSON.stringify([...this.state.base.filter((e,i) => {
                return i !== index
                })
              ]),
                headers: {
                    "Content-Type": "application/json"
                }
                })
                .then(resp => {
                    return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
                })
                .then(data => {

                    //here is were your code should start after the fetch finishes
                    console.log(data); //this will print on the console the exact object received from the server
                    this.obtenerDatos();
                })
                .catch(error => {
                    //error handling
                    console.log(error);
                });


        }


          render(){

            const base = this.state.base.map((texto,i) => {
              return(
                    <ul className="list-group" key={i}>
                        <li className="list-group-item list-group-item-action">
                          {texto.label}
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
