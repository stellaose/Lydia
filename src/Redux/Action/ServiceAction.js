import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";

import { ServicesTypes, ServiceType, ReviewsType } from "../Type";

const getServices = (data) => {
  return {
    type: ServicesTypes.SET_SERVICES,
    data: data,
    pending: true
  };
};
const getService = (data) => {
  return {
    type: ServiceType.SET_SERVICE,
    data: data,
    pending: true
  };
};

const createReview = (data) => {
  return {
    type: ReviewsType.SET_REVIEW,
    data: data,
  };
};


export const getServicesAsync = () => async (dispatch) => {
  try {
    let res = await axios.get(`${BaseURL}/service/list`);
    console.log(res, "response");
    dispatch(getServices(res.data.services));
  } 
  catch (err) {
    console.log(err);
  }
};

export const getServiceAsync = (serviceId) => async (dispatch) => {
  try {
    let res = await axios.get(`${BaseURL}/service/${serviceId}`);

    dispatch(getService(res.data.data));
  } catch (err) {
    console.log(err);
  }
};

export const createReviewAsync = (data) => async (dispatch) => {
  const { serviceId } = data;
  try {
    let res = await axios.post(`${BaseURL}/service/${serviceId}/review`);

    console.log(BaseURL, "base url");
    dispatch(createReview(res.data.data));
  } catch (err) {
    console.log(err.message);
  }
};

