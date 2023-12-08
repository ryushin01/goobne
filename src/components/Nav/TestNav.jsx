import styled from 'styled-components';
import { NAV_LIST_DATA } from '../../data/navlist';
import IconButton from '../IconButton/IconButton';
import { useEffect, useState } from 'react';

const TestNav = () => {
  const [navList, setNavList] = useState(NAV_LIST_DATA);
  const [isToggle, setToggle] = useState(false);
  const toggle = () => {
    setToggle(!isToggle);
  };
  useEffect(() => {});

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
          {navList.map(data => {
            const { id, label, deps } = data;
            return (
              <ParentsContainerUl key={id}>
                <ParentsListLi>
                  <span onClick={toggle}>{label}</span>
                  {deps && deps.length > 0 ? (
                    <span
                      onClick={toggle}
                      className={isToggle ? 'upArrow' : 'downArrow'}
                    ></span>
                  ) : null}
                </ParentsListLi>

                {isToggle && (
                  <ChildContainerUl>
                    {deps?.map(data => {
                      return (
                        <ChildListLi key={id}>{data.depsLabel}</ChildListLi>
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
  overflow: scroll;
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
  display: flex;
  flex-direction: column;
  font-weight: 900;
  font-size: 27px;
`;

const ParentsListLi = styled.li`
  cursor: pointer;

  & > span {
    position: relative;
    padding-right: 12px;
  }
  & > .downArrow::after {
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
  & > .upArrow::after {
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

const ChildContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  color: ${props => props.theme.grayscaleD};
`;
const ChildListLi = styled.li``;

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
