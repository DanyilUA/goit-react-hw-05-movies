import { useState, useEffect } from "react";
import SearchBox from "components/SearchBox";
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchedMovies from "components/SearchedMovies/SearchedMovies";
import fetchMovieSearch from "helpers/fetchMovieSearh";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [queryMovie, setQueryMovie] = useState('');
    const [searchedFilms, setSearchedFilms] = useState([]);

  function handleFormSubmit(inputValue) {
      setQueryMovie(inputValue);
  }

    useEffect(() => {
        const request = queryMovie;    

      fetchMovieSearch(request).then(data => {
        setSearchedFilms(data.results);
        console.log('searchedFilms', searchedFilms);
      });
    }, [queryMovie]);

  return (
    <>
      {/* <input type="text" name="" id="" onChange={evt => setSearchParams({query: evt.target.value})}/>
      <button onClick={() => setSearchParams({})}>changeInput</button> */}
      <SearchBox onSubmit={handleFormSubmit} />
      <SearchedMovies location={location} searchedFilms={searchedFilms} />
    </>
  );
}

export default Movies;