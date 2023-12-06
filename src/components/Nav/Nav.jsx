import styled from 'styled-components';
const Nav = () => {
  return (
    <NavContainerDiv>
      <CloseBtnContainerDiv>
        <button>closeBtn자리</button>
      </CloseBtnContainerDiv>

      <LoginBtnContainerDiv>
        <button>Login</button>
        <span></span>
        <button>Join</button>
      </LoginBtnContainerDiv>

      <ImgBannerContainerDiv>
        <img src="../goobne/images/banner.png" alt="르세라핀배너" />
      </ImgBannerContainerDiv>
    </NavContainerDiv>
  );
};

const NavContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.grayscaleB};
  background-color: ${props => props.theme.grayscaleB};
  padding: 20px;
  width: 500px;
  height: 100vh;
`;
const CloseBtnContainerDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const LoginBtnContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;

  & > button {
    border: none;
    background-color: ${props => props.theme.grayscaleB};
    color: ${props => props.theme.grayscaleD};
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }
  & > span {
    width: 1px;
    height: 18px;
    background-color: ${props => props.theme.grayscaleC};
  }
`;
const ImgBannerContainerDiv = styled.div``;

export default Nav;
