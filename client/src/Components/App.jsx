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
import EditProfile from './EditProfile';
import UserSpots from './UserSpots';

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
            <Route path="/sign-up" render={() => <Signup haveLoggedIn={this.haveLoggedIn} />} />
            <Route path="/all-spots" render={(props) => <AllSpots loggedIn={this.state.loggedIn} />} />
            <Route path="/log-in" render={() => <Login haveLoggedIn={this.haveLoggedIn} history={history} />} />
            <Route path="/create-spot" render={() => <CreateSpot addedSpot={this.addedSpot} user={this.state.user} history={history} />} />
            <Route path="/single-spot/:id" render={(props) => <SingleSpot {...props} user={this.state.user} />} />
            <Route path="/profile/:id/spots" render={(props) => <UserSpots {...props} loggedIn={this.state.loggedIn} />} />
            <Route path="/profile/edit/:id" component={EditProfile} />
            <PrivateRoute loggedIn={this.state.loggedIn} user={this.state.user} path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
