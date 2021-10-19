/* eslint-disable array-callback-return */
import '../Stylesheets/Review.css';
import { AiFillStar } from "react-icons/ai";

const ReviewsList = ({ reviews }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <>
      <div className = 'reviewContainer'>
        {reviews?.length &&
          reviews.map((review, i) => {
            return (
              <div className = 'review' key={`review${i}`}>
                <div className = 'user'>
                  <div></div>
                  {review.author}
                </div>
                <div className = 'rating'>
                  {rating.map((rate, i) => {
                    if (i < review.rating) {
                      return (
                        <AiFillStar
                          className = 'rating-icon'
                          key={`rate${i}`}
                        />
                      );
                    }
                  })}
                </div>
                <div className= 'reviewTitle'>{review.title}</div>
                <div className = 'reviewComment'>{review.comment}</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ReviewsList;
