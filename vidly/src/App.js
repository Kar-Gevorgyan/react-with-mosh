import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/navBar'
import Movies from "./components/movies";
import MovieForm from "./components/movieForm"
import Costumers from "./components/costumers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <header className="container-fluid m-0">
                <NavBar/>
            </header>
            <main className="container mt-4">
                <Switch>
                    <Route path="/movies/:id" component={MovieForm}/>
                    <Route path="/movies/new" component={MovieForm}/>
                    <Route path="/movies" component={Movies}/>
                    {/* <Route path="/movies" render={(props) => <sMovies {...props}/>}/> */}
                    <Route path="/costumers" component={Costumers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Redirect from="/" exact to="/movies"/>
                    <Redirect to="not-found"/>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
