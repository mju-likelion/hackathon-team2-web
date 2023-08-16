import { Axios } from './Axios';

export const GetPin = async (MmValue, callBackFunction, errorFunction) => {
  console.log(MmValue);
  try {
    const res = await Axios.get(`/stores`, {
      params: MmValue,
    });
    console.log(res);
    callBackFunction(res.data);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      errorFunction(true);
    }
  }
};
