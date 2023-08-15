import axios from 'axios';

const API_KEY = '0561c0caa6894fc9c35e7bf8e6e31140';

function fetchMoviesList(request) {
  return axios
    .get(
      `https://api.themoviedb.org/3/${request}?api_key=${API_KEY}`
    )

    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(error => console.log(error));
}

export default fetchMoviesList;




// 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc' \
