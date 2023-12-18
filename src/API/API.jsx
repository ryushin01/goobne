import axios from 'axios';

// Custom axios를 만들기 위해 함수 생성
const BASE_URL = '../goobne/data/';

/**
 * Data를 받아오기 위한 Custom Axios
 * 1. export로 다른 페이지에서 불러와 사용할 수 있도록 함.
 * 2. axios.create로 새로운 axios를 만들어 사용함.
 * 3. baseURL을 미리 입력해두고, 사용하는 곳에서 Endpoint만 입력하여 사용함.
 * 4. localStorage에 저장된 token을 header에 넣어서 사용함. (추후 쿠키 사용 시 쿠키로 변경)
 */

export const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    // access_token: cookies.get('access_token'),
    Authorization: localStorage.getItem('accessToken'),
  },
});
