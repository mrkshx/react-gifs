import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    const { gifs, selectGifFunction } = this.props;
    return gifs.map(gif => <Gif selectFunction={selectGifFunction} id={gif.id} key={gif.id} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
