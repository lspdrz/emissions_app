import React, { Component } from 'react';
import { string, func } from 'prop-types';

export default class SearchBar extends React.Component {

  state = {

  }

  static propTypes  = {
    filterText: string.isRequired,
    onFilterTextInput: func.isRequired
  }

  static defaultProps = {
    filterText: '',
    onFilterTextInput: {}
  }

  //onChange function for user input
  handleFilterTextInputChange = (e) => {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    const {
      filterText
    } = this.props

    return (
      <form className="search-form">
        <input
               className="search-bar"
               type="text"
               placeholder="Search for County"
               value={filterText}
               onChange={this.handleFilterTextInputChange} />
      </form>
    );
  }
}
