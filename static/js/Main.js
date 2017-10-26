import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { CountySearch } from './county_search/CountySearch.js';
import { CountyMap } from './county_map/CountyMap.js';

export class Main extends React.Component {

  MyCountySearch() {
    return (
      <CountySearch url = '/api/' />
    );
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" render={this.MyCountySearch} />
          <Route path="/county-map" component={CountyMap} />
        </Switch>
      </div>
    );
  }
}
