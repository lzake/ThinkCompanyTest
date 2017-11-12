import React, { Component } from 'react';
import Navi from './Nav';
import SeptaForm from './SeptaForm';
import HelperText from './HelperText';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navi />
      <Router>
      <div>
      <SeptaForm />
      <HelperText />
      </div>
  </Router>

      </div>
    );
  }
}

export default App;
