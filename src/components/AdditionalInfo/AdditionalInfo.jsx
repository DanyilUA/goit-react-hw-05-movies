import { Link, useParams } from 'react-router-dom';

const AdditionalInfo = () => {
    const { moviesId } = useParams();
    return (
      <>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </>
    );
}

export default AdditionalInfo;