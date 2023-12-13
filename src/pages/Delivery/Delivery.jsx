import styled from 'styled-components';
import Button from '../../components/Button/Button';
import OrderMethod from './Components/OrderMethod';

const Delivery = () => {
  return (
    <DeliveryMain>
      <DeliveryWrap>
        <SwiperBox>swiper</SwiperBox>
        <MethodWrap>
          <MethodTitle>주문방법선택</MethodTitle>
          <DeliveryMethod>
            <OrderMethod />
          </DeliveryMethod>
          <MethodBottom>
            <BottomLeft>
              <li>개인정보 수집 이용 동의 (필수)</li>
              <li>- 수집정보: 배달지 주소</li>
              <li>- 수집목적: 제품 배달서비스 제공</li>
              <li>- 보유기간: 관련 법령에 따라 보관 후 파기</li>
              <li>(전자상거래 등에서의 소비자보호에 관한 법률 5년)</li>
            </BottomLeft>
            <BottomRight>
              <p>해당 배달 주소로 주문을 진행하시겠습니까?</p>
              <Button size="medium">선택</Button>
            </BottomRight>
          </MethodBottom>
        </MethodWrap>
      </DeliveryWrap>
    </DeliveryMain>
  );
};

export default Delivery;

const DeliveryMain = styled.main`
  width: 100%;
`;

const DeliveryWrap = styled.section`
  width: 71%;
  margin: auto;
`;

const SwiperBox = styled.div`
  width: 100%;
  height: 156px;
  border: 1px solid;
`;

const MethodWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`;

const MethodTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
`;

const DeliveryMethod = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const MethodBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomLeft = styled.ul`
  font-size: 11px;
  color: ${props => props.theme.grayscaleD};

  & > li {
    line-height: 140%;
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`;
