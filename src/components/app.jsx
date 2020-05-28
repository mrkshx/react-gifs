import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render() {
    const gifs = [
      { id: "KGZCDBoaOPILHJc7RT" },
      { id: "6tHy8UAbv3zgs" }
    ];
    return (
      <div>
        <div className="left-scene">
          <Searchbar />
          <div className="selected-gif">
            <Gif id="KGZCDBoaOPILHJc7RT" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
