import React, { Component } from 'react';
import NavUnauth from './NavUnauth';
import NavAuth from './NavAuth';
import Main from './Main';
import Footer from './Footer';
import {Switch, Route} from 'react-router-dom';
// import AllSpots from './AllSpots';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from './Private';
import Profile from './Profile';
import history from '../history'

class App extends Component {

  state = {
    loggedIn: false,
    user: null
  }

  haveLoggedIn = (boolean, user) => {
    debugger
    this.setState({
      loggedIn: boolean,
      user: user
    });
      localStorage.setItem("state", JSON.stringify(this.state))
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")))  
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if(prevState.user !== this.state.user) history.push('/profile')
  // }

  render() {
    return (
      <>
        {this.state.loggedIn && <NavAuth haveLoggedIn={this.haveLoggedIn} />}
        {!this.state.loggedIn && <NavUnauth />}
        <Switch>
            <Route exact path="/" component={Main}/>
            {/* <Route path="/all-spots" component={AllSpots} /> */}
            <Route path="/sign-up" component={Signup} />
            <Route path="/log-in" render={() => <Login haveLoggedIn={this.haveLoggedIn} history={history} />} />
            <PrivateRoute loggedIn={this.state.loggedIn} user={this.state.user} path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
