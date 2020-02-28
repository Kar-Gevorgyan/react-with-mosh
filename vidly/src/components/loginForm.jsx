import React from "react";
import Joi from 'joi-browser';
import Form from './common/form';
import * as authService from '../services/authService'
import { toast } from "react-toastify";

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username').email(),
        password: Joi.string().required().label('Password').min(8)
    }

    doSubmit = async () => {
        try{
            await authService.login(this.state.data)
        }
        catch(ex) {
            if(ex.response && ex.response.status === 400){
                toast.error(ex.response.data)
            }
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Login')}
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
