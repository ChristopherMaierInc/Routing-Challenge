import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css';

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
            <Route path="/login" component={ LogIn } />
            <Route component={NoMatch}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

const Hello = () => (
  <p>Hello world!</p>
)

const HelloYou = (props) => (
  <p>Hello { props.match.params.name }!</p>
)

const Goodbye = () => (
  <p>Bi-world!</p>
)

const Contact = () => (
<div>
  <h1>Woah brah!</h1>
  <p>You've made it to the </p>
  <em>CONTACT PAGE!!!</em>
</div>
)

const LogIn = () => (
  <p>LOGGGGGGGGGGGGGGGGGGGGGGGGG    IN!!!!!!!!!!!!!!!!</p>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>404: No match for <code>{ location.pathname }</code></h3>
  </div>
)

export default App;
