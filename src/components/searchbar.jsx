import React, { Component } from 'react';

class Searchbar extends Component {
  handleUpdate = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default Searchbar;
