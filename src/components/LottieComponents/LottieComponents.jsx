import Lottie from 'react-lottie';
import Loading from '/public/data/Loading.json';
import styled from 'styled-components';

const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LottieInner>
      <Lottie options={defaultOptions} />;
    </LottieInner>
  );
};

export default LottieComponent;

const LottieInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;
