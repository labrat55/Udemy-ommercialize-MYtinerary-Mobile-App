import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Create Account</a>
    <a class="dropdown-item" href="#">Log in</a>
  </div>
</div>
        );
    }
}

export default Nav;