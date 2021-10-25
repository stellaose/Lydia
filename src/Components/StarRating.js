// import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../Stylesheets/StarRating.css';

const StarRating = ({ handleRate }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingNumber = i + 1;
          return (
            <label key={`star${i}`}>
              <input
                type="radio"
                name="rating"
                value={ratingNumber}
                onClick={() => {
                  setRating(ratingNumber);
                  handleRate(ratingNumber);
                }}
                className = 'ratingRadio'
              />
              <FaStar
                onMouseEnter={() => {
                  setHover(ratingNumber);
                }}
                onMouseLeave={() => {
                  setHover(null);
                }}
                size={20}
                className = 'star'
                color={ratingNumber <= (hover || rating) ? "#194416" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
