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

      <NavListContainerDiv>
        <ul>
          <li>굽네 스토리</li>
          <li>굽네 플레이타운</li>
          <li>바사삭 유니버스</li>
          <li>브랜드관</li>
          <li>e-쿠폰</li>
          <li>신제품</li>
          <li>메뉴소개</li>
          <li>매장찾기</li>
          <li>이벤트</li>
          <li>창업안내</li>
          <li>굽뉴스</li>
          <li>굽민의소리</li>
        </ul>
      </NavListContainerDiv>
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
  width: 450px;
  height: 100%;
`;
const CloseBtnContainerDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 10px 0px;
`;

const LoginBtnContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 60px 0px;

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
const ImgBannerContainerDiv = styled.div`
  width: 450px;
`;

const NavListContainerDiv = styled.div`
  width: 100%;
  padding: 50px 0px 50px 60px;
  & > ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  & > ul > li {
    font-weight: 900;
    font-size: 27px;
  }
`;

export default Nav;
