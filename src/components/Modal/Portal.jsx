import ReactDom from 'react-dom';

const Portal = ({ children }) => {
  const el = document.getElementById('modal');
  return ReactDom.createPortal(children, el);
};

export default Portal;
