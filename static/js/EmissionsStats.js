import React from 'react'

export class EmissionsStats extends React.Component {
  constructor(props) {
    super(props);
  }

  //Function to round numbers to a given decimal point:
  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {
      return(
      <div>
        <h2>Emissions (in tons per year)</h2>
        <section>
        <div className="emission-stats">
          <div className="stat">
            <p>Carbon Monoxide</p>
            <p><b>{this.round(this.props.co_tpy, 2)}</b></p>
          </div>
          <div className="stat">
            <p>Nitrous Oxide</p>
            <p><b>{this.round(this.props.nox_tpy, 2)}</b></p>
          </div>
          <div className="stat">
            <p>Lead</p>
            <p><b>{this.round(this.props.pb_tpy, 5)}</b></p>
          </div>
          <div className="stat">
            <p>Particular Matter (more than 10 microns)</p>
            <p><b>{this.round(this.props.pm_ten_tpy, 2)}</b></p>
          </div>
          <div className="stat">
            <p>Volatile Organic Compounds</p>
            <p><b>{this.round(this.props.voc_tpy, 2)}</b></p>
          </div>
        </div>
        </section>
      </div>
    );
  }
}

//Prop Types:
EmissionsStats.propTypes = {
  county: React.PropTypes.string.isRequired,
  co_tpy: React.PropTypes.number.isRequired,
  nox_tpy: React.PropTypes.number.isRequired,
  pb_tpy: React.PropTypes.number.isRequired,
  pm_ten_tpy: React.PropTypes.number.isRequired,
  voc_tpy: React.PropTypes.number.isRequired,
}
