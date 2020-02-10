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
            <header className="container-fluid">
                <NavBar/>
            </header>
            <main className="container mt-4">
                <Switch>
                    <Route path="/movies/:_id" component={MovieForm}/>
                    {/*<Route path="/movies" component={Movies}/>*/}
                    <Route path="/movies" render={(props) => <Movies {...props}/>}/>
                    <Route path="/costumers" component={Costumers}/>
                    <Route path="/rentals" component={Rentals}/>
                    <Route path="/not-found" component={NotFound}/>
                    <Route path="/" exact component={Movies}/>
                    <Redirect to="not-found"/>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
