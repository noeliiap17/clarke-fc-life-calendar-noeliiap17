import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Editor from './Editor'
import Calendar from './Calendar'


class App extends Component {
  constructor(props){
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSmile = this.handleSmile.bind(this);
    this.handleSad = this.handleSad.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      arrayResult: [], //para meter las 2 cadenas message y date
      arrayDays: [], // array con los dias
      message: '', //mensaje escrito en dia feliz
      date: '', //fecha seleccionada en el input
      checkedSmile: true,
    };
  }

  handleSelect(event) {
    const valueCalendar = event.target.value;
    this.setState ({
      date: valueCalendar
    });
    console.log(valueCalendar)
  }
  handleMessage(event) {
    const valueMessage = event.target.value;
    this.setState ({
      message: valueMessage
    });
    console.log(valueMessage)
  }
  handleSmile(event) {
    this.setState({
      checkedSmile: 'smile'
    });
    console.log(this.state.checkedSmile);
    let missingMensage = document.querySelector('.container__message');
    missingMensage.hidden = false;
  }

  handleSad(event) {
     let missingMensage = document.querySelector('.container__message');
     missingMensage.hidden = true;
     this.setState({
       checkedSmile: 'sad'
     });
     console.log(this.state.checkedSmile);
   }


  handleSave() {
    const newDate = this.state.date;
    let newMessage = this.state.message;
    const newFace = this.state.checkedSmile;
    if(newFace == "sad") {
      newMessage = '';
    }
  const newDay = {
     'date': newDate,
     'message': newMessage,
     'checkedSmile': newFace
   }
     let infoDays = JSON.parse(localStorage.getItem("myCalendar"));
     if(infoDays == null)  infoDays = [];

          localStorage.setItem("newDay",JSON.stringify(newDay));

          infoDays.push(newDay);
          localStorage.setItem("myCalendar",JSON.stringify(infoDays));

   }

  render() {
    let infoDays = JSON.parse(localStorage.getItem("myCalendar"));
     if(infoDays == null)  infoDays = [];
    return (
      <div className="App">
        <main>
          <Switch>
            <Route path='/Editor' render={() =>
              <Editor
              onChangeCalendar={this.handleSelect}
              onChangeMessage={this.handleMessage}
              onChangeSmile={this.handleHappy}
              onChangeSad={this.handleSad}
              onChangeSave={this.handleSave}
              infoCalendar={infoDays}
              />
            }
            />
            <Route exact path='/' render={() =>
              <Calendar
              infoCalendar={infoDays}
              />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

    export default App;
