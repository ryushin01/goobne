import styled from 'styled-components';

const OrderInfo = () => {
  return (
    <OrderInfoMain>
      <OrderInfoTitleWrap>
        <h3>포장주문</h3>
      </OrderInfoTitleWrap>
      <OrderInfoBox>
        <OrderInfoColumn>
          <OrderInfoSubject>주문매장</OrderInfoSubject>
          <span>삼성중앙점</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장번호</OrderInfoSubject>
          <span>02-000-0000</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장 주소</OrderInfoSubject>
          <span>서울시 강남구 삼성동</span>
        </OrderInfoColumn>
      </OrderInfoBox>
    </OrderInfoMain>
  );
};

export default OrderInfo;

const OrderInfoMain = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

const OrderInfoTitleWrap = styled.div`
  padding-bottom: 22px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > h3 {
    margin-right: 5px;
    font-size: 19px;
    font-weight: 700;
  }
`;

const OrderInfoBox = styled.section`
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
`;

const OrderInfoColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  margin: 24px 0;
  font-size: 13px;
`;

const OrderInfoSubject = styled.span`
  font-weight: 700;
`;
