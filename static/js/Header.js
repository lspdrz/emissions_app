import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <ul><Link to='/'>County Search</Link></ul>
            <ul><Link to='/county-map'>County Map</Link></ul>
          </ul>
        </nav>
      </header>
    );
  }
}
