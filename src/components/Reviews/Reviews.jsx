import fetchReviews from "helpers/fetchReviews";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Reviews() {

const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews(movieId)
            .then(data => {
                console.log(data);
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
        
    }, [movieId]);

    return (
      <section>
        {reviews.length === 0 && ( <p>We don`t have reviews for this movie yet</p>)}
        {reviews &&
          reviews.map(review => (
            <section>
              <ul key={review.id}>
                <li>Author: {review.author}</li>
                <li>{review.content}</li>
              </ul>
            </section>
          )
          )}
      </section>
    );
    
}

export default Reviews;
