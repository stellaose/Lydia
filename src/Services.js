import ServiceList from "./ServiceList";
import './Stylesheets/Service.css'

const Service = () => {
    return (
        <>
             <div className = 'service-contain'>
                <h3>The services we provide...</h3>
                <ServiceList />
            </div>
        </>
    )
}

export default Service;
