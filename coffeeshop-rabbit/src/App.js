import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Library from './components/Library';
import Menu from './components/Menu';
import Admin from './components/Admin';
import Navbar from './components/Navbar';

class App extends Component{
  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/library" component={Library}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/admin" component={Admin}/>

        </div>
      </Router>
    )
  }
}
export default App;
