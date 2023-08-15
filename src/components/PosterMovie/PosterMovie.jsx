
const PosterMovie = ({ poster }) => {
  const defaultingImage =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    poster && (
      <div className="poster">
        {poster.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
            alt={poster.original_title}
            className=""
            width={300}
          />
        ) : (
          <img src={defaultingImage} alt="Default Poster" />
        )}

        <div className="infoFilm">
          <h2>{poster.original_title}</h2>
          <p>user score {Number(poster.vote_average * 10).toFixed(2)} % </p>
          <p>overview: {poster.overview}</p>
          <ul className="genres">
            {poster.genres.length > 0 &&
              poster.genres.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
    )
  );
};

export default PosterMovie;





