import React, { Component } from 'react';
import 'whatwg-fetch'
import escapeRegExp from 'escape-string-regexp'
import './App.css';

class Searching extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchingData : '',
    }
  }

  updateSearching = (value) => {
    this.setState({searchingData : value})
  }


  render(){
    let list
    if(this.state.searchingData === ''){
      list = this.props.data
    } else {
      const match = new RegExp(escapeRegExp(this.state.searchingData), 'i')
      list = this.props.data.filter((arrayItem) => match.test(arrayItem))
    }
    return(
      <div className="Search">
        <h2 className="Search-title">Search</h2>
        <div className="Search-form">
          <form onSubmit={this.handleSubmit} className='search-form'>
            <input type='text' name='content' placeholder='Search through the list'
              onChange={(event) => this.updateSearching(event.target.value)}/>
          </form>
        </div>
        <div className="Search-List">
          <ul>
            {list.map((arrayItem, index) =>
              <li key={index}>{arrayItem}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      searchingData : '',
    }
  }

  loadData() {
    fetch('https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson.Reggae })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Search!</h1>
          <p className="App-subtitle">Here is a list of Reggae artists rendered from a JSON object</p>
        </header>
        <Searching data = {this.state.data}/>
      </div>
    );
  }
}

export default App;
