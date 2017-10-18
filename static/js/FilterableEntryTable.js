import React from 'react';
import { SearchBar } from './SearchBar';
import { CountyButtonRows } from './CountyButtonRows';
import { CountyTable } from './CountyTable';

export class FilterableEntryTable extends React.Component {
  constructor(props) {
    super(props);

    //filtered text to be passed to the SearchBar
    this.state = {
      filterText: '',
      showTable: false,
      county: '',
    };

    //onChange function to be passed to the SearchBar
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    //onChange function to be passed to the CountyButtonRows
    this.handleShowTable = this.handleShowTable.bind(this);
  }

  //onChange function changes the filteredText state
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText,
      showTable: false
    });
  }

  // Handles the button action, changing the
  // showTable state boolean every time
  // button is clicked
  handleShowTable(county) {
    this.setState(prevState => ({
      showTable: !prevState.showTable,
      county: county,
      filterText: ''
    }));
  }

  render() {
    return (
      <div>
        <div className="search-results">
          <SearchBar filterText={this.state.filterText}
                   onFilterTextInput={this.handleFilterTextInput}/>
          <CountyButtonRows
                      filterText={this.state.filterText}
                      entries={this.props.entries}
                      county={this.state.county}
                      onHandleShowTable={this.handleShowTable} />
        </div>
        <div className="county-table">
          <CountyTable
                       showTable={this.state.showTable}
                       county={this.state.county}
                       entries={this.props.entries} />
        </div>
      </div>
    );
  }
}

//Prop Types
FilterableEntryTable.propTypes = {
  entries: React.PropTypes.array.isRequired,
};
