import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { getServiceAsync } from "./Redux/Action/ServiceAction";
import './Stylesheets/Service.css';

const ServiceDetails = () => {

    const dispatch = useDispatch();
    const { serviceId } = useParams();
    
    const { data } = useSelector((state) => state.service.find(service => serviceId));
    console.log(data);
   
    useEffect(() => {
      dispatch(getServiceAsync(serviceId));
    }, [serviceId, dispatch]);
  
    return (
        <div>
            <div>
                <h1>gggggggg</h1>
            </div>
        </div>
    )
}

export default ServiceDetails;
