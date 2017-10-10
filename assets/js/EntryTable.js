import React from 'react';
import { EntryRow } from './EntryRow';
import { CountyTable } from './CountyTable';

export class EntryTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTable: false,
      showCounty: ''
    }

    this.handleShowTableChange = this.handleShowTableChange.bind(this);
  }

  // Handles the button action, changing the
  // showTable state boolean every time
  // button is clicked
  handleShowTableChange(showTable, showCounty) {
    this.setState(prevState => ({
      showTable: !prevState.showTable,
      showCounty: showCounty
    }));
          console.log(this.state.showTable);
  }


  render() {
    //Array to hold entry rows
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
      var newRow = <button  className="result-button"
                            onClick={this.handleShowTableChange}
                            key={entry.county}
                            showCounty={entry.county}>
                    {entry.county}
                    </button>;
      if (rows.indexOf(newRow) === -1)
        {
          rows.push(newRow);
        }
    });

    return (
      <div>
        {rows}
        <CountyTable rows={rows}
                     showTable={this.state.showTable}
                     showCounty={this.state.showCounty}
                     entries={this.props.entries} />
      </div>
    );
  }
}

//Prop Types
EntryTable.propTypes = {
  entries: React.PropTypes.array.isRequired,
  filterText: React.PropTypes.string.isRequired,
};
