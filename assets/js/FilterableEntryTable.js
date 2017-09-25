import React from 'react';
import { SearchBar } from './SearchBar';
import { EntryTable } from './EntryTable';

export class FilterableEntryTable extends React.Component {
  constructor(props) {
    super(props);

    //filtered text to be passed to the SearchBar
    this.state = {filterText: ''};

    //onChange function to be passed to the SearchBar
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  //onChange function changes the filteredText state
  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onFilterTextInput={this.handleFilterTextInput}/>
        <EntryTable filterText={this.state.filterText}
                    entries={this.props.entries} />
      </div>
    );
  }
}

//Prop Types
FilterableEntryTable.propTypes = {
  entries: React.PropTypes.array.isRequired,
};
