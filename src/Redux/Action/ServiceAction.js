import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";

import { ServicesTypes, ServiceType } from "../Type";

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

export const getServiceAsync = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${BaseURL}/service/:serviceId`);
    console.log(res, "response");

    console.log( "base url");
    dispatch(getService(res.data));
  } catch (err) {
    console.log(err);
  }
};
