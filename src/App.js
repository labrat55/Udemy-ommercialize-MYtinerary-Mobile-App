import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/nav';
import Register from './components/auth/Register';
import Login from './components/auth/Login';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>

      <div className="container">
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
</div>

      <img className="header" src={require('./Image/MYtineraryLogo.png')} style={{width: 400, height: 100}} />
   
      <p className="find">Find your perfect trip, designed by insiders who know and love their cities.</p>
      
      
     

      <img className="landing-center" src={require('./Image/circled-right-2.png')} style={{width: 80, height: 80}} />







      </div>
      </Router>
    );
   
  }
}


export default App;
