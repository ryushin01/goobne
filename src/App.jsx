import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/Redux/Redux';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  /** Redux 사용을 위해 빈배열을 초기값으로 변수를 생성합니다. */
  // let initialValue = [];

  /** 장바구니에 데이터를 넣기위한 redux 입니다.
   * Redux Toolkit을 사용하지 않았을 때의 reducer 입니다.
   */
  // function cartReducer(state = initialValue, action) {
  //   /** state는 불변성을 가져야 하므로 state를 복사해줍니다. */
  //   let copyValue = [...state];
  //   // if (action.payload) {
  //   //   console.log(action.payload.id);
  //   // }

  //   /** 장바구니에 아이템을 추가합니다. */
  //   if (action.type === 'ADD_CART') {
  //     /** findIndex를 이용하여 추가하려는 아이템이 payload 안에 있는 아이템과 동일한 id가 있는지 확인합니다.
  //      * 동일한 아이템이 존재할 경우 findIndexDataById에 해당 아이템의 index를 반환합니다.
  //      * 존재하지 않을 경우 -1을 반환합니다.
  //      */
  //     const findIndexDataById = copyValue.findIndex(
  //       item => item.id === action.payload.id,
  //     );

  //     /** findIndexDataById가 -1이 아닐 경우 동일한 아이템이 존재한다는 의미이므로 radioData를 한번 더 확인하여 동일한 제품인지 확인합니다. */
  //     if (findIndexDataById !== -1) {
  //       const findIndexDataByRadioData = copyValue.findIndex(
  //         item => item.radioData === action.payload.radioData,
  //       );

  //       /** findIndexDataByRadioData가 -1이 아닐 경우 동일한 아이템이 존재한다는 의미이므로 기존 데이터에 count와 price를 더해줍니다. */
  //       if (findIndexDataByRadioData !== -1) {
  //         copyValue[findIndexDataByRadioData].count += action.payload.count;
  //         copyValue[findIndexDataByRadioData].price += action.payload.price;
  //         return copyValue;
  //       }
  //     }

  //     /** 동일한 아이템이 없을 경우에 payload 안에 데이터를 push 합니다. */
  //     copyValue.push(action.payload);
  //     /** push한 데이터가 들어있는 copyValue를 return합니다.  */
  //     return copyValue;
  //     /** 장바구니에 담긴 데이터를 개별 삭제하는 기능입니다. */
  //   } else if (action.type === 'DELETE_CART') {
  //     /**
  //      * filter를 이용하여 payload 안에 있는 id와 radioData가 일치하는 데이터를 제외하고 filterValue에 담아줍니다.
  //      * 1. filter 메서드는 특정 조건을 만족하는 요소만 포함하는 새 배열을 만듭니다.
  //      * 2. copyValue의 데이터 중 id와 radioData가 모두 action.payload 객체의 값과 해당하지 않는지 확인합니다.
  //      * 3. 값과 일치하지 않는 요소들만 배열에 담고, 같은 값인 아이템은 삭제합니다.*/
  //     return (copyValue = copyValue.filter(
  //       item =>
  //         !(
  //           item.id === action.payload.id &&
  //           item.radioData === action.payload.radioData
  //         ),
  //     ));

  //     /** 장바구니에 담긴 모든 데이터를 삭제합니다. */
  //   } else if (action.type === 'DELETE_ALL_CART') {
  //     /** 해당 action이 호출되면 copyValue의 값을 빈배열로 반환합니다. */
  //     return (copyValue = []);

  //     /** 장바구니에 담긴 데이터의 count의 + 를 누르면 수량을 증가시킵니다. */
  //   } else if (action.type === 'INCREMENT_QUANTITY') {
  //     /** copyValue에 존재하는 item의 id와 radioData가 action.payload에 있는 데이터와 일치하는 아이템을 확인합니다. */
  //     const findIndexDataByRadioData = copyValue.findIndex(
  //       item =>
  //         item.radioData === action.payload.radioData &&
  //         item.id === action.payload.id,
  //     );
  //     /** id와 radioData가 같은 아이템의 카운의 데이터를 증가시킵니다. */
  //     copyValue[findIndexDataByRadioData].count += 1;
  //     /** 업데이트 된 수량의 copyValue 데이터를 반환합니다. */
  //     return copyValue;

  //     /** 장바구니에 담긴 데이터의 count의 - 를 누르면 수량을 감소시킵니다. */
  //   } else if (action.type === 'DECREMENT_QUANTITY') {
  //     /** copyValue에 존재하는 item의 id와 radioData가 action.payload에 있는 데이터와 일치하는 아이템을 확인합니다. */
  //     const findIndexDataByRadioData = copyValue.findIndex(
  //       item =>
  //         item.radioData === action.payload.radioData &&
  //         item.id === action.payload.id,
  //     );
  //     /** id와 radioData가 같은 아이템의 카운의 데이터를 감소시킵니다. */
  //     copyValue[findIndexDataByRadioData].count -= 1;
  //     /** 업데이트 된 수량의 copyValue 데이터를 반환합니다. */
  //     return copyValue;
  //   } else {
  //     /** redux의 마지막은 state를 return 해주어야 에러가 발생하지 않습니다. */
  //     return state;
  //   }
  // }

  // /** combineReducers를 이용하여 cartReducer를 rootReducer에 넣어줍니다.
  //  * rootReducer는 전역 상태 관리 도구인 Redux에서 실제 상태가 저장되는 공간입니다.
  //  * store에 하나의 reducer만 넣을 수 있기 때문에 여러개의 reducer를 하나로 합쳐주는 역할을 합니다.
  //  * state.cart로 접근할 수 있습니다.
  //  */
  // const rootReducer = combineReducers({
  //   cart: cartReducer,
  // });

  // /** 전역 상태 관리 도구인 Redux에서 실제 상태가 저장되는 공간인 Store를 생성 합니다. */
  // const store = createStore(rootReducer);

  /** Redux Toolkit을 사용했을 때의 store 입니다. */
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  return (
    /** Provider를 이용하여 store를 전역에서 사용할 수 있도록 설정합니다. */
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
