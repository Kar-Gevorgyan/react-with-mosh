import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';

class RegisterForm extends Form {
    state = {
        data: {username: '', password: '', name: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username').email(),
        password: Joi.string().required().label('Password').min(8),
        name: Joi.string().required().label('Name')
    }

    doSubmit = async () => {
        try {
            await userService.register(this.state.data)
        }
        catch(ex) {
            if(ex.response && ex.response.status === 400){
                const errors = {...this.state.errors}
                errors.username = ex.response.data
                this.setState({ errors })
            }
        }
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1>Register</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('username', 'Username')}
                            {this.renderInput('password', 'Password', 'password')}
                            {this.renderInput('name' , 'Name')}
                            {this.renderButton('Register')}
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default RegisterForm;