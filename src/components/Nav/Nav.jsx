import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { useState } from 'react';

const Nav = () => {
  const [isStoryToggle, setIsStoryToggle] = useState(false);
  const [isBrandToggle, setIsBrandToggle] = useState(false);
  const [isNewProductToggle, setIsNewProductToggle] = useState(false);
  const [isMenuListToggle, setIsMenuListToggle] = useState(false);
  const [isGuideToggle, setIsGuideToggle] = useState(false);

  const storyToggle = () => {
    setIsStoryToggle(!isStoryToggle);
    setIsBrandToggle(false);
    setIsNewProductToggle(false);
    setIsMenuListToggle(false);
    setIsGuideToggle(false);
  };

  const BrandToggle = () => {
    setIsBrandToggle(!isBrandToggle);
    setIsStoryToggle(false);
    setIsNewProductToggle(false);
    setIsMenuListToggle(false);
    setIsGuideToggle(false);
  };

  const newProductToggle = () => {
    setIsNewProductToggle(!isNewProductToggle);
    setIsStoryToggle(false);
    setIsBrandToggle(false);
    setIsMenuListToggle(false);
    setIsGuideToggle(false);
  };

  const menuListToggle = () => {
    setIsMenuListToggle(!isMenuListToggle);
    setIsStoryToggle(false);
    setIsBrandToggle(false);
    setIsNewProductToggle(false);
    setIsGuideToggle(false);
  };

  const guideToggle = () => {
    setIsGuideToggle(!isGuideToggle);
    setIsStoryToggle(false);
    setIsBrandToggle(false);
    setIsNewProductToggle(false);
    setIsMenuListToggle(false);
  };

  return (
    <NavContainerDiv>
      <CloseBtnContainerDiv>
        <IconButton content="close" size="medium" />
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
          <li>
            <span
              onClick={storyToggle}
              className={isStoryToggle ? 'upArrow' : ''}
            >
              굽네스토리
            </span>
            {isStoryToggle ? (
              <NavListChildContainerUl>
                <li>브랜드스토리</li>
                <li>경영철학</li>
                <li>인재채용</li>
                <li>글로벌</li>
              </NavListChildContainerUl>
            ) : null}
          </li>

          <li>굽네 플레이타운</li>
          <li>바사삭 유니버스</li>

          <li>
            <span
              onClick={BrandToggle}
              className={isBrandToggle ? 'upArrow' : ''}
            >
              브랜드관
            </span>
            {isBrandToggle ? (
              <NavListChildContainerUl>
                <li>어나더사이드</li>
                <li>양철북 곱창</li>
              </NavListChildContainerUl>
            ) : null}
          </li>

          <li>e-쿠폰</li>

          <li>
            <span
              onClick={newProductToggle}
              className={isNewProductToggle ? 'upArrow' : ''}
            >
              신제품
            </span>
            {isNewProductToggle && (
              <NavListChildContainerUl>
                <li>싱글 피자&amp;파스타</li>
                <li>포토제닉 테이스트 피자</li>
                <li>최고의 고추.마늘 모았다!</li>
                <li>맵달떡볶이</li>
                <li>남해마늘 바사삭</li>
              </NavListChildContainerUl>
            )}
          </li>

          <li>
            <span
              onClick={menuListToggle}
              className={isMenuListToggle ? 'upArrow' : ''}
            >
              메뉴소개
            </span>
            {isMenuListToggle ? (
              <NavListChildContainerUl>
                <li>전체</li>
                <li>치킨</li>
                <li>피자</li>
                <li>사이드</li>
                <li>세트</li>
              </NavListChildContainerUl>
            ) : null}
          </li>

          <li>매장찾기</li>
          <li>이벤트</li>

          <li>
            <span
              onClick={guideToggle}
              className={isGuideToggle ? 'upArrow' : ''}
            >
              창업안내
            </span>
            {isGuideToggle ? (
              <NavListChildContainerUl>
                <li>프렌차이즈굽네</li>
                <li>창업프로세스 및 예상비용</li>
                <li>온라인 창업상담</li>
              </NavListChildContainerUl>
            ) : null}
          </li>

          <li>굽뉴스</li>
          <li>굽민의소리</li>
        </ul>
      </NavListContainerDiv>

      <NavCallNumBerContainerDl>
        <dt>주문전화</dt>
        <dd>031-112-119</dd>
      </NavCallNumBerContainerDl>
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
  height: 100vh;
  overflow: scroll;
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
    cursor: pointer;

    & > span {
      position: relative;
      padding-right: 25px;
    }
  }

  & > ul > li > span::after {
    display: block;
    content: '';
    position: absolute;
    top: 3px;
    right: 0px;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/NavDownArrow.svg');
    background-repeat: no-repeat;
  }
  & > ul > li > .upArrow::after {
    display: block;
    content: '';
    position: absolute;
    top: 3px;
    right: 0px;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/NavUpArrow.svg');
    background-repeat: no-repeat;
  }
`;

const NavListChildContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
  font-size: 20px;
  color: ${props => props.theme.grayscaleD};
`;

const NavCallNumBerContainerDl = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  font-size: 20px;
  font-weight: 900;
  padding: 0px 0px 50px 60px;
`;

export default Nav;
