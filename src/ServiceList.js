import { useEffect } from "react";
import { getServicesAsync } from "./Redux/Action/ServiceAction";
import { useSelector, useDispatch } from "react-redux";
import { VscDebugStackframeDot } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import './Stylesheets/Services.css';

const ServiceList = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServicesAsync());

      }, [dispatch]);

    return (
        <>
            <div className = 'body'>
               {data?.map((service) => {
                   return (
                        <div key = {service._id} className = 'service-key'>
                            <Link to = {`/service/${service._id}`}> 
                                <div className = 'service-body'>
                                    <h4>{service.name}</h4>
                                    <h5 className = 'bold-color'>{"\u20A6"}{service.price}</h5>
                                    <p><VscDebugStackframeDot /> {service.description}</p> 
                                    <p><VscDebugStackframeDot /> {service.content1}</p> 
                                    <p><VscDebugStackframeDot /> {service.content2}...</p> 
                                </div>
                            </Link>
                        </div>
                   );
               })}
            </div>
        </>
    )
}

export default ServiceList;