import styled from 'styled-components';
import Button from '../../components/Button/Button';
import KakaoBtn from './components/kakaoBtn';

const BaseJoin = () => {
  return (
    <BasejoinContainerMain>
      <BasejoinContainerSection>
        <BasejoinHeading>회원가입</BasejoinHeading>

        <BasicJoinAreaDiv>
          <h3>굽으네 회원가입</h3>
          <Button
            color="black"
            type="button"
            size="medium"
            content="기본 회원가입"
          />
        </BasicJoinAreaDiv>

        <SocialJoinAreaDiv>
          <h3>SNS 회원가입</h3>
          <span className="socialGuide">
            자주사용하는 소셜계정으로 간편하게 가입해보세요.
          </span>
          <KakaoBtn></KakaoBtn>
        </SocialJoinAreaDiv>

        <CouponBannerImgInner>
          <img
            src="../../../../goobne/images/couponBanner.png"
            alt="쿠폰배너"
          />
        </CouponBannerImgInner>
      </BasejoinContainerSection>
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

const BasejoinContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 500px;
  margin: 0 auto;
`;
const BasejoinHeading = styled.h2`
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
  & > h3 {
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
  & > h3 {
    font-size: 18px;
    font-weight: 900;
  }
  & > .socialGuide {
    font-size: 14px;
  }
`;
