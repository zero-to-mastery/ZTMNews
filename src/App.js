import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import MainSidebar from './components/sideNav/mainSidebar';
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
      route: ``,
      display: `masonry`,
      userId: 179604866807627777
    }
  }

  componentDidMount() {
    if(localStorage.getItem("display") === null) this.setState({display: "tableview"})
    else this.setState({display: localStorage.getItem("display")})

    fetch('https://ztmnews.zerobot.xyz/api/resources')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
    this.routeHandler()
  }

  componentDidUpdate() {
    history.listen((location, action) => {
      this.routeHandler()
    });
  }

  changeDisplayType = (opt) => {
    this.setState({display: opt})
    localStorage.setItem("display", opt);
  }

  routeHandler = () => {
    const sections = window.location.pathname.slice(1).split("/")
    console.log("Sections: ", sections)
    if(sections[0] === "ZTMNews") this.setState({route: sections[1], path: sections[2]})
    else this.setState({route: sections[0], path: sections[1]})
    console.log("States:\n", `Route: ${this.state.route}`, `Path: ${this.state.path}` )
  }

  updateUpvotes = (a) => {
    fetch('https://ztmnews.zerobot.xyz/api/resources')
      .then(response => response.json())
      .then(resourceData => { this.setState({ resources: resourceData }) });
  }

  displayRoute = () => {
    
    const routes = [
      { path: "",
        container: 
          <Home 
            resources={this.state.resources} 
            onClick={(slug) => this.changeRoute(`/resource/${slug}`)} 
            display={this.state.display} 
            changeDisplay={(opt) => this.changeDisplayType(opt)}
            userId={this.state.userId}
            updateVotes={(a)=> this.updateUpvotes(a)}
          />
      },
      {
        path: "resource",
        container: <Resource res={this.state.resources} id={this.state.path}/>
      },
      {
        path: "user",
        container: <User />
      },
      {
        path: "dashboard",
        container: <Dashboard />
      }
    ]

    let matchedRoute = routes.find(route => route.path === this.state.route)
    return matchedRoute ? matchedRoute.container : <NotFound />

  }

  changeRoute = (r) => {
    history.push(r)
  }

  render() {
    return (
      <div className="App">
        <MainSidebar />
        {this.displayRoute()}
      </div>
    );
  }
}

export default App;
