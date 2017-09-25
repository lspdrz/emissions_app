import React from 'react';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  //onChange function for user input
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
               type="text"
               placeholder="Search for Company"
               value={this.props.filterText}
               onChange={this.handleFilterTextInputChange} />
      </form>
    );
  }
}

//Prop Types:
SearchBar.propTypes = {
  filterText: React.PropTypes.string.isRequired,
  onFilterTextInput: React.PropTypes.func.isRequired,
}