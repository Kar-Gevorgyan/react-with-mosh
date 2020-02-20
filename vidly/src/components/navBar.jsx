import React, {Component} from 'react';
import {NavLink , Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Vidly</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink className="nav-link nav-item" to="/movies">Movies</NavLink>
                        <NavLink className="nav-link nav-item" to="/costumers">Costumers</NavLink>
                        <NavLink className="nav-link nav-item" to="/rentals">Rentals</NavLink>
                        <NavLink className="nav-link nav-item" to="/login">Login</NavLink> 
                        <NavLink className="nav-link nav-item" to="/register">Register</NavLink> 
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
