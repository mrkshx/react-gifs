import React, { Component } from 'react';
import Searchbar from './searchbar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "KGZCDBoaOPILHJc7RT"
    };
  }

  updateSelectedID = (id) => {
    this.setState({
      selectedGifID: id
    });
  }

  search = (query) => {
    giphy('XBBHnRoKxSoVBlpZedT18pX6KGxFsHZ4').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif selectFunction={this.updateSelectedID} id={this.state.selectedGifID} />
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
