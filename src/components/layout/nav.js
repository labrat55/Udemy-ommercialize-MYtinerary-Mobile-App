import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="dropdown">
             <svg className="menu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Create Account</a>
    <a className="dropdown-item" href="#">Log in</a>
  </div>
</div>
        );
    }
}

export default Nav;