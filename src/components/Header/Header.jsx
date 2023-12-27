import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as Cursor } from '../../svg/Header/HeaderCursorIcon.svg';
import { ReactComponent as MenuSearch } from '../../svg/Header/HeaderMenuSearchIcon.svg';
import { ReactComponent as Store } from '../../svg/Header/HeaderStoreIcon.svg';
import { ReactComponent as Cart } from '../../svg/Header/HeaderCartIcon.svg';
import Nav from '../Nav/Nav';
import IconButton from '../IconButton/IconButton';
import styled, { css } from 'styled-components';

const Header = () => {
  /** Scroll Y값을 저장하기 위한 state */
  const [scrollY, setScrollY] = useState(0);

  /** Nav자식컴포넌트에 부여해서 사용할 useState 입니다.*/
  const [navToggle, setNavToggle] = useState(false);

  /** 유저의 데이터를 가져오기 위한 State, header에서는 store에 대한 정보만 필요함. */
  const [userInfoStore, setUserInfoStore] = useState({
    store: null,
  });

  /** Login/Logout 여부를 저장하는 변수 입니다. */
  const isLogin = !!localStorage.getItem('accessToken');
  /** '가까운 매장보기' 를 pathName에 따라 삼항연산자를 걸 수 있도록 location 변수로 선언
   * 1. useLocation을 이용하여 현재 페이지의 pathName을 가져옵니다.
   * 2. pathName이 '/' 일 경우 '가까운 매장보기'를 표시합니다.
   * 3. pathName이 '/' 이외의 경우 '가까운 매장보기'를 표시하지 않습니다.
   */

  const location = useLocation();
  /** 페이지 이동을 위한 변수  */
  const navigate = useNavigate();

  /** 장바구니에 담긴 데이터를 useSelector를 이용하여 state에 담아줍니다. */
  const cartQuantity = useSelector(state => {
    return state.cart;
  });

  /** useSelector에서 꺼낸 데이터를 이용하여 장바구니에 담긴 아이템의 총 수량을 표시 하기 위한 변수입니다.
   * 1. cartQuantity의 데이터를 reduce를 이용하여 count를 더해줍니다.
   * 2. reduce의 초기값은 0입니다.
   * 3. cartQuantity의 데이터를 순회하면서 count를 더해줍니다.
   * 4. 더한 값을 acc에 담아줍니다.
   * 5. acc를 return 합니다.
   */
  const cartQuantityCount = cartQuantity.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  /**
   * useEffect를 이용하여 scroll에 대한 값을 scrollY 값이 변경될 때마다 업데이트 (의존성 배열에 scrollY를 넣어줌)
   * removeEventListener를 이용하여 메모리 누수 방지 (사용안하면 메모리 누수 발생 [계속 데이터가 쌓임])
   * setInterval을 이용하여 0.1초마다 scrollY값을 업데이트 (중복되는 이벤트를 막기 위해 0.1초마다 실행)
   * */
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  /** 로그인 시 localStorage에 저장해놓은 사용자 정보를 가져오기 위한 useEffect
   * 1. localStorage에 저장해놓은 사용자 정보를 가져옵니다. (localStorage.getItem)
   * 2. JSON.parse를 이용하여 JSON형태의 문자열을 객체로 변환합니다.
   * 3. 변환한 객체의 store값을 userInfoStore에 담아줍니다.
   */
  useEffect(() => {
    const localUserInfo = localStorage.getItem('userInfo');

    if (localUserInfo) {
      const userInformation = JSON.parse(localUserInfo);

      setUserInfoStore(userInfoStore => ({
        ...userInfoStore,
        store: userInformation.store,
      }));
    }
  }, []);

  /**
   * 스크롤 이벤트가 발생할 때마다 scrollY값을 업데이트
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  /**
   * Nav컴포넌트를 open close 하는 함수입니다.
   */
  const navShow = () => {
    setNavToggle(true);
  };

  return (
    <HeaderContainer>
      <HeaderInnerWrap>
        <HeaderLogo>
          <Link to="/">
            <h1>
              <img src="/goobne/images/logo.png" alt="로고 이미지" />
            </h1>
          </Link>
        </HeaderLogo>
        {location.pathname === '/' && (
          <AddressWrap>
            <>
              <Cursor />
              <Link to="">
                {isLogin ? userInfoStore.store : '가까운 매장 보기'}
              </Link>
            </>
          </AddressWrap>
        )}
        <MenuWrap>
          <ul>
            <li>
              <Link to="#">주문하기</Link>
              <SubMenuWrap>
                <li>
                  <Link to="/list">
                    <MenuSearch />
                    <span>메뉴보기</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Store />
                    <span>매장선택</span>
                  </Link>
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
            {!isLogin ? (
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/basejoin">Join</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      navigate('/');
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <Link to="/">My Page</Link>
                </li>
                <li>
                  <Link to="/cart">
                    <CartWrap>
                      <Cart />
                      <div>
                        <span>{cartQuantityCount}</span>
                      </div>
                    </CartWrap>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <IconButton content="list" onClick={navShow} />
          </div>
        </SignWrap>
      </HeaderInnerWrap>
      {<Nav navToggle={navToggle} setNavToggle={setNavToggle} />}
    </HeaderContainer>
  );
};

export default Header;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* Background-color를 scrollY 값이 200 이상일 경우 theme 색상을 적용하고, 미만일 경우에는 transparent 색상을 적용시킨다. */
const HeaderContainer = styled.header`
  display: flex;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  height: 110px;
  top: 0;
  z-index: 9;
  transition: all 0.3s ease-in-out;

  ${props => {
    if (scrollY >= 100) {
      return `
      background-color: ${props.theme.grayscaleB};
      `;
    } else {
      return `
      background-color : transparent;  
      `;
    }
  }};
`;

const HeaderInnerWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: 15px;
`;

const HeaderLogo = styled.div`
  display: flex;
  width: 150px;
  min-width: 150px;
  cursor: pointer;
`;

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
  height: 28px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 0 10px;

  & > a {
    white-space: nowrap;
    padding: 0 30px;
    font-size: 15px;
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
    margin-right: 65px;
    margin-top: 15px;
    padding-bottom: 15px;
    font-size: 19px;
    font-weight: bold;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }

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
    ${FlexCenter};

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

  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const SubMenuWrap = styled.ul`
  display: none;
  position: absolute;
  top: 30px;
  left: -90px;
  background-color: ${props => props.theme.grayscaleA};
  border: 1px solid ${props => props.theme.grayscaleH};
  border-radius: 8px;
  padding: 15px 15px;

  & > li {
    ${FlexCenter};
    padding: 0 5px;

    & > a {
      ${FlexCenter};

      & > span {
        font-size: 19px;
        padding: 0 10px;
      }
    }
  }
`;

const CartWrap = styled.div`
  ${FlexCenter};
  position: relative;

  & > div {
    ${FlexCenter};
    position: absolute;
    top: 10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.theme.primaryColor};
    z-index: 1;

    & > span {
      ${FlexCenter};
      font-size: 12px;
      font-weight: 200;
      font-family: 'NanumSquareRoundR', sans-serif;
      color: ${props => props.theme.grayscaleA};
    }
  }
`;
