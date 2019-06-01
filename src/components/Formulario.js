import React, { Component} from 'react';

class Formulario extends Component {
	capturaText = (e) => {
		const { value, name } = e.target;
				this.setState({
				[name]: value
			})
				console.log("guardando texto");
	}

	enviarText = (event) => {
	  if(event.key === 'Enter'){
	    event.preventDefault();
	    this.props.agregarAhora(this.state);
	  }
	}

	render(){
		return(
					<input 
					type="text"
					name="contenido" 
					className="form-control" 
					id="texto"  
					placeholder="contenido"
					onChange={this.capturaText} 
					onKeyPress={ this.enviarText }
					/>	
				)
			}
}
export default Formulario;