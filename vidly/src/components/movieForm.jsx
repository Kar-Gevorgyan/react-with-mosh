import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class NewMovieForm extends Form {
    state = {
        data: {title: '', genreId: '', numberInStock: '', dailyRentalRate: ''},
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().integer().required().label('Number in Stock').min(0).max(100),
        dailyRentalRate: Joi.number().required().label('Daily Rental Rate').min(0).max(10)
    }

    componentDidMount(){
        const genres = getGenres();
        this.setState({genres})

        const movieId = this.props.match.params.id;
        if(movieId === 'new') return;

        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace('/not-found')

        this.setState({ data: this.mapToViewModel(movie)})
    }

    mapToViewModel = movie => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = (e) => {
        saveMovie(this.state.data)

        this.props.history.push('/movies')
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
                            {this.renderSelect('genreId', 'Genre', this.state.genres)}
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