import axios from 'axios';

const API_KEY = '0561c0caa6894fc9c35e7bf8e6e31140';

function fetchMovieById(movie_id) {
    
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    )

    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Fetch Error:', error);
      throw error;
    });
}

export default fetchMovieById;
