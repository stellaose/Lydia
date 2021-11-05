import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { GetCheckoutItemsAsync, DeleteFromCheckoutAsync } from './Redux/Action/CheckoutAction';
import { GetCheckoutItemsAsync } from './Redux/Action/CheckoutAction';
import './Stylesheets/Checkout.css';
import { Spinner } from "react-bootstrap";

const CheckoutOrder = () => {
    const { _id } = useSelector((state) => state.userSignin);
    const dispatch = useDispatch();

    const { data, pending } = useSelector((state) => state.checkout);
    console.log(data)

    useEffect(() => {
        dispatch(GetCheckoutItemsAsync(_id));
    }, [_id, dispatch]);

    // const HandleDelete = (serviceId) => {

    //     useEffect(() => {
    //       dispatch(DeleteFromCheckoutAsync(serviceId));
    //     }, [serviceId]);
    //   }
    return (
        <>
           {pending && (
                <>
                    <div className = 'pending'>
                        <Spinner animation="grow" />
                        Loading
                    </div>
                </>
            )}

            {data && (
                <>
                    {data.map((item) => (
                        <div key={item.service._id}>
                            <div>
                                <h3>{item.service.name}</h3>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default CheckoutOrder;