import axios from 'axios';

// Custom axios를 만들기 위해 함수 생성

/**
 * BigBanner에 대한 Data를 받아오기 위한 Custom Axios
 * 1. export로 다른 페이지에서 불러와 사용할 수 있도록 함.
 * 2. axios.create로 새로운 axios를 만들어 사용함.
 * 3. baseURL은 서버의 주소를 의미한다. (json파일을 받아오기 때문에 상대경로로 설정)
 * 4. headers는 서버에 요청을 보낼 때 헤더에 토큰을 담아 보내기 위해 사용한다
 */
export const BigBannerAxios = axios.create({
  baseURL: '../goobne/data/BigBannerData.json',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});

export const NavListAxios = axios.create({
  baseURL: '../goobne/data/NavListData.json',
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});
