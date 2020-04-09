import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import Routes from './route'

class App extends Component{
  render(){
    return(
      <main>
        <Routes />
      </main>
    )
  }
}

export default App;
