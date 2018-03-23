import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Editor extends Component{


	render(){
		return(
			<div className="container__editor">
				<form className="form_editor">
					<h2>Fecha</h2>
						<input type="date" onChange={this.props.onChangeCalendar}></input>
						<h2>Estado</h2>
						<ul>
							<li><label for="o1"><input type="radio" value=":)" id="o1" name="options"
						 	onChange={this.props.onChangeSmile}/> :)</label></li>
				 	 		<li><label for="o2"><input type="radio" value=":(" id="o2" name="options"
				 			onChange={this.props.onChangeAngry} /> :(</label></li>
					 </ul>

						<h2>Mensaje</h2>
							<input type="text" placeholder="¿Por qué es un buen día?"
							onChange={this.props.onChangeMessage} />
							<Link to='/'><input type="button" value="Guardar" /></Link> 
							<Link to='/'><input type="button" value="Cancelar" /></Link>
				</form>
			</div>
		);
	}
}

export default Editor;
