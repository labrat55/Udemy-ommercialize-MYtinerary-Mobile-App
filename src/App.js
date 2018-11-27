import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Cities from './components/layout/Cities';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
<Nav />
<Route exact path="/" component={Landing} />
     
    

{/* <Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} /> */}


      
      
     

     







      </div>
      </Router>
    );
   
  }
}


export default App;
