import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import SearchedMovies from "components/SearchedMovies/SearchedMovies";
import fetchMovieSearch from "helpers/fetchMovieSearh";
import { useLocation } from "react-router-dom";

const Movies = () => {
    const location = useLocation();
    const [searchedFilms, setSearchedFilms] = useState([]);
    const [query, setQuery] = useState('');
  console.log('useEffect triggered with query:', query);


    useEffect(() => {
        console.log('Fetching movies with query:', query);
       if (query) {
         fetchMovieSearch(query).then(data => {
           setSearchedFilms(data.results);
         });
       }
        console.log('query', query);
    }, [query]);

  return (
    <>
      <SearchBox onSubmit={setQuery} currentQuery={query} />
      <SearchedMovies location={location} searchedFilms={searchedFilms} />
    </>
  );
}

export default Movies;