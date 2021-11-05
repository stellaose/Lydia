import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer';
import './Stylesheets/Checkout.css';
import CheckoutOrder from './CheckoutOrder';
import CheckoutPayment from './CheckoutPayment';

const Checkout = () => {
    return (
        <>
            <NavBar />
                <div className = 'checkout-body'>
                    <CheckoutOrder />
                    <CheckoutPayment />
                </div> 
           <Footer />
        </>
    )
}

export default Checkout;
