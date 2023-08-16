import axios from 'axios';

const API_KEY = '0561c0caa6894fc9c35e7bf8e6e31140';

function fetchMovieSearch(request) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${request}&include_adult=false&api_key=${API_KEY}`
    )

    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => console.log(error));
}

export default fetchMovieSearch;




