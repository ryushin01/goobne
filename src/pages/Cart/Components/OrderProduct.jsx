import styled from 'styled-components';

const OrderProduct = () => {
  return (
    <OrderProductTable>
      <colgroup>
        <OrderTableCol width="20%" />
        <OrderTableCol width="10%" />
        <OrderTableCol width="10%" />
      </colgroup>
      <thead>
        <OrderTableHead>
          <th>메뉴</th>
          <th>수량</th>
          <th>금액</th>
        </OrderTableHead>
      </thead>
      <tbody>
        {ORDER.map(({ id, src, alt, name }) => (
          <OrderTableBody key={id}>
            <td>
              <OrderProductWrap>
                <OrderProductImg>
                  <img src={src} alt={alt} />
                </OrderProductImg>
                <span>{name}</span>
              </OrderProductWrap>
            </td>
            <td>
              <OrderCount>
                <span>1</span>
              </OrderCount>
            </td>
            <td>
              <OrderPrice>30,000원</OrderPrice>
            </td>
          </OrderTableBody>
        ))}
      </tbody>
      {/* 
      <ProductDeleteBtnWrap>
        <img src="./public/images/ProductDeleteButton.png" alt="상품이미지" />
      </ProductDeleteBtnWrap> */}
    </OrderProductTable>
  );
};

export default OrderProduct;

// const FlexCenter = `
//   display: flex;
//   align-items: center;
// `;

const OrderProductTable = styled.table`
  width: 100%;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
`;

const OrderTableCol = styled.col`
  width: ${props => props.width};
`;

const OrderTableHead = styled.tr`
  & > th {
    padding: 12px 0;
  }
`;

const OrderTableBody = styled.tr`
  border-top: 1px solid ${props => props.theme.grayscaleC};

  & > td {
    padding: 20px 10px;
  }
`;

const OrderProductWrap = styled.div`
  display: flex;
  align-items: center;
`;

const OrderProductImg = styled.div`
  width: 70px;
  margin-right: 15px;
`;

const OrderCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const ProductDeleteBtnWrap = styled.div`
//   width: 28px;
//   right: 0;
//   position: absolute;
// `;

export const ORDER = [
  {
    id: '1',
    src: './public/images/main_chicken_02.jpg',
    alt: '이청원 근성장용 닭찌 12pcs',
    name: '이청원 근성장용 닭찌 12pcs',
  },
];
