import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar />
          <div className="selected-gif">
            <Gif id="KGZCDBoaOPILHJc7RT" />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
