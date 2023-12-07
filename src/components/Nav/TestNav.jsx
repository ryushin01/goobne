import styled from 'styled-components';
import { NAV_LIST_DATA } from '../../data/navlist';
import IconButton from '../IconButton/IconButton';

const TestNav = () => {
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
        {NAV_LIST_DATA.map(data => {
          const { id, label, deps } = data;
          return (
            <ParentsContainerUl key={id}>
              <ParentsListLi>{label}</ParentsListLi>

              <ChildContainerUl>
                {deps?.map(data => {
                  return <ChildListLi key={id}>{data.depsLabel}</ChildListLi>;
                })}
              </ChildContainerUl>
            </ParentsContainerUl>
          );
        })}
      </NavListContainerDiv>
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

const ParentsContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  font-size: 27px;
`;

const ParentsListLi = styled.li`
  cursor: pointer;
`;

const ChildContainerUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;
  font-size: 20px;
  color: ${props => props.theme.grayscaleD};
`;
const ChildListLi = styled.li`
  display: flex;
  flex-direction: column;
`;

const NavListContainerDiv = styled.div`
  width: 100%;
  padding: 50px 0px 50px 60px;
`;
