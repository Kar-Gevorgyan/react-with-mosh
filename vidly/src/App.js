import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/navBar'
import Movies from "./components/movies";
import MovieForm from "./components/movieForm"
import Costumers from "./components/costumers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
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
                    <Route path="/movies" component={Movies}/>
                    {/* <Route path="/movies" render={(props) => <sMovies {...props}/>}/> */}
                    <Route path="/costumers" component={Costumers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Redirect from="/" exact to="/movies"/>
                    <Redirect to="not-found"/>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
