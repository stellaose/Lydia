import { useState } from "react";
import StarRating from "./StarRating";
import { createReviewAsync } from "../Redux/Action/ServiceAction";
import { useDispatch } from "react-redux";
import '../Stylesheets/Review.css';


const initForm = {
  rating: 0,
  title: "",
  comment: "",
  author: "",
};

const ReviewForm = ({ serviceId }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      serviceId,
    };
    dispatch(createReviewAsync(data));
    setForm(initForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRate = (rate) => {
    setForm((prevForm) => ({
      ...prevForm,
      rating: rate,
    }));
  };

  return (
    <>
      <div className = 'createReview'>
        <header>Post a review</header>
        <form className = 'reviewForm' onSubmit={handleSubmit}>
          <label htmlFor="rating" className = 'label-review'>Rate this service</label>
          <StarRating handleRate={handleRate}/>

          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className = 'reviewTitle'
            value={form.author}
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className = 'reviewTitle'
            value={form.title}
            onChange={handleChange}
          />
          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            className = 'reviewComment'
          ></textarea>
          <button className = 'submitReview' onClick = { createReviewAsync}>Add Review</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
