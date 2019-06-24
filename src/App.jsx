import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import 'babel-core/register';
import 'babel-polyfill';


class App extends Component {
  render() {
    return (
      <Router>
        <main>
            <h1>Hello World</h1>
        </main>
        
      </Router>
    );
  }
}

export default App;