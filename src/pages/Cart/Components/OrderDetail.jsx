import { useState } from 'react';
import styled from 'styled-components';
import OrderProduct from './OrderProduct';
import Button from '../../../components/Button/Button';

const OrderDetail = () => {
  const [isCartFilled] = useState(false);

  return (
    <OrderDetailMain>
      <OrderDetailTitleWrap>
        <h3>주문내역</h3>
        <DeleteAllBtnWrap>
          <Button size="small" color="black" content="전체삭제" />
        </DeleteAllBtnWrap>
      </OrderDetailTitleWrap>
      <div>
        <OrderDetailRow>
          <span>메뉴</span>
          <span>수량</span>
          <span>금액</span>
        </OrderDetailRow>
        <OrderProductRow>
          {isCartFilled ? (
            <OrderProduct />
          ) : (
            <span>장바구니가 비어 있습니다</span>
          )}
        </OrderProductRow>
      </div>
      <ButtonWrap>
        <OrderBtn>
          <Button size="small" color="beige" content="+ 메뉴 추가하기" />
        </OrderBtn>
        <OrderBtnRight>
          <OrderBtn>
            <Button size="small" color="beige" content="쿠폰함" />
          </OrderBtn>
          <OrderBtn>
            <Button size="small" color="black" content="주문하기" />
          </OrderBtn>
        </OrderBtnRight>
      </ButtonWrap>
    </OrderDetailMain>
  );
};

export default OrderDetail;

const FlexBetween = `
  display: flex;
  justify-content: space-between;
`;

const OrderDetailMain = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

const OrderDetailTitleWrap = styled.div`
  ${FlexBetween};
  padding-bottom: 7px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > h3 {
    margin-right: 5px;
    font-size: 19px;
    font-weight: 700;
  }
`;

const DeleteAllBtnWrap = styled.div`
  width: 110px;
`;

const OrderDetailRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
  font-size: 13px;
  text-align: center;
`;

const OrderProductRow = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
  font-size: 13px;
  text-align: center;
`;
const ButtonWrap = styled.div`
  ${FlexBetween};
  margin-top: 30px;
`;

const OrderBtnRight = styled.div`
  display: flex;
  gap: 10px;
`;

const OrderBtn = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
`;
