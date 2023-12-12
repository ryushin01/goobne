import axios from 'axios';

// Custom axios를 만들기 위해 함수 생성

/**
 * Data를 받아오기 위한 Custom Axios
 * 1. export로 다른 페이지에서 불러와 사용할 수 있도록 함.
 * 2. axios.create로 새로운 axios를 만들어 사용함.
 * 3. baseURL을 인자로 받아서 사용함.
 * 4. localStorage에 저장된 token을 header에 넣어서 사용함.
 */
export const createCustomAxios = baseURL => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
};

