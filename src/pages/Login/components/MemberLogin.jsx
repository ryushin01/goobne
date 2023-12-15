import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import styled from 'styled-components';
import { createCustomAxios } from '../../../API/API';
import { API } from '../../../config';

const MemberLogin = () => {
  /**
   * 1.유저의 로그인에 필요한 정보를 저장하는 useState를 정의합니다.
   * 2.여러개의 값을 저장하기위해 객체형태로 초기값을 정의했습니다.
   */
  const [userLoginInfo, setUserLoginInfo] = useState({
    id: '',
    password: '',
  });
  //userLoginInfo 값을 확인하는 콘솔입니다.
  console.log(userLoginInfo);

  /**아이디 저장 유무를 정하는 useState를 정의합니다.*/
  const [isRemember, setIsRemember] = useState(false);
  //아이디저장 체크박스에 체크를 했나 안했나 확인하는 콘솔입니다.
  console.log(isRemember);

  // #Cookies 이름
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserLoginInfo({ ...userLoginInfo, id: cookies.rememberUserId });
      setIsRemember(true);
    }
  }, []);

  const LoginAxios = createCustomAxios(API.LOGINPOST);

  const requestNavListDataGet = async userLoginInfo => {
    console.log(userLoginInfo);
    const params = userLoginInfo;
    const response = await LoginAxios.post(params) //eslint-disable-line no-unused-vars

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const btnSubmit = event => {
    event.preventDefault();
    requestNavListDataGet(userLoginInfo);
  };
  // if (isRemember) {
  //   setCookie('rememberUserId', userLoginInfo.id);
  // } else {
  //   removeCookie('rememberUserId');
  // }

  /**
   * 1.Input에 onChange 이벤트를 인자로 받습니다.
   * 2.
   */
  const saveUserLoginInfo = event => {
    const { name, value } = event.target;

    setUserLoginInfo({ ...userLoginInfo, [name]: value });
  };

  return (
    <>
      <LoginWrapForm onSubmit={btnSubmit}>
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
              onClick={btnSubmit}
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
