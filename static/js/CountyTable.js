import React from 'react';
import { EmissionsStats } from './EmissionsStats';

export class CountyTable extends React.Component {
  constructor(props) {
    super(props);
  }


  makeProperNoun(string) {
    var temp = string.slice(1, string.length);
    temp = temp.toLowerCase();
    console.log(string[0]+temp);
    return string[0] + temp;
  }

  companyOrCompanies(num) {
    if (num == 1) {
      return num + " company";
    }
    return num + " companies";
  }

  render() {
    var county = this.props.county;
    var num = 0;
    var co_tpy = 0;
    var nox_tpy = 0;
    var pb_tpy = 0;
    var pm_ten_tpy = 0;
    var pm_two_five_tpy = 0;
    var so_two_tpy = 0;
    var voc_tpy = 0;
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
        co_tpy += Number(entry.co_tpy);
        nox_tpy += Number(entry.nox_tpy);
        pb_tpy += Number(entry.pb_tpy);
        pm_ten_tpy += Number(entry.pm_ten_tpy);
        so_two_tpy += Number(entry.so_two_tpy);
        voc_tpy += Number(entry.voc_tpy);
      }
    });

    if (this.props.showTable) {
      return(
        <div>
          <h1>{this.props.county}</h1>
          <p>{this.makeProperNoun(this.props.county)} has {this.companyOrCompanies(num)} that need
          to report their emissions to the TCEQ.</p>
          <EmissionsStats county = {this.props.county}
                      co_tpy = {co_tpy}
                      nox_tpy = {nox_tpy}
                      pb_tpy = {pb_tpy}
                      pm_ten_tpy = {pm_ten_tpy}
                      voc_tpy = {voc_tpy} />
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
