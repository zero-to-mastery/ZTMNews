import React, { Component } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import CardList from './components/cards/cardList';

class App extends Component {

  constructor() {
    super()
    this.state = {
      resources: [],
    }
  }

  componentDidMount() {
    fetch('https://dev-resources.herokuapp.com/resource/all')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <CardList resources={this.state.resources}/>
      </div>
    );
  }
}

export default App;
