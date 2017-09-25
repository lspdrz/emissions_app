import React from 'react';

export class EntryRow extends React.Component {
  constructor(props) {
    super(props);

  }

  makeLowerCase(e) {
    return
  }

  render() {
    var company = this.props.entry.company;
    var sic_description = this.props.sic_description;
    return (
      <ul>
        {this.props.entry.company}
        {this.props.entry.sic_description}
      </ul>
    );
  }
}

//Prop Types
EntryRow.propTypes = {
  entry: React.PropTypes.object.isRequired,
};
