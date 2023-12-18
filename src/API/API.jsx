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

/**
 * 테스트용 api 입니다.
 * 1.인자로 status 값을 받습니다.
 * 2.status 인자값이 200 이라면  resolve 를 반환합니다.
 * 3.그외의 값은 reject 로 반환합니다. 예시 => 400 401 402
 * 4.테스트 하고자하는 파일에서 예를들어 testAxios(200)인자로 200을 넣으면
 *   200에관련된 실행은 확인할수있습니다. 200 이외값은 reject에 담겨 반홥됩니다.
 * ---------------------------------------------------------------------
 * 설명
 * Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다. // 성공에 대한 처리를 합니다.
 * resolve는 성공에 대한 값이고 reject 실패했을때에 대한 값을 반환합니다. // 에러에 대한 처리를 합니다.
 */
export const testAxios = status =>
  new Promise((resolve, reject) => {
    if (status === 200) {
      resolve({
        status,
      });
    } else {
      reject({
        status,
      });
    }
  });
