import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import NanumSquareRoundR from '../../public/fonts/NanumSquareRoundR.ttf';
import Rubik from '../../public/fonts/RubikRegular.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "NanumSquareRoundR";
    src: local("NanumSquareRoundR"), local("NanumSquareRoundR");
    font-style: normal;
    src: url(${NanumSquareRoundR}) format('truetype');
  }

  @font-face {
    font-family: "Rubik";
    src: local("RubikRegular"), local("RubikRegular");
    font-style: normal;
    src: url(${Rubik}) format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color : ${props => props.theme.grayscaleA};
    color : ${props => props.theme.grayscaleF};
    font-family : "NanumSquareRoundR", "Rubik", sans-serif;
  }
  
  #root {  
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex : 1;
  }

  img {
    width : 100%;
  }
`;

export default GlobalStyle;
