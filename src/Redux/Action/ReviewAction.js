import axios from 'axios';
import BaseURL from '../../Utils/BaseUrl';

import { ReviewType } from '../Type';

const getReview = (data) => {
    return {
        type: ReviewType.SET_REVIEW,
        data: data,
    }
}

export const getReviewAsync = () => async (dispatch) => {
    try {
        let res = await axios.post(`${BaseURL}/service/61601fabd27cce8c333874df/review/6176f55680028d32602787d5`);
        
        console.log(res, 'response')
        dispatch(getReview(res.data.getOneReview));
      } catch (err) {
        console.log(err.message);
      }
}