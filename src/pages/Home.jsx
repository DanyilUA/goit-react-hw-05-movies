import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchMoviesList from 'helpers/fetchMoviesList';
import TrendingMovies from 'components/TrendingMovies';


const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();

useEffect(() => {
  const request = 'trending/movie/day';

  fetchMoviesList(request)
    .then(data => {
      setTrendingMovies(data.results);
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    });
}, []);
        

  return (
    <main>
          <h1>Tranding Today</h1>
          <TrendingMovies location={location} trendingMovies={trendingMovies}/>
    </main>
  );
};

export default Home;
