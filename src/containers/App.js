import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/App.css';
import RgbBar from '../components/rgbBar';
import SideDrawer from '../components/SideDrawer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RgbBar />
        <SideDrawer />
      </div>
    );
  }
}

export default App;
