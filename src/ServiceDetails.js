import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import './Stylesheets/Service.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
import { useParams } from 'react-router';
import { Spinner } from 'react-bootstrap';
import ServiceScreen from "./ServiceScreen";

const ServiceDetails = () => {
    const dispatch = useDispatch();
    const { serviceId } = useParams();

    const { data: service,
        reviews,
        pending: isPending, } = useSelector((state) => state.service);
    
    useEffect(() => {
      dispatch(getServiceAsync(serviceId));
    }, [serviceId, dispatch]);


    return (
        <>
            <NavBar />
            <div className = 'product-body'>
            {isPending && (
                <>
                    <div className = 'pending'>
                        <Spinner animation="grow" />
                        Loading
                    </div>
                </>
            )}
                {service && (
                    <>
                        <ServiceScreen service = { service} serviceId = {serviceId}  reviews={reviews} />
                    </>
                )}
            </div>
           
            <Footer />
        </>
    )
}

export default ServiceDetails;
