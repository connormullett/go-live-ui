
import { API_URI } from './config';
import axios from 'axios';


function login (username, password) {
    axios.post(`${API_URI}/users/authenticate`, {
        username,
        password
    })
        .then((response) => {
            localStorage.setItem('auth token', response.data.token);
        })
}

function logout() {
    localStorage.clear();
}

export const authService = {
    login,
    logout
};
