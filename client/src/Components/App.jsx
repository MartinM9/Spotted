import React, { Component } from 'react';
import NavUnauth from './NavUnauth';
import NavAuth from './NavAuth';
import Main from './Main';
import Footer from './Footer';
import {Switch, Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from './Private';
import Profile from './Profile';
import history from '../history'
import CreateSpot from './CreateSpot';
import SingleSpot from './SingleSpot';
import AllSpots from './AllSpots';

class App extends Component {

  state = {
    loggedIn: false,
    user: null,
    spot: null
  }

  haveLoggedIn = (boolean, user) => {
    this.setState({
      loggedIn: boolean,
      user: user
    });
      localStorage.setItem("state", JSON.stringify(this.state))
  }

  addedSpot = spot => {
    this.setState({
      spot: spot
    })
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")))  
  }

  render() {
    return (
      <>
        {this.state.loggedIn && <NavAuth haveLoggedIn={this.haveLoggedIn} />}
        {!this.state.loggedIn && <NavUnauth />}
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/sign-up" component={Signup} />
            <Route path="/all-spots" component={AllSpots} />
            <Route path="/log-in" render={() => <Login haveLoggedIn={this.haveLoggedIn} history={history} />} />
            <Route path="/create-spot" render={() => <CreateSpot addedSpot={this.addedSpot} user={this.state.user} history={history} />} />
            <Route path="/single-spot/:id" component={SingleSpot} />
            <PrivateRoute loggedIn={this.state.loggedIn} user={this.state.user} path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
