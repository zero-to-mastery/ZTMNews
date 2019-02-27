import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import Navbar from './components/navbar/navbar';
import Resource from './containers/resource';
import Home from './containers/home';
import User from './containers/user';
import Dashboard from './containers/dashboard';
import NotFound from './containers/404';
import './App.css'

// Listens for URL Changes
const history = createBrowserHistory();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resources: [],
      route: `home`,
      display: "mason"
    }
  }

  componentDidMount() {
    fetch('https://dev-resources.herokuapp.com/resource/all')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
      if(localStorage.getItem("display") === "list") this.setState({display: "list"})
      this.routeHandler()

  }
  componentDidUpdate() {
    history.listen((location, action) => {
      this.routeHandler()
    });
  }


  changeDisplayType = () => {
    if(this.state.display === "mason") {
      this.setState({display: "list"})
      localStorage.setItem("display", "list");
    }else{
      this.setState({display: "mason"})
      localStorage.setItem("display", "mason");
    }
  }

  routeHandler = () => {
    const sections = window.location.pathname.slice(1).split("/")
    const pages = ["resource", "user", "dashboard"]
    if(!pages.includes(sections[0])) {
      (sections[0] === "" ? sections[0] = "home" : sections[0] = "notFound")
    }
    this.setState({route: sections[0]})
    this.setState({path: sections[1]})
  }

  changeRoute = (r,) => {
    console.log("CHANGING ROUTE", r)
    history.push(r, { some: 'state' })
  }

  viewResource = (slug) => {
    this.changeRoute(`/resource/${slug}`)
  }

  render() {

    const container = {
      home: <Home resources={this.state.resources} onClick={(res) => this.viewResource(res)} display={this.state.display} />,
      user: <User />,
      dashboard: <Dashboard />,
      resource: <Resource res={this.state.resources} id={this.state.path}/>,
      notFound: <NotFound />
    }

    console.log("DISPLAY", this.state.display)
    
    return (
      <div className="App">
        <Navbar />
        <button onClick={() => this.changeDisplayType()}>{this.state.display}</button>
        {container[this.state.route]}
      </div>
    );
  }
}

export default App;
