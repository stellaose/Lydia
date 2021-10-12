import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import './Stylesheets/Service.css';


const ServiceDetails = () => {
    
    const dispatch = useDispatch();
    const { serviceId } = useParams();

    const { data } = useSelector((state) => state.service);

    console.log('This is the requested data', data)

    useEffect(() => {
      dispatch(getServiceAsync(serviceId));
    }, [serviceId, dispatch]);

    return (
        <>
            <NavBar />
                <div>
                    <div className = 'product'>
                        {/* <h1> {data.name} </h1> */}
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default ServiceDetails;
