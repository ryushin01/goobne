import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Cursor } from '../../svg/Header/HeaderCursorIcon.svg';
import { ReactComponent as Menu } from '../../svg/Header/HeaderMenuIcon.svg';
import { ReactComponent as MenuSearch } from '../../svg/Header/HeaderMenuSearchIcon.svg';
import { ReactComponent as Store } from '../../svg/Header/HeaderStoreIcon.svg';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInnerWrap>
        <HeaderLogo>
          <Link to="/goobne">
            <h1>
              <img src="../goobne/images/logo.png" alt="로고 이미지" />
            </h1>
          </Link>
        </HeaderLogo>
        <AddressWrap>
          <Cursor />
          <Link to="">가까운 매장 보기</Link>
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
              <li>
                <Link to="">Login</Link>
              </li>
              <li>
                <Link to="">Join</Link>
              </li>
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
  background-color: ${props => props.theme.grayscaleB};
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
  cursor: pointer;
`;

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 0 10px;

  & > a {
    white-space: nowrap;
    padding: 0 30px;
    font-size: 16px;
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
    padding: 35px 35px;
    font-size: 20px;
    font-weight: bold;
    white-space: nowrap;

    &:hover {
      & > ul {
        display: flex;
      }
    }
  }

  & > ul > li > a {
    &:hover {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

const SignWrap = styled.div`
  display: flex;

  & > div {
    display: flex;

    justify-content: center;
    align-items: center;

    & > ul {
      display: flex;
      align-items: center;
      padding: 0 15px;

      & > li {
        font-size: 14px;
        font-family: 'Rubik';
        padding: 0 15px;
        white-space: nowrap;
      }
    }
  }
`;

const SubMenuWrap = styled.ul`
  display: none;
  position: absolute;
  top: 90px;
  left: -60px;
  border: 1px solid ${props => props.theme.grayscaleH};
  border-radius: 8px;
  padding: 15px 15px;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    & > span {
      font-size: 19px;
      padding: 0 10px;
    }
  }
`;