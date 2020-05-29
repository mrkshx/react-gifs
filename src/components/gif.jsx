import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const { selectFunction } = this.props;
    selectFunction(event.target.id);
  }

  render() {
    const { id } = this.props;
    const src = `https://media1.giphy.com/media/${id}/giphy.gif`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
        onClick={this.handleClick}
        id={id}
      />
    );
  }
}

export default Gif;
