/* eslint-disable array-callback-return */
import '../Stylesheets/Review.css';

const ReviewsList = ({ reviews }) => {
  return (
    <>
      <div className = 'reviewContainer'>
        {reviews?.length &&
          reviews.map((review, i) => {
            return (
              <div className = 'review' key={`review${i}`}>
                <div className = 'user'>
                  {review.author}
                </div>

                <div className= 'reviewTitle'>
                  {review.title}
                </div>

                <div className = 'reviewComment'>
                  {review.comment}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ReviewsList;
