import { Axios } from './Axios';

export const GetPin = async (MmValue, callBackFunction, errorFunction) => {
  try {
    const res = await Axios.get(`/stores`, {
      params: MmValue,
    });
    callBackFunction(res.data);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      errorFunction(true);
    }
  }
};
