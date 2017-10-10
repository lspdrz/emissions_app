import React from 'react';

export class CountyTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var county = this.props.showCounty;
    var num = 0;
    var counties = [];
    this.props.entries.forEach((entry) => {
      if(county === ".0.1.0:$" + entry.county) {
        counties.push(entry.county);
        num ++;
      }
    });

    if (this.props.showTable) {
      return(
      <div className="county-table">
        <h1>Companies</h1>
        {counties}
      {this.props.showCounty}
      {num}
      </div>
    );
    }
    return <div></div>;
  }

}

//Prop Types:
CountyTable.propTypes = {
  rows: React.PropTypes.array.isRequired,
}
