import React from 'react';

export class CountyTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var county = this.props.county;
    var num = 0;
    //Array to hold entries for the county selected
    var countyRows = [];
    //Go through entries and push all of the corresponding
    //entries into the counties array:
    this.props.entries.forEach((entry) => {
      if (county === entry.county) {
        countyRows.push(
          <li>
            {entry.county} - {entry.co_tpy}
          </li>);
        num++;
      }
    });

    if (this.props.showTable) {
      return(
      <div className="county-table">
        <h1>Companies</h1>
        {countyRows}
        {num}
      </div>
    );
    }
    return <div></div>;
  }

}

//Prop Types:
CountyTable.propTypes = {
  showTable: React.PropTypes.bool.isRequired,
  entries: React.PropTypes.array.isRequired,
  county: React.PropTypes.string.isRequired,
}