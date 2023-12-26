import { useEffect, useState } from 'react';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';
import { USER_INFO_DATA } from '../../../data/UserInfoData';
import styled from 'styled-components';

const OrderInfo = () => {
  const [orderInfoData, setOrderInfoData] = useState([]);
  /** 필요한 userData를 저장할 State입니다. */
  const [userInfoData, setUserInfoData] = useState({
    storeAddress: '',
    storePhone: '',
    store: '',
  });

  /** useEffect를 이용하여 userInfo key에 대한 값이 있다면, localStorage의 데이터를 가져옵니다.
   * 1. localStorage에 userInfo key에 대한 값이 있다면, userInfoData에 값을 저장합니다.
   * 2. 값이 있다면 userInfo 변수에 JSON.parse()를 이용하여 객체로 변환하여 저장합니다.
   * 3. userInfoData에 변환한 객체를 담아줍니다.
   */
  useEffect(() => {
    const localUserInfo = localStorage.getItem('userInfo');

    if (localUserInfo) {
      const userInfo = JSON.parse(localUserInfo);

      setUserInfoData({
        ...userInfoData,
        storeAddress: userInfo.storeAddress,
        storePhone: userInfo.storePhone,
        store: userInfo.store,
      });
    }
  }, []);

  return (
    <OrderInfoMain>
      <OrderInfoTitleWrap>
        <h3>포장주문</h3>
      </OrderInfoTitleWrap>
      <OrderInfoBox>
        <OrderInfoColumn>
          <OrderInfoSubject>주문매장</OrderInfoSubject>
          <span>{userInfoData.store}</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장번호</OrderInfoSubject>
          <span>{userInfoData.storePhone}</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장 주소</OrderInfoSubject>
          <span>{userInfoData.storeAddress}</span>
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
