import React from 'react';

export class EntryRow extends React.Component {
  constructor(props) {
    super(props);

  }

  showCountyInfo(county) {
    var x = document.getElementById('CountyView');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  render() {
    var entry = this.props.entry;
    var county = entry.county;
    return (
      <ul>
        <button onClick={this.showCountyInfo}>
          {county.charAt(0) + county.slice(1).toLowerCase()}
        </button>
        <div id="CountyView">
          {entry.company}
        </div>
      </ul>
    );
  }
}

//Prop Types
EntryRow.propTypes = {
  entry: React.PropTypes.object.isRequired,
};
