import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiService } from 'services/Api';
import { ReviewList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews();

    async function getReviews() {
      try {
        const reviews = await apiService.getMovieReviewsById(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  if (!reviews) return null;
  
   return (
     <>
       {reviews.length === 0 && (
         <p>We do not have any reviews for this movie</p>
       )}
       {reviews.length !== 0 && (
         <ReviewList>
           {reviews.map(({ author, content, id }) => {
             return (
               <li key={id}>
                 <h3>{author}</h3>
                 <p>{content}</p>
               </li>
             );
           })}
         </ReviewList>
       )}
     </>
   );
};

export default Reviews;

