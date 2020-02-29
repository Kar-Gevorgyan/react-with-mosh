import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink , Link} from "react-router-dom";

class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
        const { user } = this.props

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Vidly</Link>
                <div className="ml-auto d-flex">
                    {user && (
                        <React.Fragment>
                            <NavLink className="nav-link nav-item ml-auto" to="/profile">{user.name}</NavLink>
                        </React.Fragment>
                    )}
                    <div className="dropdown" onClick={this.toggleOpen}>
                        <button className="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className={menuClass} aria-labelledby="dropdownMenuButton">
                            <NavLink className="nav-link nav-item dropdown-item" to="/movies">Movies</NavLink>
                            <NavLink className="nav-link nav-item dropdown-item" to="/costumers">Costumers</NavLink>
                            <NavLink className="nav-link nav-item dropdown-item" to="/rentals">Rentals</NavLink>
                            <div className="dropdown-divider"></div>
                            {!user && (
                                <React.Fragment> 
                                    <NavLink className="nav-link nav-item dropdown-item" to="/login">Login</NavLink> 
                                    <NavLink className="nav-link nav-item dropdown-item" to="/register">Register</NavLink>
                                </React.Fragment>
                            )} 
                            {user && (
                                <React.Fragment> 
                                    <NavLink className="nav-link nav-item dropdown-item" to="/logout">Logout</NavLink>
                                </React.Fragment>
                            )} 
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
