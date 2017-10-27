import React, { Component } from 'react';
import worlddata from './world';
import { geoMercator, geoPath } from 'd3-geo';

class CountyMap extends Component {

  render() {
    return(<p>Map coming soon!</p>);
  }
  // render() {
  //   const projection = geoMercator()
  //   const pathGenerator = geoPath().projection(projection)
  //   const countries = worlddata.features
  //     .map((d,i) => <path
  //     key={'path' + i}
  //     d={pathGenerator(d)}
  //     className='countries'
  //     />)
  //
  //   return <svg width={500} height={500}>
  //           {countries}
  //          </svg>
  // }
}

export default CountyMap
