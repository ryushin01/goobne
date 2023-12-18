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
export const basic_test = status =>
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

/**
 * 가상의 인증번호를 만드는 테스트 axios입니다.
 * 1.Math.random() 랜덤한 숫자를 만들어줍니다. 예시값=>0.6493526741005418
 * 2.랜덤한 숫자는 소수점으로 나오기때문에 내가필요한 자릿수만큼 * 해줍니다. 저는 6자리가 필요하기때문에
 *  1000000을 곱하기해줍니다. 결과값은 =>649352.6741005418 나옵니다.
 * 3.Math.ceil()을 사용하여 소수점을 올림을 해줍니다.  Math.ceil(Math.random() * 1000000) 사용하면 결과값=> 649353 나옵니다.
 * 4.사용된 메서드를  number 변수에 담아줍니다.
 * 5.status인자값이 200 이라면 number,status 반환해줍니다.
 */
export const cert_test = status => {
  const number = Math.ceil(Math.random() * 1000000);
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve({
        status: 200,
        number,
      });
    } else {
      reject({
        status: 500,
      });
    }
  });
};

export const idDuplicateCheck_test = (status, id) => {
  const checkId = id;
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve({
        status: 1,
        checkId,
      });
    } else {
      reject({
        status: 500,
      });
    }
  });
};
