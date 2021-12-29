/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react';
import './Stylesheets/Checkout.css'
import { Spinner } from "react-bootstrap";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { GetCheckoutItemsAsync, DeleteCheckoutItemAsync } from './Redux/Action/CheckoutAction';

const CheckoutOrder = () => {
    const { _id } = useSelector((state) => state.userSignin);
    const dispatch = useDispatch();
    const { data, pending } = useSelector((state) => state.checkout);

    useEffect(() => {
        dispatch(GetCheckoutItemsAsync(_id));
    }, [dispatch, _id]);
   
    console.log(data, "cart order data");
    
    return (
      <div className>

        {data && (
          <>
            {data.map((item) => (
              <div  key={item.service._id}>
                

                <div >
                  <Link
                    to={`/service/${item.service._id}`}>
                    {" "}
                    <p> {item.service.name}</p>{" "}
                  </Link>
                </div>

              

                <div >
                  <h2 > {item.service.price}</h2>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
};

export default CheckoutOrder;
