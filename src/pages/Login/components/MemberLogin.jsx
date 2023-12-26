import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { basic_test } from '../../../API/TEST_API';
import { USER_INFO_DATA } from '../../../data/UserInfoData';
// basic_test << 테스트용 api import 합니다.
// import { customAxios } from '../../../API/API';
// import { API } from '../../../config'; 테스트를 마치면 활성화 합니다.
import styled from 'styled-components';

const MemberLogin = () => {
  /**
   * 1.유저의 로그인에 필요한 정보를 저장하는 useState를 정의합니다.
   * 2.여러개의 값을 저장하기위해 객체형태로 초기값을 정의했습니다.
   */
  const [userLoginInfo, setUserLoginInfo] = useState({
    id: '',
    password: '',
  });
  /** 상수데이터로 만든 userData를 userInfo State에 저장하고, 로그인 성공 시 해당 데이터를 localStorage에 담아줍니다. */
  const [userInfo, setUserInfo] = useState(USER_INFO_DATA);

  /**아이디 저장 유무를 상태를 저장하는 useState를 정의합니다.*/
  const [isRemember, setIsRemember] = useState(false);

  /**
   * 1.useCookies구성은?
   * cookies= 객체형태입니다. cookies={key ,value} 구성됩니다.
   * setCookie=cookies의 객체값에 접근해 변경하는 세터함수입니다. setCookie(key , 수정할 value) 형태로 필요합니다.
   * removeCookie내로컬 쿠키에 값을 지우는 세터함수입니다. removeCookie(key) 형태로 사용합니다.
   * 위 3가지로 useCookies 구성되어있습니다.
   * 2.내 쿠키에 cookies객체에 접근할 key 값은 rememberUserId 로 정의합니다.
   */
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);

  /**
   * useNavigate()를 navigate 변수에 담습니다.
   */
  const navigate = useNavigate();

  /**
   * 1.useEffect 실행됩니다.
   * 2.cookies 객체 rememberUserId키값으로 접근해 쿠키에 값이 있는지 없는지를 확인합니다.
   * 3.값이 있다면 setUserLoginInfo(스프레드 오퍼레이터(연산자)로 복사하여) id:cookies.rememberUserId 값을 저장합니다.
   * 4.setIsRemember() 실행해 isRemember값을 true 변경합니다.
   * 5.메인 페이지로 네비게이트 해줍니다.
   * 값이 없다면
   *.1.cookies 객체 rememberUserId키값으로 접근해 쿠키에 값이 undefined 종료입니다.
   */
  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserLoginInfo({ ...userLoginInfo, id: cookies.rememberUserId });
      setIsRemember(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 1.onChange 이벤트가 발생할때마다 실행되는 함수입니다.
   * 2.input onChange event를 인자로 받습니다.
   * 3.name , value 구조분해 할당을 합니다.
   * 4.setUserLoginInfo( userLoginInfo 값을 스프레드 오퍼레이터(연산자)로 복사하여)
   * 이벤트에 발생한 input name과 일치하는 키에 input에서 발생한 이벤트에 value 값을
   * setUserLoginInfo() 실행시켜 값을 변경해줍니다.
   */
  const saveUserLoginInfo = event => {
    const { name, value } = event.target;
    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  };

  //특수문자 포함했는지 확인하는 정규식
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  //영어숫자가 같이 조합됫는지 확인하는정규식
  const alphanumericRegexA = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  //패스워드 영문 숫자 특수문자 포함 확인하는 정규식입니다.
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

  /**
   * 1.params 변수에 userLoginInfo값을 정의합니다.
   * 2.response 변수 axios를 정의합니다.
   * 3.axios 메서드는 post방식을 사용하고 , API.LOGINPOST,params 인자로전달합니다. API.LOGINPOST 앤드포인트주소입니다.
   * 4.성공시 isRemember값이 true 라면(아이디 저장이 체크가되어있다면) 쿠키에 userLoginInfo.id 값을 저장합니다.(위에 정의된 state값)
   * 만약에 아이디 저장체크가 안되어있다면 removeCookie() 쿠키값을 삭제합니다.
   * 5.그외는 에러처리입니다.
   * Verification // 아이디는 영문/숫자조합 6글자 이상이고 비밀번호는 특수문자포함 10자리 이상으로 했습니다.
   */
  const requestLoginPost = async () => {
    if (
      !passwordRegex.test(userLoginInfo.password) ||
      userLoginInfo.password.length <= 10 ||
      userLoginInfo.id.length < 6 ||
      !alphanumericRegex.test(userLoginInfo.id) ||
      !alphanumericRegexA.test(userLoginInfo.id)
    ) {
      alert('아이디 또는 비밀번호가 틀립니다.');
    } else {
      // const params = userLoginInfo;
      // const response = await customAxios //eslint-disable-line no-unused-vars
      //   .post(API.LOGINPOST, params) //백엔드 서버 api입니다.

      basic_test(200) //테스트용 api입니다. 인자로 원하는 상태값을 넘겨주면됩니다.
        .then(res => {
          if (isRemember) {
            setCookie('rememberUserId', userLoginInfo.id);
          } else {
            removeCookie('rememberUserId');
          }
          localStorage.setItem('accessToken', res.token);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          navigate('/');
          window.location.reload();
        })
        //에러 케이스를 정의합니다.
        .catch(error => {
          if (error.status === 400) {
            alert('아이디 또는 비밀번호가 틀립니다.');
          } else if (error.status === 401) {
            alert('존재하지 않는 유저입니다.');
          } else if (error.status === 402) {
            alert('아이디를 입력하세요.');
          } else if (error.status === 403) {
            alert('비밀번호를 입력하세요.');
          }
        });
    }
  };

  /**
   * 1.로그인 버튼을 클릭시 submitBtn(event) 함수가 실행됩니다. 인자로는 버튼 이벤트를 받습니다.
   * 2.event.preventDefault(); 실행합니다. (submit실행시 기본 리랜더링을 막습니다.)
   * 3.requestLoginPost()함수를 실행합니다.
   */
  const submitBtn = event => {
    event.preventDefault();
    requestLoginPost();
  };

  return (
    <>
      <LoginWrapForm onSubmit={submitBtn}>
        <fieldset>
          <legend>회원로그인</legend>
          <Input
            placeholder="아이디를 입력하세요"
            type="text"
            label="아이디"
            direction="column"
            name="id"
            value={userLoginInfo.id}
            onChange={saveUserLoginInfo}
          />
          <Input
            placeholder="비밀번호 영문/특수문자/숫자8~16자"
            type="password"
            label="비밀번호"
            direction="column"
            name="password"
            onChange={saveUserLoginInfo}
          />

          <CheckBox
            label="아이디 저장"
            onChange={e => {
              setIsRemember(e.target.checked);
            }}
            checked={isRemember}
          />

          <LoginBtnContainerDiv>
            <Button
              content="로그인"
              color="black"
              size="medium"
              type="submit"
              onClick={submitBtn}
            />
          </LoginBtnContainerDiv>
        </fieldset>
      </LoginWrapForm>

      <FindContainerUl>
        <FindListItemLi>
          <Link to="/" className="findIdPw">
            아이디 찾기
          </Link>
        </FindListItemLi>

        <FindListItemLi>
          <Link to="/" className="findIdPw">
            비밀번호찾기
          </Link>
        </FindListItemLi>

        <FindListItemLi>
          <Link to="/">비회원 주문조회</Link>
        </FindListItemLi>
      </FindContainerUl>
    </>
  );
};

export default MemberLogin;

const LoginWrapForm = styled.form`
  width: 100%;
  & > fieldset {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & > fieldset > legend {
    font-size: 0;
  }
`;
const LoginBtnContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const FindContainerUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 30px 0px;
`;

const FindListItemLi = styled.li`
  & > a {
    font-size: 12px;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.grayscaleD};
  }
  & > .findIdPw {
    position: relative;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.grayscaleD};
    &::after {
      background: ${props => props.theme.grayscaleD};
      position: absolute;
      content: '';
      width: 1px;
      height: 8px;
      right: -17px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
