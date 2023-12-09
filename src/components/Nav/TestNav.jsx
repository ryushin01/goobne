import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { useEffect, useState } from 'react';
import { NavListAxios } from '../../API/API';
import { Link } from 'react-router-dom';

const TestNav = () => {
  const [navList, setNavList] = useState('');
  const [isToggle, setToggle] = useState(false);

  useEffect(() => {
    requestNavListDataGet();
  }, []);

  const toggle = () => {
    setToggle(!isToggle);
  };

  const requestNavListDataGet = async () => {
    const response = await NavListAxios.get() //eslint-disable-line no-unused-vars
      .then(result => {
        setNavList(result.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!navList) return null;

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

      <nav>
        <NavListContainerDiv>
          {navList?.map((data, index) => {
            const { label, depth, path } = data;
            return (
              <ParentsContainerUl key={index}>
                <ParentsListLi>
                  <Link to={path}>
                    <span onClick={toggle}>{label}</span>
                  </Link>

                  {depth && depth.length > 0 ? (
                    <span
                      onClick={toggle}
                      className={isToggle ? 'upArrow' : 'downArrow'}
                    ></span>
                  ) : null}
                </ParentsListLi>

                {isToggle && (
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
  );
};

export default TestNav;

const NavContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${props => props.theme.grayscaleB};
  background-color: ${props => props.theme.grayscaleB};
  padding: 20px;
  width: 450px;
  height: 100vh;
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
