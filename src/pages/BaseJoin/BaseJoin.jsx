import styled from 'styled-components';
import Button from '../../components/Button/Button';
import KakaoBtn from './components/kakaoBtn';

const BaseJoin = () => {
  return (
    <BasejoinContainerMain>
      <BasejoinContainerDiv>
        <BasejoinHeading>회원가입</BasejoinHeading>

        <BasicJoinAreaDiv>
          <p>굽으네 회원가입</p>
          <Button
            color="black"
            type="button"
            size="medium"
            content="기본 회원가입"
          />
        </BasicJoinAreaDiv>

        <SocialJoinAreaDiv>
          <p>SNS 회원가입</p>
          <p className="socialGuide">
            자주사용하는 소셜계정으로 간편하게 가입해보세요.
          </p>
          <KakaoBtn></KakaoBtn>
        </SocialJoinAreaDiv>

        <CouponBannerImgInner>
          <img
            src="../../../../goobne/images/couponBanner.png"
            alt="쿠폰배너"
          />
        </CouponBannerImgInner>
      </BasejoinContainerDiv>
    </BasejoinContainerMain>
  );
};

export default BaseJoin;

const BasejoinContainerMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.grayscaleB};
`;

const BasejoinContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 500px;
  margin: 0 auto;
`;
const BasejoinHeading = styled.h1`
  font-weight: 900;
  font-size: 35px;
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

const BasicJoinAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 30px 0px;
  & > p {
    font-size: 18px;
    font-weight: 800;
  }
`;

const SocialJoinAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 30px 0px 60px 0px;
  & > p {
    font-size: 18px;
    font-weight: 900;
  }
  & > .socialGuide {
    font-size: 14px;
  }
`;
