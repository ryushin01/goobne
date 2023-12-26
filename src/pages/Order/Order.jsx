import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../API/API';
import { API } from '../../config';
import { ORDER_SELECT_BOX_DATA } from '../../data/OrderSelectBoxData';
import { ORDER_RIDER_SELECT_BOX_DATA } from '../../data/OrderRiderSelectBoxData';
import { COUPON_DATA } from '../../data/CouponData';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import PaymentMethodListGroup from './components/PaymentMethodListGroup';

const Order = () => {
  /** orderInfo의 해당하는 값을 받아오기 위하여 State를 생성합니다. */
  const [orderInfo, setOrderInfo] = useState([]);
  /** 라디오인풋이 onChange가 될때 값을 저장하기 위한 State를 생성합니다. */
  const [paymentOnChange, setPaymentOnChange] = useState('');
  /** 셀렉트박스에 값이 변경될때마다, state에 값을 저장하기위하여 생성합니다. */
  const [requestSelectData, setRequestSelectData] = useState({
    ceo: '',
    rider: '',
  });
  /** orderTextArea의 값이 변경될때마다, state에 값을 저장하기 위하여 생성합니다.*/
  const [orderTextAreaValue, setOrderTextAreaValue] = useState('');
  /** riderTextArea의 값이 변경될때마다, state에 값을 저장하기 위하여 생성합니다.*/
  const [riderTextAreaValue, setRiderTextAreaValue] = useState('');

  const [orderRequestData, setOrderRequestData] = useState({
    orderInfo: orderInfo,
    paymentMethod: paymentOnChange,
    requestSelectData: requestSelectData,
    orderTextAreaValue: orderTextAreaValue,
    riderTextAreaValue: riderTextAreaValue,
  });

  const navigate = useNavigate();

  /** 첫 페이지 렌더링시 orderInfo을 보여주기 위하여 생성합니다. */
  useEffect(() => {
    getOrderInfoData();
  }, []);

  /** orderInfo를 가져오는 비동기 함수를 정의합니다. */
  const getOrderInfoData = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.ORDER_INFO)
      /** API.ORDER_INFO(custom API) 로 GET 요청을 보냅니다. */
      .then(response => {
        setOrderInfo(response.data.result);
      }) /** 요청이 성공하였을때 setOrderInfo함수가 실행, 데이터를 가져옵니다 */
      .catch(error => {
        if (error) {
          alert(
            '주문자정보 가져오기를 실패했습니다.',
          ); /** 요청이 실패시 alert생성. */
        }
      });
  };

  /**
   * useState로 선언한 객체형태의 값들의 데이터를 키:벨류 형태로 넣어주기 위하여 생성된 함수입니다.
   * @param {*} value - 셀렉트 박스에서 선택된 벨류 값을 인자로 받아옵니다.
   * @param {*} name - e.target이 된 셀렉트박스를 구분하기 위해 인자로 받아옵니다.
   * 1. 셀렉트 박스의 변경된 값들을 저장하기 위한 setter 함수를 선언합니다.
   * 2. 원본은 보존하기 위해서 스프레드 오퍼레이터를 이용하여 원본 값을 복사해줍니다.
   * 3. 이벤트에 발생한 input name과 일치하는 키에 input에서 발생한 이벤트에 value 값을 변경해줍니다.
   */
  const saveRequestInfo = (value, name) => {
    setRequestSelectData({
      ...requestSelectData,
      [name]: value,
    });
    console.log(requestSelectData);
  };

  /** orderInfo이 없는 경우, null을 반환합니다.*/
  if (!orderInfo) return null;

  /** deliveryFee라는 변수에 배달금액을 할당합니다. */
  const deliveryFee = 3000;

  /** totalPrice변수에 초기 총액을 0로 할당한다. */
  let totalPrice = 0;

  /** orderInfo 데이터를 map함수를 돌려 해당 값을 받아오고 기존할당한 totalPrice 에 합산하여 재할당한다. */
  orderInfo.map(({ price, count }) => {
    totalPrice = totalPrice + price * count;
  });

  /** totalAmount변수를 선언하고 상위 선언한 deliveryFee(배달료), totalPrice(제품들의 총합산금액)을 더하여준다. */
  const totalAmount = deliveryFee + totalPrice;

  /**
   * 라디오 컴포넌트에서 onChange된 값의 e.target.value를 미리 받고 있기 때문에,
   * 부모에서 선택된 라디오버튼의 value 값을 인자로 받아서 setPaymentOnChange에 값을 저장시켜줍니다.
   * */
  const handleChangePayment = value => {
    setPaymentOnChange(value);
  };

  /** orderTextArea의 값이 변경될 때 호출되며, 입력되는 값을 state에 업데이트하는 함수입니다.  */
  const handleChangeOrderRequest = e => {
    setOrderTextAreaValue(e.target.value);
  };
  /** ridderTextArea의 값이 변경될 때 호출되며, 입력되는 값을 state에 업데이트하는 함수입니다.  */
  const handleChangeRiderRequest = e => {
    setRiderTextAreaValue(e.target.value);
  };

  const handleSubmitOrderDataPost = e => {
    e.preventDefault();

    setOrderRequestData({
      ...orderRequestData,
      orderInfo: orderInfo,
      paymentMethod: paymentOnChange,
      requestSelectData: requestSelectData,
      orderTextAreaValue: orderTextAreaValue,
      riderTextAreaValue: riderTextAreaValue,
    });
    navigate('/');
    console.log(orderRequestData);
  };

  return (
    <OrderContainer>
      <OrderContentWrap>
        <OrderTitle>결제하기</OrderTitle>
        <form>
          <DeliveryInfo>
            <DeliveryInfoTitle>배달정보</DeliveryInfoTitle>
            <DeliveryItemArea>
              <AddressInfoLine>
                <DeliveryAddress>주소</DeliveryAddress>
                <DeliveryArea>
                  서울&nbsp;관악구&nbsp;관악산&nbsp;0-0&nbsp;(우리집)
                </DeliveryArea>
              </AddressInfoLine>
              <StoreInfoLine>
                <DeliveryAddress>주문매장</DeliveryAddress>
                <OrderArea>주소</OrderArea>
                <span>02-000-000</span>
              </StoreInfoLine>
              <NameInfoLine>
                <Input type="text" label="이름" isDot={true} />
              </NameInfoLine>
              <PhoneNumberInfoLine>
                <Input type="text" label="연락처" isDot={true} />
              </PhoneNumberInfoLine>
              <DeliveryRequest>
                <RequestTitle>가게사장님께 요청사항</RequestTitle>
                <SelectArea>
                  <SelectBox
                    data={ORDER_SELECT_BOX_DATA}
                    value="직접입력"
                    onChange={value => saveRequestInfo(value, 'ceo')}
                    name="ceo"
                  />
                  {requestSelectData.ceo === '직접입력' && (
                    <RequestTextArea
                      value={orderTextAreaValue}
                      placeholder="매장 요청사항을 입력해주세요"
                      onChange={handleChangeOrderRequest}
                    />
                  )}
                </SelectArea>
              </DeliveryRequest>
              <RiderArea>
                <RiderInfo>
                  <RiderTopArea>배달</RiderTopArea>
                  <span>라이더님께</span>
                </RiderInfo>
                <SelectArea>
                  <SelectBox
                    data={ORDER_RIDER_SELECT_BOX_DATA}
                    value="안전하게 와주세요"
                    onChange={value => saveRequestInfo(value, 'rider')}
                    name="rider"
                  />
                  {requestSelectData.rider === '직접입력' && (
                    <RequestTextArea
                      value={riderTextAreaValue}
                      placeholder="매장 요청사항을 입력해주세요"
                      onChange={handleChangeRiderRequest}
                    />
                  )}
                </SelectArea>
              </RiderArea>
            </DeliveryItemArea>
          </DeliveryInfo>
          <PaymentInfo>
            <PaymentMethod>결제방법</PaymentMethod>
            <PaymentItemArea>
              <CouponList>
                <CouponTitle>내&nbsp;쿠폰&nbsp;리스트</CouponTitle>
                <SelectBox data={COUPON_DATA} value="쿠폰을 선택하여주세요." />
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
                  <PaymentMethodListGroup onChange={handleChangePayment} />
                </PaymentButtonList>
              </PaymentList>
              <CashReceipt>
                <span>※&nbsp;할인 제품의 경우 금액권 적용이 불가합니다.</span>
                <span>
                  ※&nbsp;현금영수증 발행은 매장으로 문의 부탁드립니다.
                </span>
              </CashReceipt>
            </PaymentItemArea>
          </PaymentInfo>
          <OrderDetailArea>
            <OrderDetailInfo>주문내역</OrderDetailInfo>
            {orderInfo.map(({ id, title, count, price }) => {
              return (
                <ProductDetailArea key={id}>
                  <ProductDetailInner>
                    <DetailItemName>{title}</DetailItemName>
                    <span>&nbsp;X&nbsp;</span>
                    <span>{count}</span>
                  </ProductDetailInner>
                  <span>{price?.toLocaleString('ko-KR')}원</span>
                </ProductDetailArea>
              );
            })}
          </OrderDetailArea>
          <PaymentAmountArea>
            <PaymentAmountSection>최종결제금액</PaymentAmountSection>
            <PaymentAmountInfo>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>주문금액</PaymentAmountLeftArea>
                <span>{totalPrice.toLocaleString('ko-KR')}원</span>
              </PaymentAmountItem>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>배달비</PaymentAmountLeftArea>
                <span>{deliveryFee.toLocaleString('ko-KR')}원</span>
              </PaymentAmountItem>
              <PaymentAmountItem>
                <PaymentAmountLeftArea>
                  할인&nbsp;or&nbsp;쿠폰
                </PaymentAmountLeftArea>
                <span>-0원</span>
              </PaymentAmountItem>
              <PaymentAmountItemBottom>
                <span>총&nbsp;결제금액</span>
                <span>{totalAmount.toLocaleString('ko-KR')}원</span>
              </PaymentAmountItemBottom>
            </PaymentAmountInfo>
            <StoreStreetInfo>
              ※&nbsp;매장&nbsp;간의&nbsp;거리,&nbsp;상황에&nbsp;따라&nbsp;추가&nbsp;배달비&nbsp;청구&nbsp;및&nbsp;주문이&nbsp;취소가&nbsp;될&nbsp;수&nbsp;있습니다.
            </StoreStreetInfo>
          </PaymentAmountArea>
          <FinalPaymentArea>
            <div>
              <Button
                type="submit"
                size="medium"
                color="black"
                content="결제하기"
                onClick={handleSubmitOrderDataPost}
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

const OrderTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-size: 33px;
  font-weight: 800;
`;

const DeliveryInfo = styled.fieldset`
  padding-bottom: 80px;
  margin: 0 auto;
  width: 675px;
`;

const DeliveryInfoTitle = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
`;

const DeliveryItemArea = styled.div`
  padding-top: 25px;
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
`;

const AddressInfoLine = styled.div`
  margin-bottom: 24px;
`;

const StoreInfoLine = styled.div`
  margin-bottom: 24px;
`;
const NameInfoLine = styled.div`
  margin-bottom: 24px;
  & > div {
    & > label {
      width: 43%;
    }
  }
`;

const PhoneNumberInfoLine = styled.div`
  margin-bottom: 24px;
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

const DeliveryRequest = styled.div`
  display: flex;
  margin-bottom: 24px;
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

const RiderArea = styled.div`
  display: flex;
  margin-bottom: 24px;
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
`;

const PaymentMethod = styled.legend`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleF};
`;

const PaymentItemArea = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
`;

const CouponList = styled.div`
  display: flex;
  margin-bottom: 20px;
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

const PersonalPoint = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
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
  margin: 10px 0;

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
  margin: 17px 0;

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
