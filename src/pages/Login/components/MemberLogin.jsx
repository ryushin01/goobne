import styled from 'styled-components';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { Link } from 'react-router-dom';

const MemberLogin = () => {
  return (
    <>
      <LoginWrapForm>
        <fieldset>
          <legend>회원로그인</legend>
          <Input
            placeholder="아이디를 입력하세요"
            type="text"
            label="아이디"
            position="column"
            name="id"
          />
          <Input
            placeholder="비밀번호 영문/특수문자/숫자8~16자"
            type="password"
            label="비밀번호"
            position="column"
            name="password"
          />

          <CheckBox label="아이디 저장" />

          <LoginBtnContainerDiv>
            <Button
              content="로그인"
              color="black"
              size="medium"
              type="submit"
            />
            <Button content="휴대폰으로 로그인" size="medium" type="button" />
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
