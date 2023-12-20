import { useEffect } from 'react';
import { useState } from 'react';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';
import styled from 'styled-components';

const OrderInfo = () => {
  const [orderInfoData, setOrderInfoData] = useState([]);

  // 페이지 진입시 orderProductRequest 함수를 실행시킴
  useEffect(() => {
    orderInfoRequest();
  }, []);

  // customAxios를 이용하여 CART_INFO라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setOrderInfoData 통해 orderInfoData 상태를 업데이트
  // 에러발생시 경고창을 띄움
  const orderInfoRequest = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.CART_INFO)
      .then(response => {
        setOrderInfoData(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('데이터를 받아오던 중 에러가 발생했습니다.');
        }
      });
  };

  return (
    <OrderInfoMain>
      <OrderInfoTitleWrap>
        <h3>포장주문</h3>
      </OrderInfoTitleWrap>
      <OrderInfoBox>
        <OrderInfoColumn>
          <OrderInfoSubject>주문매장</OrderInfoSubject>
          <span>{orderInfoData.store}</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장번호</OrderInfoSubject>
          <span>{orderInfoData.telNum}</span>
        </OrderInfoColumn>
        <OrderInfoColumn>
          <OrderInfoSubject>매장 주소</OrderInfoSubject>
          <span>{orderInfoData.address}</span>
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
