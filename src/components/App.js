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
    this.handleAngry = this.handleAngry.bind(this);
    this.state = {
      arrayResult: [], //para meter las 2 cadenas message y date
      arrayDays: [], // array con los dias
      message: '', //mensaje escrito en dia feliz
      date: '', //fecha seleccionada en el input
      checkedSmile: true,
      checkedAngry: false
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
    const valueSmile = document.querySelector('input[name="options"]:checked').value;
    this.setState({
      checkedSmile: !valueSmile
    });
    console.log(valueSmile)
  }
  handleAngry(event) {
    const valueAngry = event.target.value;
    this.setState({
      checkedAngry: !valueAngry
    });
    console.log(valueAngry)
  }
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route path='/Editor' render={() =>
              <Editor
              onChangeCalendar={this.handleSelect}
              onChangeMessage={this.handleMessage}
              onChangeSmile={this.handleSmile}
              onChangeAngry={this.handleAngry}
              /> 
            }
            />
            <Route exact path='/' render={() =>
              <Calendar />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

    export default App;
