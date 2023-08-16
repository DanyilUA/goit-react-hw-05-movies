import fetchReviews from "helpers/fetchReviews";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Reviews() {

const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetchReviews(movieId)
        .then(data => {
          if (data.results.length === 0) {
            console.error('no reviews found');
          } else {
            setReviews(data.results);
            console.log(reviews);
          }
        })
        .catch(error => {
          console.error('new error', error);
          throw error;
        });
    }, [movieId, reviews]);

    return (
      <section>
        {reviews.length === 0 && (
          <p>We don`t have reviews for this movie yet</p>
        )}
        {reviews &&
          reviews.map(review => (
              <ul key={review.id}>
                <li>
                  <p>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              </ul>
          ))}
      </section>
    );
    
}

export default Reviews;

