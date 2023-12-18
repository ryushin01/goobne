export default {
  /**
   * 가상의 인증번호를 만드는 테스트 axios입니다.
   * 1.Math.random() 랜덤한 숫자를 만들어줍니다. 예시값=>0.6493526741005418
   * 2.랜덤한 숫자는 소수점으로 나오기때문에 내가필요한 자릿수만큼 * 해줍니다. 저는 6자리가 필요하기때문에
   *  1000000을 곱하기해줍니다. 결과값은 =>649352.6741005418 나옵니다.
   * 3.Math.ceil()을 사용하여 소수점을 올림을 해줍니다.  Math.ceil(Math.random() * 1000000) 사용하면 결과값=> 649353 나옵니다.
   * 4.사용된 메서드를  number 변수에 담아줍니다.
   * 5.status인자값이 200 이라면 number,status 반환해줍니다.
   */
  cert_test: status => {
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
  },
};
