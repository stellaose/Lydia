import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
import { Link } from "react-router-dom";
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router';
import ReviewsList from "./Components/ReviewList";
import ReviewForm from "./Components/ReviewForm";
import './Stylesheets/Service.css';

const ServiceScreen = () => {

    const dispatch = useDispatch();
    const { serviceId } = useParams();

    const { data: service,
        reviews} = useSelector((state) => state.service);
    
    useEffect(() => {
      dispatch(getServiceAsync(serviceId));
    }, [serviceId, dispatch]);

    let sum = 0;
    const reviewsRating =
        reviews?.length && reviews.reduce((acc, value) => acc + value.rating, sum);

    const avgRating = Math.round(
        reviewsRating ? reviewsRating / reviews.length : 0
    );

    return (
        <>
            <div>
                <div className = 'product'>
                        <h3>{service.name}</h3>
                        <h4>{"\u20A6"}{service.price}</h4>
                        <p><VscDebugStackframeDot /> {service.description}</p>
                        <p><VscDebugStackframeDot /> {service.content1}</p>
                        <p><VscDebugStackframeDot /> {service.content2}</p>
                        <p><VscDebugStackframeDot /> {service.content3}</p>
                        <p><VscDebugStackframeDot /> {service.content4}</p>
                        <p><VscDebugStackframeDot /> {service.content5}</p>

                        <div className = 'rating'>
                            {[...Array(5)].map((rate, i) => {
                            const ratingNumber = i + 1;
                            return (
                                <FaStar
                                key={`rate${i}`}
                                size={20}
                                className = 'star'
                                color={ratingNumber <= avgRating ? "#194416" : "#e4e5e9"}
                                />
                            );
                            })}
                        </div>
                        <div className = 'button-body'>
                             <Link to = '/checkout'>
                                <button><h4>Proceed to Checkout</h4></button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <section className = 'serviceReviews'>
                            <ReviewsList reviews = {reviews} />
                        </section>

                        <section className = 'reviewFormContainer'>
                            <ReviewForm serviceId = {serviceId} />
                        </section>
                    </div>
            </div>
        </>
    )
}

export default ServiceScreen;