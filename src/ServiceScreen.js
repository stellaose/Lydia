// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { VscDebugStackframeDot } from 'react-icons/vsc';
import { useParams } from 'react-router';
import ReviewsList from "./Components/ReviewList";
import ReviewForm from "./Components/ReviewForm";
import './Stylesheets/Service.css';

const ServiceScreen = ({ service, reviews}) => {
    const { name, description, price, content1, content2, content3, content4, content5 } = service
 
    // const dispatch = useDispatch();
    const { serviceId } = useParams();

    return (
        <>
            <div>
                <div className = 'product'>
                        <h3>{name}</h3>
                        <h4>{"\u20A6"}{price}</h4>
                        <p><VscDebugStackframeDot /> {description}</p>
                        <p><VscDebugStackframeDot /> {content1}</p>
                        <p><VscDebugStackframeDot /> {content2}</p>
                        <p><VscDebugStackframeDot /> {content3}</p>
                        <p><VscDebugStackframeDot /> {content4}</p>
                        <p><VscDebugStackframeDot /> {content5}</p>

                        <div className = 'button-body'>
                             <Link to = '/checkout'>
                                {/* <button onClick = {() => {PostToCart}}><h4>Proceed to Checkout</h4></button> */}
                                <button><h4>Proceed to Checkout</h4></button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <section className = 'reviewList'>
                            <h3>Reviews</h3>
                            <ReviewsList reviews = {reviews} />
                        </section>

                        <section >
                            <ReviewForm serviceId = {serviceId} />
                        </section>
                    </div>
            </div>
        </>
    )
}

export default ServiceScreen;