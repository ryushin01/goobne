import styled from 'styled-components';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';

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
                <DeliveryArea>
                  서울&nbsp;관악구&nbsp;관악산&nbsp;0-0&nbsp;(우리집)
                </DeliveryArea>
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
                  <RequestTextArea placeholder="매장 요청사항을 입력해주세요" />
                </SelectArea>
              </DeliveryRequest>
              <RiderArea>
                <RiderInfo>
                  <RiderTopArea>배달</RiderTopArea>
                  <span>라이더님께</span>
                </RiderInfo>
                <SelectArea>
                  <SelectBox />
                  <RequestTextArea placeholder="매장 요청사항을 입력해주세요" />
                </SelectArea>
              </RiderArea>
            </ul>
          </DeliveryInfo>
          <PaymentInfo>
            <PaymentMethod>결제방법</PaymentMethod>
            <ul>
              <CouponList>
                <CouponTitle>내&nbsp;쿠폰&nbsp;리스트</CouponTitle>
                <SelectBox />
              </CouponList>
              <PersonalPoint>
                <PointTitle>e-금액권</PointTitle>
                <PointRight>
                  <PointInquiry>
                    <Input
                      type="text"
                      placeholder="공백없이 수기입력해주세요."
                    />
                    <PointCheckButton>
                      <Button
                        type="button"
                        size="medium"
                        color="black"
                        content="조회"
                      />
                    </PointCheckButton>
                  </PointInquiry>
                  <PointInformation>
                    <span>•&nbsp;e-금액권 이용안내</span>
                    <button type="button">?</button>
                  </PointInformation>
                </PointRight>
              </PersonalPoint>
              <PaymentList>
                <span>결제방법</span>
                <PaymentButtonList>
                  <button type="button">신용카드</button>
                  <button type="button">네이버페이</button>
                  <button type="button">카카오페이</button>
                  <button type="button">페이코</button>
                  <button type="button">후불&nbsp;카드</button>
                  <button type="button">후불&nbsp;현금</button>
                </PaymentButtonList>
              </PaymentList>
              <CashReceipt>
                <span>※&nbsp;할인 제품의 경우 금액권 적용이 불가합니다.</span>
                <span>
                  ※&nbsp;현금영수증 발행은 매장으로 문의 부탁드립니다.
                </span>
              </CashReceipt>
            </ul>
          </PaymentInfo>
          <OrderDetailArea>
            <OrderDetailInfo>주문내역</OrderDetailInfo>
            <ProductDetailArea>
              <ProductDetailInner>
                <DetailItemName>고추바사삭 곱빼기(곱빼기)</DetailItemName>
                <span>&nbsp;X&nbsp;</span>
                <span>1</span>
              </ProductDetailInner>
              <span>27,000원</span>
            </ProductDetailArea>
          </OrderDetailArea>
          <PaymentAmountArea>
            <PaymentAmountSection>최종결제금액</PaymentAmountSection>
            <PaymentAmountInfo>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>주문금액</PaymentAmountLeftArea>
                <span>27,000원</span>
              </PaymentAmountItem>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>배달비</PaymentAmountLeftArea>
                <span>3,000원</span>
              </PaymentAmountItem>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>
                  할인&nbsp;or&nbsp;쿠폰
                </PaymentAmountLeftArea>
                <span>-0원</span>
              </PaymentAmountItem>
              <PaymentAmountItemBottom>
                <span>총&nbsp;결제금액</span>
                <span>30,000원</span>
              </PaymentAmountItemBottom>
            </PaymentAmountInfo>
            <StoreStreetInfo>
              ※&nbsp;매장&nbsp;간의&nbsp;거리,&nbsp;상황에&nbsp;따라&nbsp;추가&nbsp;배달비&nbsp;청구&nbsp;및&nbsp;주문이&nbsp;취소가&nbsp;될&nbsp;수&nbsp;있습니다.
            </StoreStreetInfo>
          </PaymentAmountArea>
          <FinalPaymentArea>
            <div>
              <Button
                type="button"
                size="medium"
                color="black"
                content="결제하기"
              />
            </div>
          </FinalPaymentArea>
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
  background-color: ${props => props.theme.grayscaleB};
`;

const OrderContentWrap = styled.div`
  width: 1200px;
  margin: 0px auto 150px;
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
  padding-bottom: 80px;
  margin: 0 auto;
  width: 675px;

  & > ul {
    padding-top: 25px;
    border-bottom: 1px solid ${props => props.theme.grayscaleC};

    & > li {
      margin-bottom: 24px;
    }
  }
`;

const DeliveryInfoTitle = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
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
  font-size: 14px;
  font-weight: 700;
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
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const DeliveryArea = styled.span`
  font-size: 15px;
`;

const DeliveryRequest = styled.li`
  display: flex;
`;

const RequestTitle = styled.span`
  display: inline-block;
  width: 42%;
  font-size: 14px;
  font-weight: 700;
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
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const OrderArea = styled.span`
  border: 1px solid ${props => props.theme.grayscaleH};
  padding: 5px 10px;
  border-radius: 9px;
  background-color: ${props => props.theme.grayscaleH};
  color: ${props => props.theme.grayscaleA};
  margin-right: 5px;
`;

const SelectArea = styled.div`
  width: 100%;
`;

const RequestTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 13px;
  border: 1px solid ${props => props.theme.grayscaleF};
  border-radius: 5px;
  resize: none;
  font-size: 16px;
  background-color: transparent;
`;

const RiderArea = styled.li`
  display: flex;
`;

const RiderInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  padding-left: 10px;

  & > span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const RiderTopArea = styled.span`
  position: relative;
  background-color: ${props => props.theme.grayscaleC};
  color: ${props => props.theme.grayscaleA};
  width: 50px;
  text-align: center;
  padding: 2px 0;
  border-radius: 10px;
  margin-bottom: 3px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 100%;
    left: -10px;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const PaymentInfo = styled.fieldset`
  padding-bottom: 80px;
  margin: 0 auto;
  width: 675px;

  & > ul {
    padding: 25px 0;
    border-bottom: 1px solid ${props => props.theme.grayscaleC};

    & > li {
      margin-bottom: 20px;
    }
  }
`;

const PaymentMethod = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
`;

const CouponList = styled.li`
  display: flex;
`;

const CouponTitle = styled.span`
  display: inline-block;
  width: 43%;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  padding-left: 10px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 16%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const PersonalPoint = styled.li`
  display: flex;
  flex-direction: row;
`;

const PointTitle = styled.span`
  display: inline-block;
  width: 42.5%;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  padding-left: 10px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 9%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const PointRight = styled.div`
  width: 100%;
`;

const PointInquiry = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const PointCheckButton = styled.div`
  width: 300px;
`;

const PointInformation = styled.div`
  margin: 5px 0px 5px 0px;

  & > span {
    font-size: 13px;
    line-height: 1.4;
    color: ${props => props.theme.grayscaleD};
  }

  & > button {
    background-color: ${props => props.theme.grayscaleC};
    padding: 3px 7px;
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.grayscaleA};
    font-weight: 700;
    margin-left: 3px;
    cursor: pointer;
  }
`;

const PaymentList = styled.div`
  display: flex;

  & > span {
    display: inline-block;
    width: 43%;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    padding-left: 10px;

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 10%;
      left: 0;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${props => props.theme.grayscaleH};
    }
  }
`;

const PaymentButtonList = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  gap: 10px;

  & > button {
    display: inline-block;
    height: 70px;
    width: 100%;
    border: 1px solid ${props => props.theme.grayscaleG};
    line-height: 90px;
    text-align: center;
    font-weight: bold;
    font-size: 13px;
    background: none;
    cursor: pointer;
  }
`;

const CashReceipt = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const OrderDetailArea = styled.fieldset`
  padding-bottom: 80px;
  width: 675px;
  margin: 0 auto;
`;

const OrderDetailInfo = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
`;

const ProductDetailArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 15px;
  background-color: ${props => props.theme.grayscaleK};

  & > span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const ProductDetailInner = styled.div`
  text-align: center;
  margin: 24px 0;

  & span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const DetailItemName = styled.span`
  position: relative;
  color: ${props => props.theme.grayscaleH};
  font-weight: 700;
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
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const PaymentAmountArea = styled.fieldset`
  padding-bottom: 80px;
  width: 675px;
  margin: 0 auto;
`;

const PaymentAmountSection = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
`;

const PaymentAmountInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px 15px;
  background-color: ${props => props.theme.grayscaleK};
`;

const PaymentAmountItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 24px 0;

  & > span {
    font-size: 14px;
    font-weight: 700;
  }
`;

const PaymentAmountItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 10px;
  border-top: 1px solid ${props => props.theme.grayscaleH};

  & > span {
    color: ${props => props.theme.primaryColor};
    font-size: 18px;
    font-weight: 700;
  }
`;

const PaymentAmountLeftArea = styled.span`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
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
    background-color: ${props => props.theme.grayscaleH};
  }
`;

const StoreStreetInfo = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
  margin-top: 10px;
`;

const FinalPaymentArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 170px;
  }
`;
