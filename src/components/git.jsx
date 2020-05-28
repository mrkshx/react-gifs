import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = 'https://media1.giphy.com/media/KGZCDBoaOPILHJc7RT/giphy.gif';
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
