import { Axios } from './Axios';

export const AxiosDetail = async (id, callBackFunction, handleError) => {
  try {
    const response = await Axios.get(`/stores/detail/${id}`);
    console.log(response);
    await callBackFunction(response.data);
  } catch (error) {
    handleError(error);
  }
};
