import axios from "axios";
import BaseUrl from "../../Utils/BaseUrl";

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
    let res = await axios.get(`${BaseUrl}/service/list`);

    console.log(res, "response");

    
    dispatch(getServices(res.data.services));
  } catch (err) {
    console.log(err);
  }
};

export const getServiceAsync = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${BaseUrl}/service/${id}`);
    console.log(res, "response");

    console.log(BaseUrl, "base url");
    dispatch(getService(res.data.data));
  } catch (err) {
    console.log(err);
  }
};
