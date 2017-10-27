import React, { Component } from 'react';
import { string, number } from 'prop-types';

export default class EmissionsStats extends React.Component {

  state = {

  }

  static propTypes = {
    co_tpy: number.isRequired,
    nox_tpy: number.isRequired,
    pb_tpy: number.isRequired,
    pm_ten_tpy: number.isRequired,
    voc_tpy: number.isRequired,
  }

  static defaultProps = {
    co_tpy: 0,
    nox_tpy: 0,
    pb_tpy: 0,
    pm_ten_tpy: 0,
    voc_tpy: 0
  }

  //Function to round numbers to a given decimal point:
  round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

  render() {
    const {
      co_tpy,
      nox_tpy,
      pb_tpy,
      pm_ten_tpy,
      voc_tpy
    } = this.props

    return(
    <div>
      <h2>Emissions (in tons per year)</h2>
      <section>
      <div className="emission-stats">
        <div className="stat">
          <p>Carbon Monoxide</p>
          <p><b>{this.round(co_tpy, 2)}</b></p>
        </div>
        <div className="stat">
          <p>Nitrous Oxide</p>
          <p><b>{this.round(nox_tpy, 2)}</b></p>
        </div>
        <div className="stat">
          <p>Lead</p>
          <p><b>{this.round(pb_tpy, 5)}</b></p>
        </div>
        <div className="stat">
          <p>Particular Matter (more than 10 microns)</p>
          <p><b>{this.round(pm_ten_tpy, 2)}</b></p>
        </div>
        <div className="stat">
          <p>Volatile Organic Compounds</p>
          <p><b>{this.round(voc_tpy, 2)}</b></p>
        </div>
      </div>
      </section>
    </div>
    );
  }
}
