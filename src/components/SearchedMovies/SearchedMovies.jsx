import { Link } from 'react-router-dom';

const  SearchedMovies = ({ searchedFilms, location }) => {
    return (
        <ul>
            {searchedFilms &&
                searchedFilms.map(film => {
                    return (
                      <li key={film.id}>
                        <Link
                          state={{ from: location }}
                          to={`/movies/${film.id}`}
                        >
                          {film.title || film.name}
                        </Link>
                      </li>
                    );

            })}
        </ul>
    );
}

export default SearchedMovies;