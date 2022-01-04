import { Link } from 'react-router-dom'
import './Stylesheets/Landing.css';
import Slider from './Slider';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar/NavBar';
import ReviewSection from './ReviewSection';

const Landing = () => {
    return(
        <> 
        <NavBar />
            <div className = 'landing'>
                <div id = 'left'>
                    <h1>Create your own space here.</h1>
                    <Link to = '/form'>
                         <p>Get started &gt;&gt;</p>
                    </Link>
                </div>
                <div id = 'right'>
                    <img src = "/Photos/landing-teal.jpg" alt = "home" />
                </div>
                <br/>
            </div>

            <div>
                    <ReviewSection />
                    <Slider />
            </div>
            <br/>

        <Footer />

        </>
    )
}

export default Landing;