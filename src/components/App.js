import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Cards from './cards';
import CardDetail from './card_detail';
import CardNew from './card_new';

import Main from './main';
import Footer from './footer';
import '../style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/' component={(props) => (
            <Main timestamp={new Date().toString()} {...props} />
          )} />
          <Route path='/cardsearch' component={Cards} />
          <Route path='/detail/:idx' component={CardDetail} />
          <Route path='/new' component={CardNew} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;


// import logo from '../logo.svg';
// {/* <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header> */}