import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import BasicInfo from './components/BasicInfo';
import AdditionalInfo from './components/AdditionalInfo';
import RecommenderInfo from './components/RecommenderInfo';
import AgreementInfo from './components/AgreementInfo';
import PostModal from './components/PostModal';
// import { customAxios } from '../../API/API'; 테스트를 마치면 활성화 합니다.
// import { API } from '../../../config'; 테스트를 마치면 활성화 합니다.
import { idDuplicateCheck_test } from '../../API/TEST_API'; //테스트용 api 입니다.
import { cert_test, basic_test } from '../../API/TEST_API';
import styled from 'styled-components';

const Join = () => {
  /** 회원가입에 필요한 정보를 저장하는 useState를 정의합니다. */
  const [userJoinInfo, setUserJoinInfo] = useState({
    name: '', //이름
    id: '', //아이디
    duplicateCheck: null, //중복 체크여부
    password: '', //비밀번호
    confirmPassword: '', //비밀번호확인
    email: '', //이메일
    emailAddress: null, //이메일주소
    emailReceptionCheck: false, //이메일이벤트 동의여부
    phoneNum: '', //핸드폰번호
    snsReceptionCheck: false, //sns이벤트 동의여부
    certificationNum: '', //인증번호
    certification: null, //인증번호확인여부
    address: '', //주소
    zipCode: '', //우편번호
    detailedAddress: '', //상세주소
    recommendedId: '', //추천인아이디
    recommendedIdCheck: null, //존재여부 체크
    gender: 'male', //성별
    year: '', //생년월일 , 년
    month: '', //생년월일 , 월
    day: '', //생년월일 , 일
    termsOfUseCheck: null, //이용약관 동의여부
    ageCheck: null, // 나이체크 여부
    eventSms: null, // 이벤트 sns수신 체크
    eventApp: null, //이벤트 app수신 체크
    eventEmail: null, //이벤트 email수신 체크
  });

  /** 주소검색 모달창을 토글하는 useState를 정의합니다. */
  const [isAddressFind, setIsAddressFind] = useState(false);

  /**테스트를 하기위해 서버로 보낸 내가입력한 아이디를 저장하는 useState를 정의합니다.*/
  const [testCheckId, setTestCheckID] = useState(null);
  /**테스트를 하기위해 서버로 보낸 내가입력한 핸드폰번호를 저장하는 useState를 정의합니다. */
  const [severCertificationNum, setServerCertificationNum] = useState(null);
  /**테스트를 하기위해 서버로 보낸 내가입력한 추천인아이디를 저장하는 useState를 정의합니다. */
  const [testRecommendedId, setTestRecommendedId] = useState(null);

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
  const saveUserJoinInfo = event => {
    const { name, value } = event.target;
    setUserJoinInfo({ ...userJoinInfo, [name]: value });
  };

  //특수문자 포함했는지 확인하는 정규식
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  //영어숫자가 같이 조합됫는지 확인하는정규식
  const alphanumericRegexA = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  //패스워드 영문 숫자 특수문자 포함 확인하는 정규식입니다.
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

  /**
   * 1.아이디 중복체크버튼을 클릭시 실행되는 함수입니다.
   * 2.테스트 api이기 때문에 인자로 input에 입력된 id값 ,200 을 인자로 줍니다.
   * 3.response에 담겨있는 checkId setTestCheckID(checkId) 담습니다. //최종 제출때 테스트를하기위함입니다.
   * 4.setUserJoinInfo(스프레드 오퍼레이트(연산자)를 복사하여 duplicateCheck에 response.status를 저장합니다. // 아이디 중복체크유무를 확인하기위해서입니다.
   * * 이 함수는 최종 정보 제출때 test useState 와 UserJoinInfo useState가 맞는지 확인하기위해 부모에서 관리합니다.
   * 백엔드서버가 구축되어있다면 자식컴포넌트로 이동하는 함수입니다.
   */
  const idDuplicateCheck = () => {
    // const params = userJoinInfo.id;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

    //Verification 아이디는 6글자 이상 , 영어+숫자조합 , 특수문자는 제외됩니다.
    if (userJoinInfo.id.length < 6) {
      alert('아이디를 6글자이상으로 입력하세요.');
    } else if (!alphanumericRegex.test(userJoinInfo.id)) {
      alert('영어 or 숫자만 가능합니다.');
    } else if (!alphanumericRegexA.test(userJoinInfo.id)) {
      alert('영어+숫자가 조합되어야 합니다.');
    } else {
      idDuplicateCheck_test(200, userJoinInfo.id)
        .then(response => {
          console.log(response);
          setUserJoinInfo({ ...userJoinInfo, duplicateCheck: response.status });
          setTestCheckID(response.checkId);
          alert('사용가능한 아이디 입니다.');
        })
        .catch(error => {
          if (error.status === 404) {
            alert('중복된 아이디입니다.');
          }
        });
    }
  };

  /**
   * 인증번호를 불러오는 get test axios입니다.
   * 1. API폴더 하위 index.js파일에 .cert_test Promise객체를 가진 test axios가 실행됩니다.
   * (구조는 API폴더 하위 index.js파일 확인)
   * 2.인자로 200 전달해주면 알림창이 실행됩니다.
   * 3.setServerCertificationNum(인증번호)를 useState에 담습니다. => 실제로는 useState 담을필요가없지만
   * 서버가 없기때문에 인증번호를 받아 임시로 저장해 체크하기위해 담아놓는것입니다.
   * * 이 함수는 최종 정보 제출때 test useState 와 UserJoinInfo useState가 맞는지 확인하기위해 부모에서 관리합니다.
   *  백엔드서버가 구축되어있다면 자식컴포넌트로 이동하는 함수입니다.
   */
  const getCertNumber = () => {
    const { phoneNum } = userJoinInfo;

    //Verification 핸드폰 번호는 10자리 또는 11자리 이어야합니다.
    if (phoneNum.length <= 9 || phoneNum.length >= 12) {
      alert('핸드폰번호는 숫자만 10자리 또는 11자리 입니다.');
    } else {
      // const params = userJoinInfo.phoneNum;
      // const response = await customAxios //eslint-disable-line no-unused-vars
      //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

      //테스트 api 입니다.
      cert_test(200, phoneNum)
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
   * 1.추천인 아이디를 입력하고 버튼을 클릭했을때 실행되는 함수입니다.
   * 2.200 존재한다고 가정합니다 // 아이디가 존재한다면 setTestRecommendedId(userJoinInfo.recommendedId) 담습니다. // 최종 제출때 테스트를하기위함입니다.
   * 3.객체값 userJoinInfo  키 recommendedIdCheck 추천인 아이디가 존재하는지 안하는지 값을 담습니다.
   * * 이 함수는 최종 정보 제출때 test useState 와 UserJoinInfo useState가 맞는지 확인하기위해 부모에서 관리합니다.
   *  백엔드서버가 구축되어있다면 자식컴포넌트로 이동하는 함수입니다.
   */
  const recommendedIdSubmit = () => {
    //Verification 추천인 아이디값이 없거나 특수문자가 포함되거나 영어+숫자로 포함된 아이디 인지 확인합니다.
    if (
      !userJoinInfo.recommendedId ||
      !alphanumericRegex.test(userJoinInfo.recommendedId) ||
      !alphanumericRegexA.test(userJoinInfo.recommendedId)
    ) {
      alert('추천인이 없습니다.');
      // 아이디 형식이 맞으면 있다고 가정합니다. 조회는 하지못하기때문에 백엔드서버부재
    } else {
      // const params = userJoinInfo.recommendedId;
      // const response = await customAxios //eslint-disable-line no-unused-vars
      // .post(JOIN_POST, params) //백엔드 서버 api입니다.

      basic_test(200)
        .then(res => {
          setTestRecommendedId(userJoinInfo.recommendedId);
          setUserJoinInfo({ ...userJoinInfo, recommendedIdCheck: res.status });
          alert('추천인아이디등록');
        })
        .catch(error => {
          if (error.status === 400) alert('존재하지않는 아이디입니다.');
        });
    }
  };

  /** 주소검색버튼을 클릭시 주소검색모달창을 토글하는 함수입니다. */
  const AddressFindToggle = () => {
    setIsAddressFind(!isAddressFind);
  };

  /**전 단계로 돌아가는 네비게이트는 담은 함수입니다. */
  const backPage = () => {
    navigate(-1);
  };

  /**최종 가입하기 버튼시 제출하기전 Verification에 통과하면 회원가입이 성공하는 함수입니다. */
  const joinInfoSubmit = event => {
    event.preventDefault();
    const {
      name,
      id,
      duplicateCheck,
      password,
      confirmPassword,
      email,
      emailAddress,
      phoneNum,
      certification,
      year,
      month,
      day,
      termsOfUseCheck,
      ageCheck,
      recommendedId,
      recommendedIdCheck,
    } = userJoinInfo;
    if (name.length < 1) {
      alert('이름에 값을 입력하세요.');
    } else if (testCheckId !== id) {
      alert('아이디 중복체크를 해주세요.');
    } else if (duplicateCheck !== 1) {
      alert('아이디 중복체크를 해주세요.');
    } else if (password !== confirmPassword) {
      alert('비밀번호가 다릅니다.');
    } else if (!passwordRegex.test(password, confirmPassword)) {
      alert('비밀번호는 영문/숫자/특수문자가 포함되어야합니다.');
    } else if (password.length <= 10) {
      alert('비밀번호는 11자리 이상이어야 합니다.');
    } else if (email.length < 1) {
      alert('이메일 아이디를 기입해주세요.');
    } else if (!emailAddress) {
      alert('이메일 주소를 선택 해주세요.');
    } else if (!phoneNum) {
      alert('핸드폰 번호를 입력해주세요.');
    } else if (certification !== 200) {
      alert('휴대폰 인증절차를 진행해주세요.');
    } else if (!year || !month || !day) {
      alert('생년월일을 선택해주세요.');
    } else if (!termsOfUseCheck || termsOfUseCheck === false) {
      alert('필수 이용약관을 체크하세요.');
    } else if (!ageCheck || ageCheck === false) {
      alert('본인 14세이상 체크란을  체크하세요.');
    } else if (
      recommendedId &&
      (recommendedId !== testRecommendedId || recommendedIdCheck !== 200)
    ) {
      alert('추천인 아이디 확인을 다시해주세요.');
    } else {
      navigate('/');
      alert('가입성공');
    }
  };

  return (
    <JoinContainerMain>
      <JoinContainerWrapSection>
        <JoinHeading>회원가입</JoinHeading>

        <FormContainerForm onSubmit={joinInfoSubmit}>
          <Legend>회원가입 유저정보</Legend>

          {/* 기본정보 컴포넌트 */}
          <BasicInfo
            saveUserJoinInfo={saveUserJoinInfo}
            idDuplicateCheck={idDuplicateCheck}
            userJoinInfo={userJoinInfo}
            getCertNumber={getCertNumber}
            setUserJoinInfo={setUserJoinInfo}
            AddressFindToggle={AddressFindToggle}
            severCertificationNum={severCertificationNum}
          />

          {/* 부가정보 컴포넌트*/}
          <AdditionalInfo
            userJoinInfo={userJoinInfo}
            setUserJoinInfo={setUserJoinInfo}
          />

          {/* 약관 동의 컴포넌트*/}
          <AgreementInfo
            userJoinInfo={userJoinInfo}
            setUserJoinInfo={setUserJoinInfo}
          />

          {/* 가입추천인 컴포넌트 */}
          <RecommenderInfo
            saveUserJoinInfo={saveUserJoinInfo}
            recommendedIdSubmit={recommendedIdSubmit}
          />

          {/* 제출 버튼 영역 */}
          <FormSelectBtnInner>
            <Button
              color="beige"
              content="이전단계"
              type="button"
              onClick={backPage}
            />
            <Button
              color="black"
              content="가입하기"
              type="submit"
              onClick={joinInfoSubmit}
            />
          </FormSelectBtnInner>
        </FormContainerForm>
      </JoinContainerWrapSection>

      {/* 주소를 찾는 컴포넌트 */}
      {isAddressFind && (
        <PostModal
          userJoinInfo={userJoinInfo}
          setUserJoinInfo={setUserJoinInfo}
          setIsAddressFind={setIsAddressFind}
        />
      )}
    </JoinContainerMain>
  );
};

export default Join;
/**전체 컨테이너 스타일 영역 */
const JoinContainerMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.grayscaleB};
`;

const JoinContainerWrapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 550px;
  margin: 0 auto;
`;
const JoinHeading = styled.h2`
  font-weight: 900;
  font-size: 35px;
`;

const FormContainerForm = styled.form`
  width: 100%;
`;
const Legend = styled.legend`
  font-size: 0;
`;

const FormSelectBtnInner = styled.div`
  display: flex;
  gap: 5px;
  width: 400px;
  margin: 50px auto;
`;
