import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CountySearch from './county_search/CountySearch';
import CountyMap from './county_map/CountyMap.js';

class Main extends Component {

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

export default Main
