import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';

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

    async populateGenres() {
        
        const {data: genres} = await getGenres();

        this.setState({genres})
    }

    async populateMovie() {
        try{
            const movieId = this.props.match.params.id;
            if(movieId === 'new') return;
    
            const {data: movie} = await getMovie(movieId);
            this.setState({ data: this.mapToViewModel(movie)})
        }
        catch(ex) {
            if(ex.response && ex.response.status === 404)
                this.props.history.replace('/not-found')
        }
    }

    async componentDidMount(){
        await this.populateGenres()
        await this.populateMovie()
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

    doSubmit = async (e) => {
        await saveMovie(this.state.data)

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