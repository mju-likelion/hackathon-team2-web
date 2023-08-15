import { Axios } from './Axios';

export const AxiosDetail = async (id, callBackFunction) => {
  try {
    const response = await Axios.get(`/stores/detail/${id}`);
    console.log('response', response.data);
    callBackFunction(response.data);
  } catch (error) {
    console.log(error);
  }
};
