import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  // modal이 자리한 DOM 위치를 el이라는 변수를 사용하여 정의
  const el = document.getElementById('modal');
  // createPortal 메서드를 사용하여 children을 el에서 렌더링
  return ReactDom.createPortal(children, el);
};

export default Portal;
