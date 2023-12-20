import { useEffect, useState } from 'react';
import Count from '../../../components/Count/Count';
import styled from 'styled-components';
import { API } from '../../../config';
import { customAxios } from '../../../API/API';

const OrderProduct = () => {
  const [orderProductData, setOrderProductData] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0); // 전체 사용자 수

  // 페이지 진입시 orderProductRequest 함수를 실행시킴
  useEffect(() => {
    orderProductRequest();
  }, []);

  // customAxios를 이용하여 CART_PRODUCT라는 json파일에 대한 데이터를 받아옴
  // 데이터를 성공적으로 받아오면 setOrderProductData 통해 orderProductData 상태를 업데이트
  // 에러발생시 경고창을 띄움
  const orderProductRequest = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.CART_PRODUCT)
      .then(response => {
        setOrderProductData(response.data.result.products);
        setDeliveryFee(response.data.result.deliveryFee);
      })
      .catch(error => {
        if (error) {
          alert('데이터를 받아오던 중 에러가 발생했습니다.');
        }
      });
  };

  // 합계를 나타내는 reduce를 사용하여 주문 금액을 합산함
  const orderAmount = orderProductData.reduce(
    (total, { price }) => total + price,
    0,
  );

  // 배송비를 포함한 총 금액
  const totalAmount = orderAmount + deliveryFee;

  return (
    <OrderProductTable>
      <colgroup>
        <col width="20%" />
        <col width="10%" />
        <col width="10%" />
      </colgroup>
      <thead>
        <OrderTableHead>
          <th>메뉴</th>
          <th>수량</th>
          <th>금액</th>
        </OrderTableHead>
      </thead>
      <tbody>
        {orderProductData.map(({ id, src, alt, name, price }) => (
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
              <OrderCountWrap>
                <Count size="small" />
              </OrderCountWrap>
            </td>
            <td>
              <OrderPriceWrap>
                {`${price.toLocaleString('ko-KR')} 원`}
              </OrderPriceWrap>
              <ProductDeleteBtnWrap>
                <img
                  src="./public/images/ProductDeleteButton.png"
                  alt="상품이미지"
                />
              </ProductDeleteBtnWrap>
            </td>
          </OrderTableBody>
        ))}
      </tbody>
      <tfoot>
        <OrderTableFoot>
          <td colSpan={3}>
            <span>주문금액 {`${orderAmount.toLocaleString('ko-KR')} 원`}</span>
            <span>배송비 {`${deliveryFee.toLocaleString('ko-KR')} 원`}</span>
            <span>
              결제 예상 금액 {`${totalAmount.toLocaleString('ko-KR')} 원`}
            </span>
          </td>
        </OrderTableFoot>
      </tfoot>
    </OrderProductTable>
  );
};

export default OrderProduct;

const FlexCenter = `
  display: flex;
  align-items: center;
`;

const OrderProductTable = styled.table`
  width: 100%;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
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
    position: relative;
  }
`;

const OrderProductWrap = styled.div`
  ${FlexCenter};
`;

const OrderProductImg = styled.div`
  width: 70px;
  margin-right: 15px;
`;

const OrderCountWrap = styled.div`
  ${FlexCenter};
  width: 110px;
`;

const OrderPriceWrap = styled.div``;

const OrderTableFoot = styled.tr`
  padding: 40px 0;
  border: 1px solid;
`;
const ProductDeleteBtnWrap = styled.div`
  width: 28px;
  top: 50%;
  right: 10px;
  position: absolute;
`;
