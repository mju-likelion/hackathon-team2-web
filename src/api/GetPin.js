import { Axios } from './Axios';

export const GetPin = async (MmValue, callBackFunction) => {
  console.log(MmValue);
  try {
    const res = await Axios.get(`/stores`, {
      params: MmValue,
    });
    callBackFunction(res.data);
  } catch (error) {
    console.log(error);
  }
};
