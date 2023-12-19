import { useState } from 'react';
import MemberLogin from './components/MemberLogin';
import NonMemberLogin from './components/NonMemberLogin';
import Button from '../../components/Button/Button';
import IconButton from '../../components/IconButton/IconButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  /**
   * 회원로그인 컴포넌트와 , 비회원 로그인을 토글할 State를 정의합니다.
   * 초기값은 'member' 회원로그인창을 의미 합니다.
   */
  const [selectedTab, setSelectedTab] = useState('member');

  /**
   * useNavigate()를 navigate 이름으로 변수로 지정합니다.
   */
  const navigate = useNavigate();

  /**
   * 1.TabBtnButton 컴포넌트에서 onClick이벤트를 감지합니다.
   * 2.handleTabClick 이벤트 함수에는 인자로 'member' 또는 'nonMember'  스트링값을 인자로 전달됩니다.
   * 3.handleTabClick 인자로 들어온값을 setSelectedTab('member' 또는 'nonMember') 하여 selectedTab 값을 변경해줍니다.
   * 4.selectedTab 값이 'member'와 같다면 회원로그인 컴포넌트를 보여주고 selectedTab 값이 'nonMember' 와 같다면 비회원로그인컴포넌트를 보여줍니다
   * 5.TabBtnButton 스타일컴포넌트에 props로 active에 담아 값을 넘겨줍니다. active에 값은 selectedTab값과 TabBtnButton 스타일컴포넌트에
   * 지정해놓은 스트링 값과 같을때만 값이 props 전달됩니다. 전달된값에 따라 border 색상과 글씨에 색상을 변경해줍니다.
   *    */
  const handleTabClick = tab => {
    setSelectedTab(tab);
  };

  const goBasicJoin = () => {
    navigate('/basejoin');
  };

  return (
    <LoginContainerMain>
      <LoginContainerSection>
        <h2>로그인</h2>

        <LoginTabContainerDiv>
          <TabBtnButton
            type="button"
            onClick={() => handleTabClick('member')}
            $active={selectedTab === 'member' ? 'true' : undefined}
          >
            회원로그인
          </TabBtnButton>
          <TabBtnButton
            type="button"
            onClick={() => handleTabClick('nonMember')}
            $active={selectedTab === 'nonMember' ? 'true' : undefined}
          >
            비회원주문
          </TabBtnButton>
        </LoginTabContainerDiv>

        {selectedTab === 'member' && <MemberLogin />}
        {selectedTab === 'nonMember' && <NonMemberLogin />}

        <CouponBannerImgInner>
          <img
            src="../../../../goobne/images/couponBanner.png"
            alt="쿠폰배너"
          />
        </CouponBannerImgInner>

        <JoinMemberContainerDiv>
          <h3>아직 회원이 아니신가요?</h3>
          <Button
            color="beige"
            content="회원가입"
            size="large"
            type="button"
            onClick={goBasicJoin}
          />
        </JoinMemberContainerDiv>

        <EasyLoginContainerDiv>
          <h3>SNS 간편 회원가입</h3>
          <IconButton content="kakao" size="bigLarge" />
        </EasyLoginContainerDiv>
      </LoginContainerSection>
    </LoginContainerMain>
  );
};

export default Login;

const LoginContainerMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.grayscaleB};
`;

const LoginContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 500px;
  margin: 0 auto;
  & > h2 {
    font-weight: 900;
    font-size: 40px;
  }
`;
const LoginTabContainerDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0px 20px 0px;
`;
const TabBtnButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  font-weight: 800;
  font-size: 16px;
  padding: 10px 0;
  border-bottom: 1px solid
    ${props =>
      props.$active ? props.theme.grayscaleH : props.theme.grayscaleC};
  color: ${props =>
    props.$active ? props.theme.grayscaleH : props.theme.grayscaleD};
  cursor: pointer;
`;

const CouponBannerImgInner = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 30px;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
const JoinMemberContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 40px;

  & > h3 {
    font-size: 14px;
    font-weight: 800;
  }
`;

const EasyLoginContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  margin-bottom: 100px;
  & > h3 {
    font-size: 14px;
    font-weight: 900;
  }
`;
