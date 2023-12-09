import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavListAxios } from '../../API/API';
import IconButton from '../IconButton/IconButton';
import styled from 'styled-components';

/**
 * Nav props list
 * @property {function} setNavToggle                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 */

const Nav = ({ setNavToggle }) => {
  /**
   * 1.useEffect 실행됩니다.
   * 2.useEffect 실행되면서 axios get 방식이 실행되면 response받은 데이터를 담아놓을
   * navListData useState입니다.
   */

  const [navListData, setNavListData] = useState('');

  /**
   * useNavigate()를 navigate 이름으로 변수로 지정합니다.
   */
  const navigate = useNavigate();

  /**
   * 화면을 랜더링 하기전  requestNavListDataGet 실행 시킵니다.
   */

  useEffect(() => {
    requestNavListDataGet();
  }, []);

  /**
   * NavList에서 클릭된 콘텐츠의 open 상태를 토글합니다.
   * 1. 클릭이 된 함수의 id를 받아옵니다.
   * 2. NavList의 data를 받아와서 map을 이용하여 클릭된 콘텐츠의 id와 클릭된 id가 같은 것을 찾습니다.
   * 3. 아이디가 서로 같으면 navList를 스프레드 오퍼레이트로 복사하여 open을 토글시켜줍니다.
   * 4. 아이디가 서로 다르면 navList를 스프레드 오퍼레이트로 복사하여 open을 false로 설정하여 닫아줍니다.
   */

  const toggle = id => {
    setNavListData(navListData =>
      navListData.map(data => {
        if (data.id === id) {
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
  부모에서 props로 받은 setNavToggle 사용하여 NavToggle 블리언 값을 변경하는 함수입니다.
   */

  const navClose = () => {
    setNavToggle(false);
  };

  /**로그인 페이지로 navigate 해주는 함수입니다. */

  const goLoginPage = () => {
    navigate('/login');
  };

  /**회원가입 페이지로 navigate 해주는 함수입니다. */

  const goJoinPage = () => {
    navigate('/Join');
  };

  /**
   * 1.axios로직을 담을 requestNavListDataGet  변수를 지정합니다.
   * 2.axios를 get메서드로 필요한 NavListData를 요청합니다.
   * 3.useState훅을 사용하여 NavListData에 데이터를 저장합니다.
   */

  const requestNavListDataGet = async () => {
    const response = await NavListAxios.get() //eslint-disable-line no-unused-vars
      .then(result => {
        setNavListData(result.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**
   * 얼리 리턴
   * useState에 navListData 데이터가 비어있다면 아래로직을 실행하지않고
   * return 종료 합니다. navListData 가있다면 아래로직을 랜더링합니다.
   */

  if (!navListData) return null;

  return (
    <NavContainerBgDiv>
      <NavContainerDiv>
        <CloseBtnContainerDiv>
          <IconButton content="close" size="medium" onClick={navClose} />
        </CloseBtnContainerDiv>

        <LoginBtnContainerDiv>
          <button type="button" onClick={goLoginPage}>
            Login
          </button>
          <span></span>
          <button type="button" onClick={goJoinPage}>
            Join
          </button>
        </LoginBtnContainerDiv>

        <ImgBannerContainerDiv>
          <img src="../goobne/images/banner.png" alt="르세라핀배너" />
        </ImgBannerContainerDiv>

        <nav>
          <NavListContainerDiv>
            {navListData?.map(({ id, label, depth, path, open }, index) => {
              return (
                <ParentsContainerUl key={index}>
                  <ParentsListLi>
                    <Link to={path}>
                      <span onClick={() => toggle(id)}>{label}</span>
                    </Link>

                    {depth && depth.length > 0 ? (
                      <span
                        onClick={toggle}
                        className={open ? 'upArrow' : 'downArrow'}
                      ></span>
                    ) : null}
                  </ParentsListLi>

                  {open && (
                    <ChildContainerUl>
                      {depth?.map((data, index) => {
                        return (
                          <ChildListLi key={index}>
                            <Link key={index} to={data.path}>
                              <span> {data.depthLabel}</span>
                            </Link>
                          </ChildListLi>
                        );
                      })}
                    </ChildContainerUl>
                  )}
                </ParentsContainerUl>
              );
            })}
          </NavListContainerDiv>
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
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  z-index: 1;
`;

const NavContainerDiv = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.grayscaleB};
  background-color: ${props => props.theme.grayscaleB};
  padding: 20px;
  width: 450px;
  height: 100vh;
  z-index: 100;
  overflow-y: scroll;
  overflow-x: hidden;

  & > nav {
    width: 100%;
  }
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

const ParentsContainerUl = styled.ul`
  display: inline-block;
  font-weight: 900;
  font-size: 27px;
`;

const ParentsListLi = styled.li`
  display: inline-block;
  cursor: pointer;
  position: relative;

  & > a > span {
    padding-right: 25px;
  }

  & > .downArrow {
    display: block;
    position: absolute;
    top: 1px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/NavDownArrow.svg');
    background-repeat: no-repeat;
  }

  & > .upArrow {
    display: block;
    position: absolute;
    top: 1px;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('/goobne/src/svg/NavUpArrow.svg');
    background-repeat: no-repeat;
  }
`;

const ChildContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  margin-top: 20px;
`;

const ChildListLi = styled.li`
  & > a > span {
    color: ${props => props.theme.grayscaleD};
  }
`;

const NavListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 50px 0px 50px 60px;
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
