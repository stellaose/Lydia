import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import './Stylesheets/Service.css';


const ServiceDetails = () => {
    
    const dispatch = useDispatch();
    const { serviceId } = useParams();

    const { data: service} = useSelector((state) => state.service);


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
                        <p>- {service.description}</p>
                        <p>- {service.content1}</p>
                        <p>- {service.content2}</p>
                        <p>- {service.content3}</p>
                        <p>- {service.content4}</p>
                        <p>- {service.content5}</p>
                        <Link to = '/checkout'>
                            <button><h4>Proceed to Checkout</h4></button>
                        </Link>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default ServiceDetails;
