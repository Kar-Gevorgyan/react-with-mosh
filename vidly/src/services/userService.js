import http from './httpService'
import { apiURL } from '../config.json'

const apiEndPoint = apiURL + '/users'

export function register(email, password, name) {
    return http.post(apiEndPoint, {email, password, name});
}