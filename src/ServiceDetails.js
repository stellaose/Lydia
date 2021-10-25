import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer";
import './Stylesheets/Service.css';
import ServiceScreen from "./ServiceScreen";

const ServiceDetails = () => {
    

    return (
        <>
            <NavBar />
                <div className = 'product-body'>
                    <ServiceScreen/>
                </div>
            <Footer />
        </>
    )
}

export default ServiceDetails;
