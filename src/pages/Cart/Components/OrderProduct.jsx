import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartCount from './CartCount';
import styled from 'styled-components';
import { deleteCart } from '../../../Redux/Redux';

const OrderProduct = () => {
  /** deliveryFee(배달비)를 받아오기 위한 state 초기값 3,000원으로 고정 */
  const [deliveryFee, setDeliveryFee] = useState(3000);
  /** redux의 dispatch를 사용하기 위한 변수 입니다. */
  const dispatch = useDispatch();

  /** Redux에 저장한 장바구니 데이터를 useSelector를 이용하여 state에 담아줍니다. */
  const state = useSelector(state => {
    return state.cart;
  });

  /** 장바구니에 담긴 데이터를 개별 삭제하는 기능입니다. */
  const CartDataDelete = (id, radioData) => {
    /** Redux Toolkit을 사용하지 않았을 때의 dispatch 입니다.  */
    // dispatch({
    //   type: 'DELETE_CART',
    //   payload: {
    //     id: id,
    //     radioData: radioData,
    //   },
    // });

    /** Redux Toolkit을 사용했을 때의 dispatch 입니다.  */
    dispatch(deleteCart({ id, radioData }));
  };

  /**
   * 여러 값을 하나로 합치는 reduce 함수를 사용
   * acc: cur의 누적값으로, cur.price * cur.count가 더해질 때마다 업데이트 됨
   *
   * cur: 각 상품의 개별 가격*/
  const orderAmount = state.reduce((acc, cur) => {
    /** 현재까지의 누적된 금액에 각 제품의 개별 가격을 더하여 총 상품금액을 리턴합니다. */
    return acc + cur.price * cur.count;
    /** 누적값인 total의 초기값은 0 */
  }, 0);

  /** 배송비를 포함한 총 금액 */
  const totalAmount = orderAmount + deliveryFee;

  return (
    <>
      {state.length > 0 ? (
        <>
          <tbody>
            {state.map(({ id, src, alt, name, price, count, radioData }) => (
              <OrderTableBody key={name}>
                <td colSpan={2}>
                  <OrderProductWrap>
                    <OrderProductImg>
                      <img src={src} alt={alt} />
                    </OrderProductImg>
                    <h4>{name}</h4>
                  </OrderProductWrap>
                </td>
                <td>
                  <OrderCountWrap>
                    <CartCount
                      size="small"
                      count={count}
                      id={id}
                      radioData={radioData}
                    />
                  </OrderCountWrap>
                </td>
                <td colSpan={2}>
                  <OrderPriceWrap>
                    <span>{`${(price * count).toLocaleString('ko-KR')}`}</span>{' '}
                    원
                  </OrderPriceWrap>
                  <ProductDeleteBtnWrap>
                    <button onClick={() => CartDataDelete(id, radioData)}>
                      <img
                        src="https://ryushin01.github.io/goobne/images/ProductDeleteButton.png"
                        alt="상품이미지"
                      />
                    </button>
                  </ProductDeleteBtnWrap>
                </td>
              </OrderTableBody>
            ))}
          </tbody>
          <tfoot>
            <OrderTableFoot>
              <td colSpan={5}>
                <TotalPriceWrap>
                  <span>
                    주문금액&nbsp;{`${orderAmount.toLocaleString('ko-KR')} 원`}
                  </span>
                  -<span>할인금액 0원</span>+
                  <span>
                    배송비&nbsp;{`${deliveryFee.toLocaleString('ko-KR')} 원`}
                  </span>
                  =
                  <span>
                    결제 예상 금액&nbsp;
                    <TotalAmountBox>{`${totalAmount.toLocaleString(
                      'ko-KR',
                    )} 원`}</TotalAmountBox>
                  </span>
                </TotalPriceWrap>
              </td>
            </OrderTableFoot>
          </tfoot>
        </>
      ) : (
        <tbody>
          <CartEmptyBox>
            <td colSpan={5}>장바구니가 비어 있습니다.</td>
          </CartEmptyBox>
        </tbody>
      )}
    </>
  );
};

export default OrderProduct;

const FlexCenter = `
  display: flex;
  align-items: center;
`;

const OrderTableBody = styled.tr`
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
  position: relative;

  &:last-child {
    border-bottom: 2px solid ${props => props.theme.grayscaleC};
  }

  & > td {
    padding: 30px 10px;
    vertical-align: middle;

    & h4 {
      font-size: 13px;
      font-weight: 700;
    }

    & span {
      font-size: 13px;
    }
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
  width: 110px;
  margin: 0 auto;
`;

const OrderPriceWrap = styled.div`
  text-align: center;

  & > span {
    font-weight: 700;
  }
`;

const OrderTableFoot = styled.tr`
  background-color: #f6e6d9;
`;

const TotalPriceWrap = styled.div`
  margin: 40px 0;
  font-size: 17px;
  font-weight: 700;
  text-align: center;

  & > span {
    margin: 0 20px;

    &:last-child {
      font-size: 20px;
    }

    &:nth-child(2) {
      color: ${props => props.theme.primaryColor};
    }
  }
`;

const TotalAmountBox = styled.span`
  color: ${props => props.theme.primaryColor};
`;

const ProductDeleteBtnWrap = styled.div`
  width: 28px;
  top: 40%;
  right: 10px;
  position: absolute;

  & > button {
    border: none;
    cursor: pointer;
  }
`;

const CartEmptyBox = styled.tr`
  text-align: center;

  & > td {
    padding: 20px 10px;
  }
`;
