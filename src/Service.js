import BaseUrl from "./Utils/BaseUrl";
import UseAxios from './Hooks/UseAxios1';
import { Link } from "react-router-dom";

const Service = () => {
    const { data: services } = UseAxios(`${BaseUrl}/service/query`, {
        params: { featured: true },
      });
    return (
        <>
            <div className = 'body'>
                {services?.map((service) => {
                    return (
                        <div className = 'contain' key = {service._id}>
                           <Link to = {`/service/${service._id}`}>
                                <div className = 'image'>
                                    <img src = {service.image} alt = ""/>
                                </div>

                                <div className = 'details'>
                                    <p className = 'name'>{service.name}</p>
                                    <p className = 'cost'>
                                        {"\u20A6"}
                                        {service.price}
                                    </p>
                                    <p className = 'describe'>
                                        {service.description}
                                    </p>
                                    <div>
                                    <p className = 'describe'>
                                        {service.content1}
                                    </p>
                                    <p className = 'describe'>
                                        {service.content2}
                                    </p>
                                    <p className = 'describe'>
                                        {service.content3}
                                    </p>
                                    <p className = 'describe'>
                                        {service.content4}
                                    </p>
                                    <p className = 'describe'>
                                        {service.content5}
                                    </p>
                                    </div>
                                </div>
                           </Link>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Service;