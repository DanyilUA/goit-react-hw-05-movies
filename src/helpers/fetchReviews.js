import axios from 'axios';

const API_KEY = '0561c0caa6894fc9c35e7bf8e6e31140';

function fetchReviews(movie_id) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}`
    )

    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Fetch Error:', error);
      throw error;
    });
}

export default fetchReviews;
