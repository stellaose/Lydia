import { useState } from "react";
import { createReviewAsync } from "../Redux/Action/ServiceAction";
import { useDispatch } from "react-redux";
import '../Stylesheets/Review.css';


const initForm = {
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

  return (
    <>
      <div className = 'createReview'>
        <header>Post a review</header>
        <form className = 'reviewForm' onSubmit={handleSubmit}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className = 'review-title'
            value={form.author}
            onChange={handleChange}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className = 'review-title'
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
          <button className = 'submitReview'>Add Review</button>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
