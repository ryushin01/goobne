import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from '../IconButton/IconButton';
import { customAxios } from '../../API/API';
import { API } from '../../config';
import styled from 'styled-components';

/**
 * Nav props list
 * @property {function} setNavToggle                             - useState 세터함수를 정의합니다.
 * @property {Hook} NavToggle                                    - useState 값을 정의합니다.
 */

const Nav = ({ navToggle, setNavToggle }) => {
  /** 로컬스토리지에 토큰값을 token 변수에 담습니다. */
  const token = localStorage.getItem('accessToken');

  /**
   * 1.useEffect 실행됩니다.
   * 2.useEffect 실행되면서 axios get 메서드가 실행되면 response받은 데이터를 담아놓을
   * useState를 정의합니다.
   */
  const [navListData, setNavListData] = useState('');

  /**
   * useNavigate()를 navigate 이름으로 변수로 지정합니다.
   */
  const navigate = useNavigate();

  /**
   * 화면을 랜더링 전 최초  requestNavListDataGet 실행 됩니다.
   */
  useEffect(() => {
    requestNavListDataGet();
  }, []);

  /**
   * NavList에서 클릭된 콘텐츠의 open 상태를 토글합니다.
   * 1. 클릭이 된 함수의 id,path 를 받아옵니다.
   * 2. NavList의 data를 받아와서 map을 이용하여 클릭된 콘텐츠의 id,path 와 클릭된 id,path 가 같은 것을 찾습니다.
   * 3. 아이디가 서로 같고 path가 있다면  navList를 스프레드 오퍼레이터(연산자)로 복사하여 open을 토글후 고유한 id에 지정 되어있는 path 값을
   *    네비게이트 해준후 setNavToggle 실행되면서 nav컴포넌트가 close 됩니다.
   * 4.path 없다면 open값을 true로 변경해줍니다. 클릭된id와 데이터에 저장된 id가 같은것만 open값을 true로 변경해줍니다.
   * 5.depth 안에있는 데이터가 화면에 보여질수있습니다.
   */
  const toggle = ({ id, path }) => {
    setNavListData(navListData =>
      navListData.map(data => {
        if (data.id === id) {
          if (path) {
            navigate(path);
            setNavToggle(false);
          }
          // 클릭된 콘텐츠의 'open' 상태를 토글합니다.
          return { ...data, open: !data.open };
        } else {
          // 다른 콘텐츠는 'open'을 false로 설정하여 닫습니다.
          return { ...data, open: false };
        }
      }),
    );
  };

  /**
   * 1.setNavToggle 세터함수는 Navcomponent를 토글하는 useState 세터함수입니다.
   * 2.부모에서 props로 받은 setNavToggle 사용하여 NavToggle 값을 false 변경하여 Navcomponent를 close하는 함수입니다.
   */
  const navClose = () => {
    setNavToggle(false);
  };

  /**
   * 1.setNavToggle 세터함수는 Navcomponent를 토글하는 useState 세터함수입니다.
   * 2.로그인 페이지로 navigate 해주는 함수입니다.
   */
  const goLoginPage = () => {
    navigate('/login');
    setNavToggle(false);
  };

  /**
   * 1.setNavToggle 세터함수는 Navcomponent를 토글하는 useState 세터함수입니다.
   * 2.회원가입 페이지로 navigate 해주는 함수입니다.
   */
  const goJoinPage = () => {
    navigate('/basejoin');
    setNavToggle(false);
  };

  /**
   * 1.axios로직을 담을 requestNavListDataGet  변수를 지정합니다.
   * 2.axios를 get메서드로 필요한 NavListData를 요청합니다.
   * 3.useState훅을 사용하여 NavListData에 데이터를 저장합니다.
   */
  const requestNavListDataGet = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.NAV)
      .then(response => {
        setNavListData(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * 1.로그아웃 버튼 클릭시 실행되는 함수입니다.
   * 2.로컬스토리지에 accessToken 값을 삭제합니다.
   * 3.네브컴포넌트를 토글합니다.
   * 4.메인페이지로 네비게이트를 해줍니다.
   */
  const logOut = () => {
    localStorage.removeItem('accessToken');
    setNavToggle(false);
    navigate('/');
  };

  /**
   * stopPropagation() 란? JavaScript의 Event 인터페이스에서 제공하는 내장 메소드입니다.
   * 그 목적은 캡처 및 버블링 단계 모두에서 현재 이벤트의 추가 전파를 중지하는 것입니다.
   * 1.onClick 이벤트를 인자로 받습니다.
   * 2 인자로 받은 event에 stopPropagation()메서드를 사용해 클릭이벤트가
   * 상위 DOM트리로 전달되는것을 막습니다.
   * 3.setNavToggle() 실행시켜 nav 컴포넌트를 close 해줍니다.
   */
  const closeNavOnBackgroundClick = event => {
    event.stopPropagation();
    setNavToggle(false);
  };

  /**
   * early return
   * useState에 navListData 데이터가 비어있다면 아래로직을 실행하지않고
   * return 종료 합니다. navListData 가있다면 아래로직을 랜더링합니다.
   */
  if (!navListData) return null;

  return (
    <NavContainerBgDiv
      className={navToggle ? 'showNav' : ''}
      onClick={closeNavOnBackgroundClick}
    >
      <NavContainerDiv
        className={navToggle ? 'showNavContent' : 'noShowNavContent'}
        // stopPropagation()메서드를 사용해
        // 상위 <NavContainerBgDiv>컴포넌트에 이벤트가 전달되는것을 막습니다.
        onClick={event => event.stopPropagation()}
      >
        <CloseBtnContainerDiv>
          <IconButton content="close" size="medium" onClick={navClose} />
        </CloseBtnContainerDiv>
        {token ? (
          <LogOutWrapDiv>
            <div>
              <span>회원님 반갑습니다.</span>
            </div>
            <LogOutBtnInnerDiv>
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </LogOutBtnInnerDiv>
          </LogOutWrapDiv>
        ) : (
          <LoginJoinBtnContainerDiv>
            <LoginBtnButton type="button" onClick={goLoginPage}>
              Login
            </LoginBtnButton>
            <JoinBtnButton type="button" onClick={goJoinPage}>
              Join
            </JoinBtnButton>
          </LoginJoinBtnContainerDiv>
        )}

        <ImgBannerContainerDiv>
          <img src="../goobne/images/banner.png" alt="르세라핀배너" />
        </ImgBannerContainerDiv>

        <nav>
          <ParentsAccordionContainerUl>
            {navListData?.map(({ id, label, depth, path, open }, index) => {
              return (
                <ParentsAccordionListLi key={index}>
                  <NavAccordionButton
                    type="button"
                    onClick={() => {
                      toggle({ id, path });
                    }}
                    className={path ? '' : open ? 'UpArrow' : 'DownArrow'}
                  >
                    {label}
                  </NavAccordionButton>

                  {/* open 값이 있다면 보여지는 UI입니다. */}
                  {open && (
                    <ChildAccordionContainerUl>
                      {depth?.map((data, index) => {
                        return (
                          <ChildAccordionListLi key={index}>
                            <Link onClick={navClose} to={data.path}>
                              {data.depthLabel}
                            </Link>
                          </ChildAccordionListLi>
                        );
                      })}
                    </ChildAccordionContainerUl>
                  )}
                </ParentsAccordionListLi>
              );
            })}
          </ParentsAccordionContainerUl>
        </nav>

        <NavCallNumBerContainerDl>
          <dt>주문전화</dt>
          <dd>031-112-119</dd>
        </NavCallNumBerContainerDl>
      </NavContainerDiv>
    </NavContainerBgDiv>
  );
};

export default Nav;

const NavContainerBgDiv = styled.div`
  &.showNav {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: flex;
    z-index: 1;
  }
`;

const NavContainerDiv = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.grayscaleB};
  background-color: ${props => props.theme.grayscaleB};
  height: 100vh;
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.2s ease-in-out;

  & > nav {
    width: 100%;
  }

  &.noShowNavContent {
    width: 0px;
  }

  &.showNavContent {
    padding: 20px;
    width: 500px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grayscaleG};
    border-radius: 12px;
  }
`;

const CloseBtnContainerDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  padding: 10px 0px;
`;

const LoginJoinBtnContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding: 60px 0px;
`;
const LoginBtnButton = styled.button`
  position: relative;
  border: none;
  background-color: ${props => props.theme.grayscaleB};
  color: ${props => props.theme.grayscaleD};
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 20px;

  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 15px;
    background-color: ${props => props.theme.grayscaleC};
    top: 50%;
    right: -26px;
    transform: translate(-50%, -50%);
  }
`;

const JoinBtnButton = styled.button`
  border: none;
  background-color: ${props => props.theme.grayscaleB};
  color: ${props => props.theme.grayscaleD};
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 20px;
`;

const ImgBannerContainerDiv = styled.div`
  width: 500px;
`;

const ParentsAccordionContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 50px 0px 50px 60px;
`;

const ParentsAccordionListLi = styled.li`
  cursor: pointer;
`;

const NavAccordionButton = styled.button`
  border: none;
  font-size: 27px;
  font-weight: 900;
  background-color: transparent;
  cursor: pointer;
  padding-right: 25px;
  margin-bottom: 10px;
  position: relative;

  &.DownArrow::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/Nav/NavDownArrow.svg');
    background-repeat: no-repeat;
  }
  &.UpArrow::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/Nav/NavUpArrow.svg');
    background-repeat: no-repeat;
  }
`;

const ChildAccordionContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
`;

const ChildAccordionListLi = styled.li`
  & > a {
    font-size: 20px;
    color: ${props => props.theme.grayscaleD};
  }
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

// 로그인했을때 스타일 컴포넌트
const LogOutWrapDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 3px solid ${props => props.theme.primaryColor};
  margin: 30px 0px;
  & > div > span {
    font-size: 20px;
    font-weight: 900;
  }
`;
const LogOutBtnInnerDiv = styled.div`
  & > button {
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.grayscaleA};
    border: none;
    border-radius: 20px;
    padding: 10px 30px;
    font-size: 20px;
    cursor: pointer;
  }
`;
