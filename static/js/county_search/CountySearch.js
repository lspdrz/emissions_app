import React, { Component } from 'react';
import { string } from 'prop-types';

//Subcomponents:
import FilterableCountyTable from './FilterableCountyTable';

//Styles:
import '../../styles/scss/county_search.scss';

export default class CountySearch extends Component {

  state = {
    data: []
  }

  static propTypes = {
    url: string.isRequired
  }

  static defaultProps = {
    url: 'url-to-api'
  }

  //When component mounts, run the ajax request to the API
  componentDidMount() {
    this.loadEntriesFromServer();
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

  //Render the filtered table of entries
  render() {
    return (
      <div className="react-app">
        <FilterableCountyTable counties={this.state.data} />
      </div>
    )
  }
}
