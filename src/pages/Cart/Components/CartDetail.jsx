import styled from 'styled-components';

const CartDetail = () => {
  return (
    <CartDetailMain>
      <CartDetailTitleWrap>
        <span>포장주문</span>
      </CartDetailTitleWrap>
      <CartDetailBox>
        <dl>
          <dt>주문매장</dt>
          <dd>1</dd>
        </dl>
        <dl>
          <dt>매장번호</dt>
          <dd>1</dd>
        </dl>
        <dl>
          <dt>매장 주소</dt>
          <dd>1</dd>
        </dl>
      </CartDetailBox>
    </CartDetailMain>
  );
};

export default CartDetail;

const CartDetailMain = styled.div`
  width: 100%;
  padding-bottom: 80px;
`;

const CartDetailTitleWrap = styled.div`
  padding-bottom: 22px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > span {
    margin-right: 5px;
    font-size: 19px;
    font-weight: 700;
  }
`;

const CartDetailBox = styled.section`
  border-bottom: 1px solid ${props => props.theme.grayscaleC};

  & > dl {
    display: flex;
    align-items: center;
    margin: 24px;
    font-size: 13px;

    & > dt {
      width: 15%;
      font-weight: 700;
    }
  }
`;
