import styled from 'styled-components';
import OrderInfo from './Components/OrderInfo';
import OrderDetail from './Components/OrderDetail';
import CartSwiper from './Components/CartSwiper';

const Cart = () => {
  return (
    <CartMainContainer>
      <CartWrap>
        <CartTitle>장바구니</CartTitle>
        <CartDetailWrap>
          <OrderInfo />
          <OrderDetail />
        </CartDetailWrap>
        <CartSwiperWrap>
          <CartSwiperTitle>지금 인기있는 메뉴</CartSwiperTitle>
          <CartSwiper />
        </CartSwiperWrap>
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

const CartTitle = styled.h2`
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
`;

const CartSwiperTitle = styled.h4`
  ${FlexCenter};
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 800;
`;
