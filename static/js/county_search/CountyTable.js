import React, { Component } from 'react';
import { bool, array, string } from 'prop-types';

//Subcomponents:
import EmissionsStats from './EmissionsStats';

export default class CountyTable extends Component {

  state = {

  }

  static propTypes = {
    showTable: bool.isRequired,
    counties: array.isRequired,
    county: string.isRequired
  }

  static defaultProps = {
    showTable: false,
    counties: [],
    county: ''
  }

  makeProperNoun = (string) => {
    var temp = string.slice(1, string.length);
    temp = temp.toLowerCase();
    return string[0] + temp;
  }

  companyOrCompanies = (num) => {
    if (num == 1) {
      return num + " company";
    }
    return num + " companies";
  }

  render() {
    const {
      showTable,
      counties,
      county
    } = this.props

    var num = 0;
    var co_tpy = 0;
    var nox_tpy = 0;
    var pb_tpy = 0;
    var pm_ten_tpy = 0;
    var pm_two_five_tpy = 0;
    var so_two_tpy = 0;
    var voc_tpy = 0;
    //Go through entries and push all of the corresponding
    //entries into the counties array:
    counties.forEach((entry) => {
      if (county === entry.county) {
        num++;
        co_tpy += Number(entry.co_tpy);
        nox_tpy += Number(entry.nox_tpy);
        pb_tpy += Number(entry.pb_tpy);
        pm_ten_tpy += Number(entry.pm_ten_tpy);
        so_two_tpy += Number(entry.so_two_tpy);
        voc_tpy += Number(entry.voc_tpy);
      }
    });

    if (showTable) {
      return(
        <div>
          <h1>{county}</h1>
          <p>{this.makeProperNoun(county)} has {this.companyOrCompanies(num)} that need
          to report their emissions to the TCEQ.</p>
          <EmissionsStats co_tpy = {co_tpy}
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
