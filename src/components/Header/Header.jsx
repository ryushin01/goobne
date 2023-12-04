import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Cursor } from '../../svg/Header/HeaderCursorIcon.svg';
import { ReactComponent as Menu } from '../../svg/Header/HeaderMenuIcon.svg';
import { ReactComponent as MenuSearch } from '../../svg/Header/HeaderMenuSearchIcon.svg';
import { ReactComponent as Store } from '../../svg/Header/HeaderStoreIcon.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInnerWrap>
        <HeaderLogo>
          <img src="../goobne/images/logo.png" alt="로고 이미지" />
        </HeaderLogo>
        <AddressWrap>
          <Cursor />
          <span>가까운 매장 보기</span>
        </AddressWrap>
        <MenuWrap>
          <ul>
            <li>
              <Link to="">주문하기</Link>
              <SubMenuWrap>
                <li>
                  <MenuSearch />
                  <span>메뉴보기</span>
                </li>
                <li>
                  <Store />
                  <span>매장선택</span>
                </li>
              </SubMenuWrap>
            </li>
            <li>
              <Link to="">메뉴소개</Link>
            </li>
            <li>
              <Link to="">매장찾기</Link>
            </li>
            <li>
              <Link to="">창업안내</Link>
            </li>
            <li>
              <Link to="">이벤트</Link>
            </li>
          </ul>
        </MenuWrap>
        <SignWrap>
          <div>
            <ul>
              <li>Login</li>
              <li>Join</li>
            </ul>
          </div>
          <div>
            <Menu />
          </div>
        </SignWrap>
      </HeaderInnerWrap>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  margin: 0 auto;
  position: sticky;
  width: 100%;
  height: 110px;
  top: 0;
  z-index: 99;
  background-color: #fbf5f0;
  padding: 30px 0;
`;

const HeaderInnerWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`;

const HeaderLogo = styled.div`
  display: flex;
  width: 105px;
`;

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;

  & > span {
    white-space: nowrap;
    padding: 0 20px;
    font-size: 19px;
    font-weight: bold;
  }
`;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: row;

  & > ul {
    display: flex;
  }

  & > ul > li {
    position: relative;
    padding: 0 30px;
    font-size: 22px;
    font-weight: bold;
    white-space: nowrap;
  }

  & > ul > li > a {
    &:hover {
      color: #ff0000;
    }
  }
`;

const SignWrap = styled.div`
  display: flex;

  & > div {
    display: flex;

    & > ul {
      display: flex;
      align-items: center;
      padding: 0 15px;

      & > li {
        font-family: 'Rubik';
        padding: 0 15px;
      }
    }
  }
`;

const SubMenuWrap = styled.ul`
  display: flex;
  position: absolute;
  top: 50px;
  left: -80px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;

    & > span {
      padding: 0 10px;
    }
  }
`;
