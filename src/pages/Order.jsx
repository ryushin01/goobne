import styled from 'styled-components';
import Input from '../components/Input/Input';
import SelectBox from '../components/SelectBox/SelectBox';

const Order = () => {
  return (
    <OrderContainer>
      <OrderContentWrap>
        <OrderTitle>
          <span>결제하기</span>
        </OrderTitle>
        <form>
          <DeliveryInfo>
            <DeliveryInfoTitle>배달정보</DeliveryInfoTitle>
            <ul>
              <li>
                <span>주소</span>
                <span>기입한 배달주소구역</span>
              </li>
              <li>
                <span>주문매장</span>
                <span>주소</span>
              </li>
              <li>
                <Input type="text" label="이름" />
              </li>
              <li>
                <Input type="text" label="연락처" />
              </li>
              <li>
                <span>가게사장님께 요청사항</span>
                <div>
                  <SelectBox />
                  <textarea></textarea>
                </div>
              </li>
              <li>
                <div>
                  <span>배달</span>
                  <span>라이더님께</span>
                  <SelectBox />
                </div>
              </li>
            </ul>
          </DeliveryInfo>
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
  background-color: #fbf5f0;
`;

const OrderContentWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const OrderTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  & > span {
    font-size: 33px;
    font-weight: 800;
  }
`;

const DeliveryInfo = styled.fieldset`
  padding-bottom: 120px;
  margin: 0 auto;
  width: 675px;

  & > ul {
    padding: 25px 0;
    border-bottom: 1px solid #bebebe;
  }
`;

const DeliveryInfoTitle = styled.legend`
  width: 100%;
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #212121;
`;
