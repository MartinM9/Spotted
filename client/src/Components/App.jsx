import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import {Switch, Route} from 'react-router-dom';
// import AllSpots from './AllSpots';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Switch>
            <Route exact path="/" component={Main}/>
            {/* <Route path="/all-spots" component={AllSpots} /> */}
            <Route path="/sign-up" component={Signup} />
            <Route path="/log-in" component={Login} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
