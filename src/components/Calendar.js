import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Calendar extends Component{


	render(){
		const info = this.props.infoCalendar;
		return(
			<div className="container__calendar">
				<Link to='/Editor'><button className="button__more">+</button></Link>
				<div className="container__emotis">
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
			</div>
		);
	}
}

export default Calendar;
