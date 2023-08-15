import { useState, useEffect, useRef, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import PosterMovie from 'components/PosterMovie/PosterMovie';
import fetchMovieById from '../helpers/fetchMoviesById';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [movieInfo, setMovieInfo] = useState('');
    const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const movie = await fetchMovieById(movieId);
          setMovieInfo(movie);
        } catch (error) {
          console.error(error);
          setMovieInfo('');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
  
    }, [movieId]);

    return (
      <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <PosterMovie poster={movieInfo} />
        {movieInfo && <AdditionalInfo />}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    );
}

export default MovieDetails;