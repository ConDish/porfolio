import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/index';
import 'babel-core/register';
import 'babel-polyfill';


class App extends Component {
  render() {
    return (
      <div className="p-3">
        <Home/>
      </div>

    );
  }
}

export default App;