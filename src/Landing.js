import { Link } from 'react-router-dom'
import './Stylesheets/Landing.css';
import Slider from './Components/Slider/Slider';

const Landing = () => {
    return(
        <>
            <div className = 'container'>
                <div id = 'left'>
                    <h1>Create your own space here.</h1>
                    <Link to = '/form'>
                         <p>Get started &gt;&gt;</p>
                    </Link>
                </div>
                <div id = 'right'>
                    <img src = "/Photos/landing-teal.jpg" alt = "home" />
                </div>
            </div>
            <div id = 'partners'>
                <Slider />
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Landing;