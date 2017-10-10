//Require scss
require('../styles/scss/index.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { FilterableEntryTable } from './FilterableEntryTable';

class EntriesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {data: [] };
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
      <div className="entries-list">
      <FilterableEntryTable entries={this.state.data} />
      </div>
    )
  }
}

//Prop Types
EntriesList.propTypes = {
  url: React.PropTypes.string.isRequired,
};

ReactDOM.render(<EntriesList url='/api/' />,
                document.getElementById('container'))
