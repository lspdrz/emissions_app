import React from 'react';

export class CountyTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var county = this.props.showCounty;
    var num = 0;
    this.props.entries.forEach((entry) => {
      if(county === ".0.1.0:$" + entry.county) {
        num ++;
      }
    });

    if (this.props.showTable) {
      return(
      <div>
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
