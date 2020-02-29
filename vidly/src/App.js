import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar'
import Movies from "./components/movies";
import MovieForm from "./components/movieForm"
import Costumers from "./components/costumers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import ProtectedRoute from './components/common/protectedRoute';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';

class App extends React.Component {
    state = {} 

    componentDidMount() {
        const user = auth.getCurrentUser()
        this.setState({ user })
    }
    render() {
        const { user } = this.state;

        return (
            <React.Fragment>
                <header className="container">
                    <ToastContainer/>
                    <NavBar user={user}/>
                </header>
                <main className="container mt-4">
                    <Switch>
                        <ProtectedRoute path="/movies/:id" component={MovieForm}/>
                        <Route 
                            path="/movies" 
                            render={props => <Movies {...props} user={user}/>}
                        />
                        <Route path="/costumers" component={Costumers}/>
                        <Route path="/rentals" component={Rentals}/>
                        <Route path="/not-found" component={NotFound}/>
                        <Route path="/login" component={LoginForm}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/register" component={RegisterForm}/>
                        <Redirect from="/" exact to="/movies"/>
                        <Redirect to="not-found"/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
