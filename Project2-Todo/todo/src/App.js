import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

const StaticList = ['Walk the dog', 'Learn more about React Native', 'Build 5 more React apps', 'Get some eggs']

// Add to do
class AddTodo extends Component {
  render() {
    return(
      <div className="Add-Todo">
        <form className='Add-form'>
          <input type='text' name='content' placeholder='Add Todo to the list'/>
        </form>
        <button className="Add-button">Enter new Item</button>
      </div>
    )
  }
}

// to do List
class CheckBox extends Component {
  render() {
    return (
        <button className="Check-Box">X</button>
      );
  }
}

class RowTodo extends Component {
  render() {
    return (
      <div className="Todo-Box">
        <ol className="Todo-List">
          {this.props.value.map((arrayItem, index) =>
            <li key={index}>{arrayItem} <CheckBox /></li>
          )}
        </ol>
      </div>
    )
  }
}


class TodoButton extends Component {
  render() {
    return (
      <div class="Todo-Button">
        <button className="Clear-List">Clear the List</button>
        <button className="Reset-List">Reset the List</button>
      </div>
    )
  }
}

// Add and List
class ListTodo extends Component {
  render() {
    return(
      <div class="List-Todo">
        <form className='Filter-form'>
          <input type='text' name='content' placeholder='Search the list'/>
        </form>
        <div class="Show-Todo">
          <p className="Info-Row"># Task (X)</p>
          <RowTodo value={StaticList} />
        </div>
        <TodoButton />
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React To-Do App</h1>
          <p className="App-intro">Enhance Your Productivity</p>
        </header>
        <div className="App-main">
          <AddTodo />
          <ListTodo />
        </div>
      </div>
    );
  }
}

export default App;
