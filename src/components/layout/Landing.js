import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="conatiner">

            <img className="header-logo" src={require('../../Image/MYtineraryLogo.png')} alt="headingLogo" style={{width: 400, height: 100}} />
            <div className="find">
            <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
            <img className="landing-center" src={require('../../Image/circled-right-2.png')} style={{width: 80, height: 80}} />
            </div>
            </div>    
        );
    }
}

export default Landing;





