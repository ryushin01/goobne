import styled from 'styled-components';
import Button from '../components/Button/Button';

const Delivery = () => {
  return (
    <main>
      <OrderMain>
        <OrderWrap>
          <OrderSwiperBox>swiper</OrderSwiperBox>
          <OrderMethodWrap>
            <OrderTitle>주문방법선택</OrderTitle>
            <OrderMethod>
              listBox
              <div>listComponent</div>
            </OrderMethod>
            <MethodBottom>
              <BottomLeft>
                <li>개인정보 수집 이용 동의 (필수)</li>
                <li>- 수집정보: 배달지 주소</li>
                <li>- 수집목적: 제품 배달서비스 제공</li>
                <li>- 보유기간: 관련 법령에 따라 보관 후 파기</li>
                <li>(전자상거래 등에서의 소비자보호에 관한 법률 5년)</li>
              </BottomLeft>
              <BottomRight>
                <span>해당 배달 주소로 주문을 진행하시겠습니까?</span>
                <Button size="medium">선택</Button>
              </BottomRight>
            </MethodBottom>
          </OrderMethodWrap>
        </OrderWrap>
      </OrderMain>
    </main>
  );
};

export default Delivery;

const OrderMain = styled.section`
  width: 100%;
`;

const OrderWrap = styled.div`
  width: 70%;
  margin: auto;
`;

const OrderSwiperBox = styled.div`
  width: 100%;
  height: 156px;
`;

const OrderMethodWrap = styled.div`
  margin: 20px 0;
`;

const OrderTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 800;
`;

const OrderMethod = styled.div`
  width: 100%;
  margin: 20px 0;
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
