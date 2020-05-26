import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
