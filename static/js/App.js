import React from 'react';
import ReactDOM from 'react-dom';

//Subcomponents:
import Header from './Header.js';
import Main from './Main.js';

//Styles:
import '../styles/index.scss';

export class App extends React.Component {
  render() {
    return(
      <div className="react-app">
        <Header />
        <Main />
      </div>
    );
  }
}
