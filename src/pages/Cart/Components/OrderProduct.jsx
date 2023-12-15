import styled from 'styled-components';

const OrderProduct = () => {
  return (
    <OrderProductWrap>
      <OrderProductBox>
        <OrderProductImg>
          <img src="./public/images/main_chicken_02.jpg" alt="상품이미지" />
        </OrderProductImg>
        <span>이청원 근성장용 닭찌 12pcs</span>
      </OrderProductBox>
      <OrderPriceBox>
        <span>1</span>
      </OrderPriceBox>
      <OrderPriceBox>
        <span>30,000원</span>
      </OrderPriceBox>
      <ProductDeleteBtn>
        <img src="./public/images/ProductDeleteButton.png" alt="상품이미지" />
      </ProductDeleteBtn>
    </OrderProductWrap>
  );
};

export default OrderProduct;

const FlexCenter = `
  display: flex;
  align-items: center;
`;

const OrderProductWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  font-size: 13px;
  position: relative;
`;

const OrderProductBox = styled.div`
  ${FlexCenter}
  padding: 0 10px;
`;

const OrderPriceBox = styled.div`
  ${FlexCenter}
  justify-content: center;
  padding: 0 10px;
`;

const OrderProductImg = styled.div`
  width: 70px;
  margin-right: 15px;
`;
const ProductDeleteBtn = styled.div`
  width: 28px;
  right: 0;
  position: absolute;
`;
