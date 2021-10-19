import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
// import { FaStar } from "react-icons/fa";
import { VscDebugStackframeDot } from 'react-icons/vsc';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import './Stylesheets/Service.css';
import ReviewsList from "./Components/ReviewList";
import ReviewForm from "./Components/ReviewForm";


const ServiceDetails = () => {
    
    const dispatch = useDispatch();
    const { serviceId } = useParams();

    const { data: service} = useSelector((state) => state.service);

    // let sum = 0;
    // const reviewsRating =
    //   reviews?.length && reviews.reduce((acc, value) => acc + value.rating, sum);
    // const avgRating = Math.round(
    //   reviewsRating ? reviewsRating / reviews.length : 0
    // );

    useEffect(() => {
      dispatch(getServiceAsync(serviceId));
    }, [serviceId, dispatch]);

    return (
        <>
            <NavBar />
                <div className = 'product-body'>
                    <div className = 'product'>
                        <h3>{service.name}</h3>
                        <h4>{"\u20A6"}{service.price}</h4>
                        <p><VscDebugStackframeDot /> {service.description}</p>
                        <p><VscDebugStackframeDot /> {service.content1}</p>
                        <p><VscDebugStackframeDot /> {service.content2}</p>
                        <p><VscDebugStackframeDot /> {service.content3}</p>
                        <p><VscDebugStackframeDot /> {service.content4}</p>
                        <p><VscDebugStackframeDot /> {service.content5}</p>
                        {/* <div className = 'rating'>
                            {[...Array(5)].map((rate, i) => {
                            const ratingNumber = i + 1;
                            return (
                                <FaStar
                                key={`rate${i}`}
                                size={20}
                                className = 'star'
                                color={ratingNumber <= avgRating ? "#000" : "#e4e5e9"}
                                />
                            );
                            })}
                        </div> */}
                        <div className = 'button-body'>
                             <Link to = '/checkout'>
                                <button><h4>Proceed to Checkout</h4></button>
                            </Link>
                        </div>

                        
                    </div>

                    <div className = 'review-list'>
                        <ReviewsList />
                    </div>

                    <div className = 'review-content'>
                        <ReviewForm />
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default ServiceDetails;
