import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import App from './App';
import Calendar from './Calendar';

class Editor extends Component{


	render(){
		 const info = this.props.infoCalendar;
		return(
			<div className="container__editor">
				<form className="form_editor">
					<div className="container__editor--date">
						<h2>Fecha</h2>
						<input type="date" onChange={this.props.onChangeCalendar}></input>
					</div>
					<div className="container__editor--state">
						<h2>Estado</h2>
						<ul className="container__emoti">
							<li><label for="o1"><input type="radio" value=":)" id="o1" name="options"
						 	onChange={this.props.onChangeSmile}/> :)</label></li>
				 	 		<li><label for="o2"><input type="radio" value=":(" id="o2" name="options"
				 			onChange={this.props.onChangeSad} /> :(</label></li>
					 	</ul>
					 </div>
					 <div className="container__message">
							<h2>Mensaje</h2>
								<input type="text" placeholder="¿Por qué es un buen día?"
								onChange={this.props.onChangeMessage} />
							</div>
								<Link to='/'><input type="button" value="Guardar"
								onChange={this.props.onChangeSave} /></Link>
								<Link to='/'><input type="button" value="Cancelar" /></Link>
								<Switch>
             <Route path='/Calendar' render={() =>
               <Calendar />}
             />
             <Route path="/App" component={App} />
           </Switch>
				</form>

					<ul>
						{info.map(i =>
							<li>
								<p title={i.date}>
								<img className={`face face--${i.checkedSmile}`} />
								</p>
								<span>{i.message}</span>
							</li>
								)}
 					</ul>
			</div>
		);
	}
}

export default Editor;
