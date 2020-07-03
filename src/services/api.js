import axios from 'axios';

//https://sujeitoprogramador.com/r-api/?api=filmes
//https://api.themoviedb.org/3  baseurl
//response.results[0].poster_path
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api; 