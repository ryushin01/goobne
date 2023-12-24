import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';

/** 리덕스를 이용하여 장바구니에 담긴 상품의 수량을 증가시키거나 감소시키는 컴포넌트 입니다. */
const CartCount = ({ id, radioData, size, count }) => {
  /** redux의 dispatch를 사용하기 위한 변수 입니다. */
  const dispatch = useDispatch();

  /** 장바구니에 담긴 상품의 수량을 증가시키는 함수입니다. */
  const handleCartCountPlus = () => {
    /** dispatch를 이용하여 action.type이 INCREMENT_QUANTITY인 action을 reducer에 전달합니다.
     * 1. dispatch를 이용하여 action을 reducer에 전달합니다.
     * 2. action의 type은 INCREMENT_QUANTITY 입니다.
     * 3. action의 payload는 Props로 받은 id, radioData, count 입니다.
     */
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: {
        id: id,
        radioData: radioData,
        count: count,
      },
    });
  };

  /** dispatch를 이용하여 action.type이 DECREMENT_QUANTITY인 action을 reducer에 전달합니다.
   * 1. dispatch를 이용하여 action을 reducer에 전달합니다.
   * 2. action의 type은 INCREMENT_QUANTITY 입니다.
   * 3. action의 payload는 Props로 받은 id, radioData, count 입니다.
   */
  const handleCartCountMinus = () => {
    dispatch({
      type: 'DECREMENT_QUANTITY',
      payload: {
        id: id,
        radioData: radioData,
        count: count,
      },
    });
  };

  return (
    <CountContainer size={size}>
      <CountInnerWrap size={size}>
        <button onClick={handleCartCountMinus} disabled={count === 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={handleCartCountPlus}>+</button>
      </CountInnerWrap>
    </CountContainer>
  );
};

export default CartCount;

const COUNT_SIZE = {
  small: {
    padding: '0',
    fontSize: '12px',
  },

  medium: {
    padding: '5px 0',
    fontSize: '16px',
  },
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CountContainer = styled.section`
  ${FlexCenter};

  width: 100%;
  padding: ${({ size }) =>
    COUNT_SIZE[size]?.padding || COUNT_SIZE.medium.padding};
  border: 1px solid #000;
  border-radius: 4px;
`;

const CountInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 16px;

  & > button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
  }

  & > button:first-child {
    border-right: ${({ size }) =>
      size === 'small' ? '1px solid #000' : 'none'};
  }

  & > button:last-child {
    border-left: ${({ size }) =>
      size === 'small' ? '1px solid #000' : 'none'};
  }
`;
