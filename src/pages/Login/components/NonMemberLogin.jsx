import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { cert_test, basic_test } from '../../../API/TEST_API'; //테스트 api 입니다.
// cert_test, basic_test 테스트 import 합니다.
// import { customAxios } from '../../../API/API';  통신 테스트를 마치면 활성화 합니다.
// import { API } from '../../../config'; // 통신 테스트를 마치면 활성화 합니다.
import styled from 'styled-components';

const NonMemberLogin = () => {
  /**
   * 1.비회원 로그인에 필요한 정보를 저장하는 useState를 정의합니다.
   * 2.여러개의 값을 저장하기위해 객체형태로 초기값을 정의했습니다.
   */
  const [nonMemberUserInfo, setNonMemberUserInfo] = useState({
    name: '',
    phoneNum: '',
    certificationNum: null,
  });

  /**테스트를 하기위해 서버로 보낸 내가입력한 핸드폰번호를 저장하는 useState를 정의합니다. 테스트를 하기위해 */
  const [severCertificationNum, setServerCertificationNum] = useState(null);

  /**이용 약관 동의 체크여부를 정의하는 useState 입니다.*/
  const [isAgreementCheck, setIsAgreementCheck] = useState(false);

  /**
   * useNavigate()를 navigate 변수에 담습니다.
   */
  const navigate = useNavigate();

  /**
   * 1.onChange 이벤트가 발생할때마다 실행되는 함수입니다.
   * 2.input onChange event를 인자로 받습니다.
   * 3.name , value 구조분해 할당을 합니다.
   * 4.setUserLoginInfo( userLoginInfo 값을 스프레드 오퍼레이터(연산자)로 복사하여)
   * 이벤트에 발생한 input name과 일치하는 키에 input에서 발생한 이벤트에 value 값을
   * setUserLoginInfo() 실행시켜 값을 변경해줍니다.
   */
  const saveNonMemberLoginInfo = event => {
    const { name, value } = event.target;
    setNonMemberUserInfo({ ...nonMemberUserInfo, [name]: value });
  };

  /**
   * 인증번호를 불러오는 get test axios입니다.
   * 1.인증번호를 불러오기 위한 필수값에 입력이 체크 및 입력이 되어있는지 확인합니다.
   * 2.확인이 되어있다면 API폴더 하위 index.js파일에 .cert_test Promise객체를 가진 test axios가 실행됩니다.
   * (구조는 API폴더 하위 index.js파일 확인)
   * 3.인자로 200 전달해주면 알림창이 실행됩니다.
   * 4.setServerCertificationNum(인증번호)를 useState에 담습니다. => 실제로는 useState 담을필요가없지만
   * 서버가 없기때문에 인증번호를 받아 임시로 저장해 체크하기위해 담아놓는것입니다.
   */
  const getCertNumber = () => {
    //Verification 입니다.
    const { name, phoneNum } = nonMemberUserInfo;
    if (!name) {
      alert('이름을 입력하세요.');
    } else if (!phoneNum) {
      alert('핸드폰 번호를 입력하세요.');
    } else if (!isAgreementCheck) {
      alert('필수 항목 체크하세요.');
    } else if (phoneNum.length <= 10 || phoneNum.length >= 12) {
      alert('핸드폰번호는 11자리 입니다.');
    } else {
      //테스트 api 입니다.
      cert_test(200)
        .then(data => {
          alert('인증번호를 발송했습니다.');
          setServerCertificationNum(data.number);
          //가상의 인증번호를 보기위해있는 console.log 입니다.
          console.log(data);
        })
        .catch(() => {
          alert('인증번호 발송에 실패하였습니다.');
        });
    }
  };

  /**
   * 1.테스트 axios를 사용중 입니다.
   * 2.인증번호를 확인합니다. 임의로 만든 인증번호와 시용자가 적은 인증번호가 일치하는지 확인합니다.(타입이 스트링이기때문에 넘버로 형변환을 해줍니다.)
   * 3.값이 같다면 200 다르다면 400 testAxios(인자) 인자로 넘겨줍니다. API폴더 API.jsx파일 구조확인!
   * 4.값에 따라 다음 코드를 실행합니다.
   * 5.서버가있다면 params값도 같이 넘겨줍니다.
   */
  const requestNonMemberLoginPost = async () => {
    if (nonMemberUserInfo.certificationNum.length < 5) {
      alert('인증번호는 5자리 또는 6자리입니다.');
    } else {
      // const params = nonMemberUserInfo;
      // const response = await customAxios //eslint-disable-line no-unused-vars
      //   .post(API.NONMEMBER_LOGIN_POST, params)

      basic_test(
        severCertificationNum === Number(nonMemberUserInfo.certificationNum)
          ? 200
          : 400,
      )
        .then(res => {
          localStorage.setItem('accessToken', res.token);
          navigate('/');
          window.location.reload();
        })
        //에러 케이스를 정의합니다.
        .catch(error => {
          if (error.status === 400) alert('인증번호가 틀렸습니다.');
        });
    }
  };

  /**
   * 1.비회원사용자정보는 제출하는 함수입니다.
   * 2.약관동의 체크는 필수값이기때문에 Verification 한번더 체크합니다.
   * 체크가 안되었다면 경고창을 띄어줍니다.
   * 3.체크가 되었다면 requestNonMemberLoginPost() 실행시켜줍니다.
   */
  const submitBtn = event => {
    event.preventDefault();
    /**
     * 백엔드가 서버가 없어서 도중에 핸드폰번호를 변경하면 실행을 막는것은 한계가 있었습니다.
     */
    if (!isAgreementCheck) {
      alert('필수 항목 체크하세요.');
    } else {
      requestNonMemberLoginPost();
    }
  };

  return (
    <>
      <NonLoginWrapForm onSubmit={submitBtn}>
        <fieldset>
          <legend>비회원로그인</legend>
          <Input
            placeholder="이름"
            type="text"
            label="이름"
            direction="column"
            name="name"
            onChange={saveNonMemberLoginInfo}
          />
          <PhoneAuthenticationDiv>
            <Input
              placeholder="- 없이 입력하세요."
              type="number"
              label="핸드폰 번호"
              direction="column"
              name="phoneNum"
              onChange={saveNonMemberLoginInfo}
              onWheel={e => e.target.blur()}
            />
            <BtnInner>
              <Button
                size="medium"
                content="인증번호발송"
                color="black"
                onClick={getCertNumber}
                type="button"
              />
            </BtnInner>
          </PhoneAuthenticationDiv>

          <Input
            placeholder="인증번호를 입력헤주세요."
            type="number"
            label="인증번호"
            direction="column"
            name="certificationNum"
            onChange={saveNonMemberLoginInfo}
            onWheel={e => e.target.blur()}
          />
        </fieldset>
      </NonLoginWrapForm>

      <AgreementWrapDiv>
        <CheckBox
          label="(필수) 이용약관에 모두 동의합니다."
          onChange={e => {
            setIsAgreementCheck(e.target.checked);
          }}
          checked={isAgreementCheck}
        />

        <ul>
          <AgreementItemLi>
            <AgreementContentSpan>개인정보 수집/이용</AgreementContentSpan>
            <AgreementContentButton type="button">
              내용보기{'>'}
            </AgreementContentButton>
          </AgreementItemLi>

          <AgreementItemLi>
            <AgreementContentSpan>위치기반 서비스 이용</AgreementContentSpan>
            <AgreementContentButton type="button">
              내용보기{'>'}
            </AgreementContentButton>
          </AgreementItemLi>
        </ul>
      </AgreementWrapDiv>

      <NonMemBerOrderContainer>
        <Button
          color="black"
          content="비회원 주문"
          size="large"
          type="button"
          onClick={submitBtn}
        />
      </NonMemBerOrderContainer>
    </>
  );
};

export default NonMemberLogin;

const NonLoginWrapForm = styled.form`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
  padding-bottom: 30px;
  margin-bottom: 10px;

  & > fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > fieldset > legend {
    font-size: 0;
  }
`;
const PhoneAuthenticationDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
`;
const BtnInner = styled.div`
  width: 200px;
`;

const AgreementWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
`;
const AgreementItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px 30px;
`;

const AgreementContentSpan = styled.span`
  font-size: 12px;
  color: ${props => props.theme.grayscaleE};
`;
const AgreementContentButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;
const NonMemBerOrderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
