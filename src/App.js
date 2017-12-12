import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Hello from './components/Hello'
import HelloYou from './components/HelloYou'
import Goodbye from './components/Goodbye'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import Login from './components/Login'

class App extends Component {

  state = {
    loggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render() {
    return (
      <Router>
        <div className="App">

          <h1>Welcome to my website</h1>

          <p>{ this.state.loggedIn && 'Your are Logged In!' }</p>

          <strong>Navigation:</strong>
          <Link to="/"> Home</Link> |
          <Link to="/hello"> Hello</Link> |
          <Link to="/hello/you"> Hello You</Link> |
          <Link to="/goodbye"> Goodbye</Link> |
          <Link to="/contact"> Contact</Link> |
          <button className={this.state.loggedIn ? 'LoggedIn' : ''} onClick={ this.toggleLoggedIn }>{ this.state.loggedIn ? 'Log out' : 'Log in' }</button><br /><br />
          <hr />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/hello/:name" component={HelloYou} />
            <Route exact path="/hello" component={ Hello } />
            <Route path="/goodbye" component={ Goodbye } />
            <Route path="/contact" component={() => {
              if (this.state.loggedIn) {
                // All good, proceed
                return <Contact />
              } else {
                // Kick 'em out!
                return <Redirect to="/Login" />
              }
            }} />
            <Route path="/login" component={ Login } />
            <Route component={NoMatch}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
