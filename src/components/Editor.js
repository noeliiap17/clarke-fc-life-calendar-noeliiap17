import React, { Component } from 'react';

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
							<input type="button" value="Guardar" />
							<input type="button" value="Cancelar" />
				</form>
			</div>
		);
	}
}

export default Editor;
