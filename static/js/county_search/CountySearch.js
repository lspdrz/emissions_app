//Require scss
require('../../styles/scss/county_search.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableEntryTable } from './FilterableEntryTable';

export class CountySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: []};
  }

  //Fetch the dataset from the API
  loadEntriesFromServer() {
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    })
  }

  //When component mounts, run the ajax request to the API
  componentDidMount() {
    this.loadEntriesFromServer();
  }

  //Render the filtered table of entries
  render() {
    return (
      <div className="react-app">
        <FilterableEntryTable entries={this.state.data} />
      </div>
    )
  }
}

//Prop Types
CountySearch.propTypes = {
  url: React.PropTypes.string.isRequired,
};
