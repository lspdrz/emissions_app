import React, { Component } from 'react';
import { array, string, func } from 'prop-types';

export default class CountyButtons extends Component {

  state = {

  }

  static propTypes = {
    counties: array.isRequired,
    filterText: string.isRequired,
    onHandleShowTable: func.isRequired
  }

  static defaultProps = {
    counties: [],
    filterText: '',
    onHandleShowTable: {}
  }

  //onChange function for button click
  handleShowTableChange = (e) => {
    this.props.onHandleShowTable(e.target.value);
  }

  //Function to test if rows array already has a row with unique key
  findKey(rows, keyToSearch) {
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].key == keyToSearch) {
        return i;
      }
    }
    return -1;
  }

  render() {
    const {
      counties,
      filterText
    } = this.props

    //Array to hold entry rows
    //and display them as buttons to select
    var rows = [];
    var num = 0;

    //Push the entry to rows array if entry is equal to user input
    counties.forEach((entry) => {
      var userInput = filterText;
      //Test for upper case user input, since all entries are in upper case
      if (
        userInput === ''
        ||
        entry.county.substring(0, userInput.length) != userInput.toUpperCase()
      ) {
        return;
        }
        var newRow = <button className="result-button"
                            key={entry.county}
                            value={entry.county}
                            onClick={this.handleShowTableChange}>
                           {entry.county}
                       </button>
      //If the button is not already present,
      //create and push to array:
      if (this.findKey(rows, entry.county) === -1) {
        rows.push(newRow);
      }
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
}
