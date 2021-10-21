import ServiceList from "./ServiceList";
import './Stylesheets/Services.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';


const Service = () => {
    return (
        <>
        <NavBar />
            <div className = 'service-contain'>
                    <h3>The services we provide...</h3>
                    <ServiceList />
                </div><br/>
            <Footer />
        </>
    )
}

export default Service;
