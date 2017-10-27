import React, { Component } from 'react';
import { array } from 'prop-types';

//Subcomponents;
import SearchBar from './SearchBar';
import CountyButtons from './CountyButtons';
import CountyTable from './CountyTable';

export default class FilterableCountyTable extends Component {

  state = {
    filterText: '',
    county: '',
    showTable: false
  }

  static propTypes = {
    counties: array.isRequired
  }

  static defaultProps = {
    counties: []
  }

  //onChange function changes the filteredText state
  handleFilterTextInput = (filterText) => {
    this.setState({
      filterText: filterText,
      showTable: false
    });
  }

  // Handles the button action, changing the
  // showTable state boolean every time
  // button is clicked
  handleShowTable = (county) => {
    this.setState(prevState => ({
      showTable: !prevState.showTable,
      county: county,
      filterText: ''
    }));
  }

  render() {
    const {
      counties
    } = this.props

    return (
      <div>
        <div className="search-results">
          <SearchBar filterText={this.state.filterText}
                   onFilterTextInput={this.handleFilterTextInput}/>
          <CountyButtons
                      filterText={this.state.filterText}
                      counties={counties}
                      county={this.state.county}
                      onHandleShowTable={this.handleShowTable} />
        </div>
        <div className="county-table">
          <CountyTable
                       showTable={this.state.showTable}
                       county={this.state.county}
                       counties={counties} />
        </div>
      </div>
    );
  }
}
