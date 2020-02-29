import React, {Component} from 'react';
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox"
import { getMovies, deleteMovies } from "../services/movieService";
import { getGenres} from "../services/genreService";
import { paginate } from "../utils/paginate";
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { queryString } from 'query-string';

class Movies extends Component { 
    state ={
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: {path: 'title' , order: 'asc'}
    };

    async componentDidMount() {
        const {data} = await getGenres()
        const genres = [{ _id: '', name: "All Genres"}, ...data];

        const {data: movies} = await getMovies()
        this.setState({movies, genres})
    }

    handleDelete = async (movie) => {
        const originalMovies = this.state.movies
        const movies = originalMovies.filter(m => m._id !== movie._id);
        this.setState({movies})

        try {
            await deleteMovies(movie._id)
        }
        catch(ex) {
            if(ex.response && ex.response.status === 404)
                toast.error('This movie has already been deleted.')  
            
            this.setState({movies: originalMovies})
        }
    };

    handleLIke = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies })
    };

    handlePageChange = page => {
        this.setState({ currentPage: page })
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1})
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre:null, currentPage: 1})
    };

    handleSort = sortColumn =>{
        this.setState({ sortColumn })
    };

    getPagedData = () => {

        const {pageSize, currentPage, movies: allMovies, selectedGenre, sortColumn, searchQuery} = this.state;

        let filtered = allMovies;
        if(searchQuery){
            filtered = allMovies.filter(movie =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        }else if (selectedGenre && selectedGenre._id){
            filtered = allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        }

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, pageSize, currentPage);

        return { totalCount: filtered.length, movies }
    };

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, genres, sortColumn, searchQuery} = this.state;
        const { user } = this.props

        if(count === 0) return <p>There are no movies in the database.</p>;

        const {totalCount, movies} = this.getPagedData()

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup
                        items={genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    {user && (
                        <React.Fragment>
                            <Link className="btn btn-primary mb-3" to="/movies/new">New Movie</Link>
                        </React.Fragment>
                    )}
                    <p>Showing {totalCount} movies in the database</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch} />
                    <MoviesTable
                        onDelete={this.handleDelete}
                        onLike={this.handleLIke}
                        onSort={this.handleSort}
                        movies={movies}
                        sortColumn={sortColumn}
                    />
                    <Pagination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }
}

export default Movies;
