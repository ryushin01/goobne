import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NanumSquareRoundR from '../../public/fonts/NanumSquareRoundR.ttf';
import Rubik from '../../public/fonts/RubikRegular.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};

  /** 글꼴 추가를 위한 font-face (NanumSquareRoundR) */
  @font-face {
    font-family: "NanumSquareRoundR"; // font-family로 불러올 때 사용할 이름 지정
    src: local("NanumSquareRoundR"), local("NanumSquareRoundR"); // local 상에 있는 글씨체 적용
    font-style: normal; // font-style 기본 속성 normal로 지정
    src: url(${NanumSquareRoundR}) format('truetype'); // 폰트를 import 한 url로 불러와서 적용시킴
  }

/** 글꼴 추가를 위한 font-face (Rubik) */
  @font-face {
    font-family: "Rubik";
    src: local("RubikRegular"), local("RubikRegular");
    font-style: normal;
    src: url(${Rubik}) format('truetype');
  }

  /** 모든 태그에 속성 적용 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /** 기본 body 속성 정의 */
  body {
    background-color : ${props => props.theme.grayscaleA};
    color : ${props => props.theme.grayscaleF};
    font-family : "NanumSquareRoundR", "Rubik", sans-serif;
  }
  
  /** Footer를 최하단에 고정시키기 위한 속성 */
  #root {  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  /** Footer를 최하단에 고정시키기 위한 속성 */
  main {
    flex : 1;
  }

  /** 이미지의 원본 비율을 유지시키기 위해 디폴트 속성을 100%로 지정  */
  img {
    width : 100%;
  }

  /** li 기호 또는 점을 없애기 위한 속성 */
  li {
    list-style: none;
  }

  /** a태그 사용 시 디폴트로 보라색 글씨색 + 밑줄이 생기는데 해당 속성을 제거하기 위해 정의 */
  a {
    display : block;
    color : initial; // 텍스트 색 초기값으로 받아오도록 속성 지정
    text-decoration: none; // 밑줄 제거
  }

  /** input, textarea 의 폰트가 디폴트로 적용되도록 속성 정의 */
  input, textarea {
    font-family : "NanumSquareRoundR", "Rubik", sans-serif; 
  }
`;

export default GlobalStyle;
