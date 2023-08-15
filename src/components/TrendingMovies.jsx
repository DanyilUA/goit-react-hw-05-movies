import { Link } from 'react-router-dom';

const TrendingMovies = ({ trendingMovies, location }) => {
  return (
    <ul>
      {trendingMovies &&
        trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default TrendingMovies;
