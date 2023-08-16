import { Link } from 'react-router-dom';

const AdditionalInfo = () => {
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