import React, { Component } from 'react';
import Navi from './Nav';
import SeptaForm from './SeptaForm';
// import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navi />
      <SeptaForm />
      </div>
    );
  }
}

export default App;
