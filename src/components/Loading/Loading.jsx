import styled from 'styled-components';
import LottieComponent from '../LottieComponents/LottieComponents';

const Loading = () => {
  return (
    <Container>
      <Test>
        <LottieComponent />
        <h1>맛있는 굽으네 페이지를 로딩중입니다.</h1>
      </Test>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 100vh; /* 화면 전체 높이 */
  h1 {
    font-size: 40px;
  }
`;
const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default Loading;
