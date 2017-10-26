import React from 'react';

export class CountyButtons extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowTableChange = this.handleShowTableChange.bind(this);
  }

  //onChange function for button click
  handleShowTableChange(e) {
    this.props.onHandleShowTable(e.target.value);
  }

  render() {
    //Array to hold entry rows
    //and display them as buttons to select
    var rows = [];

    //Push the entry to rows array if entry is equal to user input
    this.props.entries.forEach((entry) => {
      var userInput = this.props.filterText;
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
      if (rows.indexOf(newRow) === -1) {
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

CountyButtons.PropTypes = {
  entries: React.PropTypes.array.isRequired,
  filterText: React.PropTypes.string.isRequired,
  onHandleShowTable: React.PropTypes.func.isRequired,
}
