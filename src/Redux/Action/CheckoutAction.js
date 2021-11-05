import { CheckoutType } from "../Type/CheckoutType";
import Axios from "axios";
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


export const PostToCheckoutAsync = (serviceId) => async() => {
  try {
    const userToken = localStorage.getItem("userToken");
    const { token } = JSON.parse(userToken);
   
    let res = await Axios.post(`https://${BaseURL}/checkout/${serviceId}`, { serviceId }, {
      headers: {
        'Authorization': `${token}`,
      }   
  });
  console.log(res)
  } 
  catch (err) {
    console.log(err);
  }
}
export const GetCheckoutItemsAsync = (userId) => async(dispatch) => {
  try {
    let res = await Axios.get(`https://${BaseURL}/checkout/${userId}`);

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
    let res = await Axios.delete( `https://${BaseURL}/checkout/${serviceId}`, { serviceId },
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