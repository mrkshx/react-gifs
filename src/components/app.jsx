import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "KGZCDBoaOPILHJc7RT"
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
