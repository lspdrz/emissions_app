import React from 'react';

export class EntryRow extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowTableChange = this.handleShowTableChange.bind(this);
  }

  handleShowTableChange(e) {
    this.props.onShowTableChange(e.target.value);
    console.log('The link was clicked');
    console.log(this.props.showTable);
  }

  render() {
    var entry = this.props.entry;
    var county = entry.county;
    return (
      <ul>
        <button value={this.props.showTable}
                onClick={this.handleShowTableChange}>
          {county.charAt(0) + county.slice(1).toLowerCase()}
        </button>
      </ul>
    );
  }
}

//Prop Types
EntryRow.propTypes = {
  entry: React.PropTypes.object.isRequired,
};
