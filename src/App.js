import React, { Component } from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import CardList from './components/cards/cardList';
import Modal from './components/modal/modal';

class App extends Component {

  constructor() {
    super()
    this.state = {
      resources: [],
      isShowing: `none`
    }
  }

  openModalHandler = (data) => {
    console.log("MODAL TIME", data)
    this.setState({
        isShowing: `block`,
        modalData: data
    });
}

closeModalHandler = () => {
    this.setState({
        isShowing: `none`
    });
}
  componentDidMount() {
    fetch('https://dev-resources.herokuapp.com/resource/all')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
  }

  render() {
    const { isShowing, modalData } = this.state;
    return (
      <div className="App">
        <Navbar />
        <CardList resources={this.state.resources} modal={this.openModalHandler}/>
        
                <Modal
                    className="modal"
                    show={isShowing}
                    close={this.closeModalHandler}
                    data={modalData}
                />
      </div>
    );
  }
}

export default App;
