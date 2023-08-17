import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import fetchCast from "helpers/fetchCast";

function Cast() {

    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      fetchCast(movieId)
          .then(data => {
          if (data.cast.length === 0) {
            console.error('no cast found');
          } else {
            setCast(data.cast);
          }
        })
        .catch(error => {
          console.error('Error fetching cast:', error);
        });
    }, [movieId]);

    return (

      <section>
        {cast.length === 0 && (
          <p>We don't have information about cast</p>
        )}
        {cast &&
          cast.map(item => {
            return (
              <ul key={item.id} className="actor_card_list">
                <li className="actor_card_element">
                  <ul className="actor_list">
                    <li className="actor_element">
                      {item.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                          alt={`${item.character}`}
                          width="100"
                        />
                      ) : (
                        <img
                          src={`http://dummyimage.com/100x150/99cccc.jpg&text=No+photo`}
                          alt={`${item.character}`}
                          width="100"
                        />
                      )}
                    </li>
                    <li>{item.character}</li>
                    <li>{item.name}</li>
                  </ul>
                </li>
              </ul>
            );
          })}
      </section>
    );
};

export default Cast; 