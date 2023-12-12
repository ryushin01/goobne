import styled from 'styled-components';

const Order = () => {
  return (
    <OrderContainer>
      <OrderContentWrap>
        <OrderTitle>
          <span>결제하기</span>
        </OrderTitle>
        <form>
          <fieldset>
            <legend>배달정보</legend>
            <ui>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </fieldset>
        </form>
      </OrderContentWrap>
    </OrderContainer>
  );
};

export default Order;

const OrderContainer = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 170px;
`;

const OrderContentWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: #a6a6a6;
`;

const OrderTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  & > span {
    font-size: 40px;
    font-weight: 800;
  }
`;
