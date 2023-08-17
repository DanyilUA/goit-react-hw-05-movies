import { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import SearchedMovies from "components/SearchedMovies/SearchedMovies";
import fetchMovieSearch from "helpers/fetchMovieSearh";
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
    const location = useLocation();
    const [searchedFilms, setSearchedFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
      if (searchParams) {
          fetchMovieSearch(searchParams).then(data => {
            setSearchedFilms(data.results);
        });
      }
    }, [searchParams]);

  return (
    <>
      <SearchBox onSubmit={setSearchParams} currentQuery={searchParams} />
      <SearchedMovies location={location} searchedFilms={searchedFilms} />
    </>
  );
}

export default Movies;