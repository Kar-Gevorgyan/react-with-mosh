import http from './httpService'
import { apiURL } from '../config.json'

const apiEndPoint = apiURL + '/movies'

function movieUrl(id) {
    return `${apiEndPoint}/${id}`
}

export function getMovies() {
    return http.get(apiEndPoint)
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId))
}

export function saveMovie(movie) {
    if(movie._id){
        const body = { ...movie }
        delete body._id
        return http.put(movieUrl(movie._id), body)
    }
    return http.post(apiEndPoint, movie)
}

export function deleteMovies(movieId) {
    return http.delete(movieUrl(movieId))
}