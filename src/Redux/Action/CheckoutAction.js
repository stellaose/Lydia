import { CheckoutType } from "../Type/CheckoutType";
import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";

const GetCheckoutItem = (data) => {
  return {
    type: CheckoutType.ADD_TO_CHECKOUT,
    data: data,
    pending: false
  };
}

const DeleteFromCheckout = () => {
  return {
    type: CheckoutType.REMOVE_FROM_CHECKOUT
  };
}


export const PostToCheckoutAsync = (id) => async(dispatch) => {
  try {
    const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
   
    console.log(token);
    // let res = await axios.post(`https://${BaseURL}/checkout/${id}`, { id }, {
     let res = await axios.post(`http://localhost:4000/checkout/${id}`, { id }, {
      headers: {
        'Authorization': `${token}`,
      }   
  });
    console.log(res, "cart for post o")
  } catch (err) {
    console.log(err);
  }
}
export const GetCheckoutItemsAsync = (userId) => async(dispatch) => {
  try {
    // let res = await axios.get(`https://${BaseURL}/checkout/${userId}`);
    let res = await axios.post(`http://localhost:4000/checkout/${userId}`)

    dispatch(GetCheckoutItem(res.data))
  } 
  catch (err) {
    console.log(err);
  }
}

export const DeleteFromCheckoutAsync = (serviceId) => async (dispatch) => {
  const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
  try {
    let res = await axios.delete( `https://${BaseURL}/checkout/${serviceId}`, { serviceId },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch(DeleteFromCheckout(res.data));
  } 
  catch (err) {
    console.log(err);
  }
}