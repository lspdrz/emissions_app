import React from 'react';
import { EntryRow } from './EntryRow';
import { CountyButtonRows } from './CountyButtonRows';
import { CountyTable } from './CountyTable';

export class EntryTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showTable: false,
      county: '',
    }

    this.handleShowTable = this.handleShowTable.bind(this);
  }

  // Handles the button action, changing the
  // showTable state boolean every time
  // button is clicked
  handleShowTable(county) {
    this.setState(prevState => ({
      showTable: !prevState.showTable,
      county: county,
    }));
  }


  render() {
    return (
      <div>
        <CountyButtonRows
                      filterText={this.props.filterText}
                      entries={this.props.entries}
                      county={this.state.county}
                      onHandleShowTable={this.handleShowTable} />

        <CountyTable
                     showTable={this.state.showTable}
                     county={this.state.county}
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
