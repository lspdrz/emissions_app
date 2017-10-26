import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import { Main } from './Main.js';

export class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}
