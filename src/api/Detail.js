import { Axios } from './Axios';

export const AxiosDetail = async (id, callBackFunction, handleError) => {
  try {
    const response = await Axios.get(`/stores/detail/121ㅇㄴdasdㅁㅇㅁㄴㅇ3`);
    await callBackFunction(response.data);
  } catch (error) {
    console.log(error);
    handleError(error);
  }
};
