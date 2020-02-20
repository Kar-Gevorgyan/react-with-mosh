import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovies, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeMovieService';

class NewMovieForm extends Form {
    state = {
        data: {title: '', genreId: '', numberInStock: '', dailyRentalRate: ''},
        genres: [],
        errors: {}
    }

    schema = {
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().integer().required().label('Number in Stock').min(0).max(100),
        dailyRentalRate: Joi.number().required().label('Daily Rental Rate').min(0).max(10)
    }

    doSubmit = () => {
        console.log('submited')
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1>Movie Form</h1>
                        <form onSubmit={this.handleSubmit}>
                            {this.renderInput('title', 'Title')}
                            {this.renderInput('genre', 'Genre')}
                            {this.renderInput('numberInStock' , 'Number In Stock')}
                            {this.renderInput('dailyRentalRate' , 'Rate')}
                            {this.renderButton('Save')}
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NewMovieForm;