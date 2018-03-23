import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


class Calendar extends Component{


	render(){
		return(
			<div className="container__calendar">
				<Link to='/Editor'><button className="button__more">+</button></Link>
				<div className="container__emotis">

				</div>

			</div>
		);
	}
}

export default Calendar;
