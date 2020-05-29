import React, { Component } from 'react';

class Searchbar extends Component {
  handleUpdate = (event) => {
    const { searchFunction } = this.props;
    searchFunction(event.target.value);
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
