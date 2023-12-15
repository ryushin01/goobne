import styled from 'styled-components';
import OrderInfo from './Components/OrderInfo';
import OrderDetail from './Components/OrderDetail';

const Cart = () => {
  return (
    <CartMainContainer>
      <CartWrap>
        <CartTitle>장바구니</CartTitle>
        <CartDetailWrap>
          <OrderInfo />
          <OrderDetail />
        </CartDetailWrap>
        <CartSwiperWrap>swiper</CartSwiperWrap>
      </CartWrap>
    </CartMainContainer>
  );
};

export default Cart;

const FlexCenter = `
  display: flex;
  justify-content: center;
`;

const CartMainContainer = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.grayscaleB};
`;

const CartWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
`;

const CartTitle = styled.h1`
  ${FlexCenter};
  margin-top: 180px;
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 800;
`;

const CartDetailWrap = styled.section`
  width: 100%;
  padding-bottom: 80px;
`;

const CartSwiperWrap = styled.div`
  width: 100%;
  height: 325px;
  border: 1px solid;
`;
