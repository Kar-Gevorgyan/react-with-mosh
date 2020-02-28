import http from './httpService'
import { apiURL } from '../config.json'

const apiEndPoint = apiURL + '/auth'

export function login(user) {
    return http.post(apiEndPoint, {
        email: user.username,
        password: user.password
    });
}