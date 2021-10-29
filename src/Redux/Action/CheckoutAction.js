import { CheckoutTypes } from "../Type/CheckoutType";
import Axios from "axios";
import BaseURL from "../../Utils/BaseUrl";

const GetCheckoutItems = (data) => {
  return {
    type: CheckoutTypes.ADD_TO_CHECKOUT,
    data: data,
    pending: false
  };
}


const DeleteFromCheckout = () => {
  return {
    type: CheckoutTypes.REMOVE_FROM_CHECKOUT

  };
}


export const PostToCheckout = (serviceId) => async() => {
  try {
    const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
   
    console.log(token);
    let res = await Axios.post(`https://${BaseURL}/checkout/${serviceId}`, { serviceId }, {
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
    
    let res = await Axios.get(`https://${BaseURL}/checkout/${userId}`);
    dispatch(GetCheckoutItems(res.data))
    console.log(res.data , "checkout response")
  } catch (err) {
    console.log(err);
  }
}

export const DeleteFromCheckoutAsync = (serviceId) => async (dispatch) => {
  const userToken = localStorage.getItem("userToken");
    const objectToken = JSON.parse(userToken);
    const { token } = objectToken;
  try {
    let res = await Axios.delete(
      `https://${BaseURL}/checkout/${serviceId}`,
      { serviceId },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    dispatch(DeleteFromCheckout(res.data));
    console.log(res, "delete response")
  } catch (err) {
    console.log(err);
  }
}