import React from 'react'
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>County Search</Link></li>
            <li><Link to='/county-map'>County Map</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
