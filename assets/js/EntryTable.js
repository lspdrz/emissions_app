import React from 'react';
import { EntryRow } from './EntryRow';


export class EntryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Array to hold entry rows
    var rows = [];

    //Push the entry to rows array if entry is equal to user input
    this.props.entries.forEach((entry) => {
      //Test for upper case user input, since all entries are in upper case
      if (
        entry.county.indexOf(this.props.filterText.toUpperCase()) === -1
      )
        {
        return;
      }
      rows.push(<EntryRow entry={entry} key={entry.account} />);
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
}

//Prop Types
EntryTable.propTypes = {
  entries: React.PropTypes.array.isRequired,
  filterText: React.PropTypes.string.isRequired,
};
