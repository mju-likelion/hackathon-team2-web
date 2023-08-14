import { Axios } from './Axios';

export const AxiosDetail = (id) => {
  Axios.get(`/stores/detail/${id}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
