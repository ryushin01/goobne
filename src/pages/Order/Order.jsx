import styled from 'styled-components';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';

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
                <DeliveryAddress>주소</DeliveryAddress>
                <span>서울&nbsp;관악구&nbsp;관악산&nbsp;0-0&nbsp;(우리집)</span>
              </li>
              <li>
                <DeliveryAddress>주문매장</DeliveryAddress>
                <OrderArea>주소</OrderArea>
                <span>02-000-000</span>
              </li>
              <NameArea>
                <Input type="text" label="이름" isDot={true} />
              </NameArea>
              <PhoneNumberArea>
                <Input type="text" label="연락처" isDot={true} />
              </PhoneNumberArea>
              <DeliveryRequest>
                <RequestTitle>가게사장님께 요청사항</RequestTitle>
                <SelectArea>
                  <SelectBox />
                  <RequestTextArea placeholder="매장 요청사항을 입력해주세요"></RequestTextArea>
                </SelectArea>
              </DeliveryRequest>
              <li>
                <div>
                  <span>배달</span>
                  <span>라이더님께</span>
                  <SelectBox />
                </div>
              </li>
            </ul>
          </DeliveryInfo>
          <fieldset></fieldset>
          <fieldset></fieldset>
          <fieldset></fieldset>
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

    & > li {
      margin-bottom: 24px;
    }
  }
`;

const DeliveryInfoTitle = styled.legend`
  width: 100%;
  font-size: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #212121;
`;

const NameArea = styled.li`
  & > div {
    & > label {
      width: 43%;
    }
  }
`;

const PhoneNumberArea = styled.li`
  & > div {
    & > label {
      width: 43%;
    }
  }
`;

const DeliveryAddress = styled.span`
  display: inline-block;
  width: 30%;
  font-size: 16px;
  position: relative;
  padding-left: 10px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000;
  }
`;

const DeliveryRequest = styled.li`
  display: flex;
`;

const RequestTitle = styled.span`
  display: inline-block;
  width: 42%;
  font-size: 16px;
  position: relative;
  padding-left: 11px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 5%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000;
  }
`;

const OrderArea = styled.span`
  border: 1px solid #000;
  padding: 5px 10px;
  border-radius: 9px;
  background: #000;
  color: #fff;
`;

const SelectArea = styled.div`
  width: 100%;
`;

const RequestTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 13px;
  border: 1px solid #212121;
  border-radius: 5px;
  resize: none;
`;
