import { createSlice } from '@reduxjs/toolkit';

/** Redux toolkit에서의 초기값을 빈배열로 지정한 변수를 만들어줍니다. */
const initialState = [];

/** cartSlice를 생성합니다.
 * name은 cart로 지정합니다. (이름은 해당 slice의 이름을 의미합니다.)
 * initialState는 빈배열로 지정한 변수를 지정합니다.
 * reducers는 cartSlice에서 사용할 reducer를 지정합니다.
 * 1. addCart는 장바구니에 데이터를 넣기 위한 함수입니다.
 * 2. deleteCart는 장바구니에 담긴 데이터를 개별 삭제하는 기능입니다.
 * 3. deleteAllCart는 장바구니에 담긴 모든 데이터를 삭제합니다.
 * 4. incrementQuantity는 장바구니에 담긴 데이터의 count의 + 를 누르면 수량을 증가시킵니다.
 * 5. decrementQuantity는 장바구니에 담긴 데이터의 count의 - 를 누르면 수량을 감소시킵니다.
 */
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      /** addCart를 사용하는 곳에서 받아오는 action.payload 중 id, radioData를 구조분해 할당합니다. */
      const { id, radioData } = action.payload;
      /** findIndex를 이용하여 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터를 찾습니다. */
      const findIndexDataByRadioData = state.findIndex(
        item => item.radioData === radioData && item.id === id,
      );
      /** findIndexDataByRadioData가 -1이면 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터가 없기 때문에 state에 push합니다. */
      if (findIndexDataByRadioData === -1) {
        state.push(action.payload);
      } else {
        /** findIndexDataByRadioData가 -1이 아니면 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터가 있기 때문에 해당 데이터의 count를 증가시킵니다. */
        state[findIndexDataByRadioData].count += action.payload.count;
      }
    },
    deleteCart(state, action) {
      /** deleteCart를 사용하는 곳에서 받아오는 action.payload 중 id, radioData를 구조분해 할당 합니다. */
      const { id, radioData } = action.payload;
      /** findIndex를 이용하여 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터를 찾습니다. */
      const findIndexDataByRadioData = state.findIndex(
        item => item.radioData === radioData && item.id === id,
      );
      /** splice를 이용하여 findIndexDataByRadioData에 해당하는 데이터를 삭제합니다. */
      state.splice(findIndexDataByRadioData, 1);
    },
    deleteAllCart(state) {
      /** state에 있는 모든 데이터를 splice를 이용하여 삭제합니다. */
      state.splice(0, state.length);
    },
    incrementQuantity(state, action) {
      /** incrementQuantity를 사용하는 곳에서 받아오는 id와 radioData를 구조분해 할당 합니다. */
      const { id, radioData } = action.payload;
      /** findIndex를 이용하여 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터를 찾습니다. */
      const findIndexDataByRadioData = state.findIndex(
        item => item.radioData === radioData && item.id === id,
      );
      /** id와 radioData가 같은 아이템의 카운의 데이터를 증가시킵니다. */
      state[findIndexDataByRadioData].count += 1;
    },
    decrementQuantity(state, action) {
      /** decrementQuantity를 사용하는 곳에서 받아오는 id와 radioData를 구조분해 할당 합니다. */
      const { id, radioData } = action.payload;
      /** findIndex를 이용하여 state에 담긴 데이터 중 id와 radioData가 일치하는 데이터를 찾습니다. */
      const findIndexDataByRadioData = state.findIndex(
        item => item.radioData === radioData && item.id === id,
      );
      /** id와 radioData가 같은 아이템의 카운의 데이터를 감소시킵니다. */
      state[findIndexDataByRadioData].count -= 1;
    },
  },
});

/** cartSlice에서 사용할 reducer를 export합니다.
 * Redux Toolkit을 사용하기 위해서는 해당 슬라이스의 actions를 export해야 합니다. (actions는 해당 슬라이스에서 사용할 reducer를 의미합니다.)
 */
export const {
  addCart,
  deleteCart,
  deleteAllCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

/** cartSlice에서 사용할 reducer를 export합니다. */
export default cartSlice.reducer;
