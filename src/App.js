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
      display: "masonry"
    }
  }

  componentDidMount() {
    fetch('https://dev-resources.herokuapp.com/resource/all')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
      if(localStorage.getItem("display") === undefined) this.setState({display: "masonry"})
      else this.setState({display: localStorage.getItem("display")})
      this.routeHandler()

  }
  componentDidUpdate() {
    history.listen((location, action) => {
      this.routeHandler()
    });
  }


  changeDisplayType = (opt) => {
    console.log("CHANGIN TYPE HERE", opt)
    this.setState({display: opt})
    localStorage.setItem("display", opt);
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
      home: <Home resources={this.state.resources} onClick={(res) => this.viewResource(res)} display={this.state.display} changeDisplay={(opt) => this.changeDisplayType(opt)} />,
      user: <User />,
      dashboard: <Dashboard />,
      resource: <Resource res={this.state.resources} id={this.state.path}/>,
      notFound: <NotFound />
    }

    console.log("DISPLAY", this.state.display)
    
    return (
      <div className="App">
        <Navbar />
        {container[this.state.route]}
      </div>
    );
  }
}

export default App;
