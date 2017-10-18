import React from 'react';

export class CountyTable extends React.Component {
  constructor(props) {
    super(props);
  }

  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
        <p>{this.props.county} has {num} companies that need
        to report their emissions to the TCEQ.</p>
        <h2>Emissions</h2>
        <section>
        <div className="emission-stats">
          <div className="stat">
            <p>Carbon Monoxide</p>
            <p><b>{Math.round(co_tpy)}</b></p>
          </div>
          <div className="stat">
            <p>Nitrous Oxide</p>
            <p><b>{Math.round(nox_tpy)}</b></p>
          </div>
          <div className="stat">
            <p>Lead</p>
            <p><b>{Math.round(pb_tpy)}</b></p>
          </div>
          <div className="stat">
            <p>Particular Matter (more than 10 microns)</p>
            <p><b>{Math.round(pm_ten_tpy)}</b></p>
          </div>
          <div className="stat">
            <p>Volatile Organic Compounds</p>
            <p><b>{Math.round(voc_tpy)}</b></p>
          </div>
        </div>
        </section>
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
