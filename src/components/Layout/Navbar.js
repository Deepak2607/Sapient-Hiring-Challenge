import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbarr extends Component {
    
    render () {

        return (
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item"><Link className="link" to="/cardview">CardView</Link></li>
                  <li className="nav-item"><Link className="link" to="/">TableView</Link></li>
                </ul>
            
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for games" aria-label="Search" value={this.props.query}
                   onChange={this.props.handleInputChange} />
                </form> 
              </div>
            </nav>
            </div>
    );
  }  
}

export default Navbarr;