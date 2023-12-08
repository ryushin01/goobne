import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';

const Modal = ({ title, desc, closeBtn, bottomBtn, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleDimClick = event => {
      // 모달 외부를 클릭시 모달 닫기
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // 모달이 열려있을 때 EventListener를 등록
    if (isModalOpen) {
      window.addEventListener('mousedown', handleDimClick);
    }

    return () => {
      // 언마운트되면 EventListener를 해제.
      window.removeEventListener('mousedown', handleDimClick);
    };
  }, [isModalOpen]);

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <ModalMain>
          <ModalDim />
          <ModalWrap ref={modalRef} {...props}>
            <ModalContainer>
              {closeBtn && (
                <IconButton content="close" onClick={closeModal}></IconButton>
              )}
              <ModalTitle>{title}</ModalTitle>
              <ModalDesc>{desc}</ModalDesc>
              {bottomBtn && (
                <ModalBtnWrap>
                  <ModalButton onClick={closeModal}>
                    오늘 하루 보지 않기
                  </ModalButton>
                  <ModalButton onClick={closeModal}>닫기</ModalButton>
                </ModalBtnWrap>
              )}
            </ModalContainer>
          </ModalWrap>
        </ModalMain>
      )}
    </>
  );
};

export default Modal;

const MODAL_TYPE = {
  map: {
    padding: '15px 20px',
    borderRadius: '5px',
  },
  main: {
    padding: '0',
    borderRadius: '20px',
  },
};

const FLEX_CENTER = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalMain = styled.section`
  width: 100%;
  z-index: 20;
`;

const ModalDim = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
`;

const ModalWrap = styled.div`
  ${FLEX_CENTER}
  width: 100%;
  max-width: 500px;
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding: ${({ type }) => MODAL_TYPE[type]?.padding || '20px'};
  border-radius: ${({ type }) => MODAL_TYPE[type]?.borderRadius || '5px'};
  background-color: ${props => props.theme.grayscaleA};
  z-index: 20;
`;

const ModalContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ModalTitle = styled.div`
  padding-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
`;

const ModalDesc = styled.div`
  padding: 15px;
  text-align: center;
  font-size: 14px;
`;

const ModalBtnWrap = styled.ul`
  ${FLEX_CENTER}
  width: 100%;
`;

const ModalButton = styled.li`
  ${FLEX_CENTER}
  width: 50%;
  background-color: #9f1818;
  color: ${props => props.theme.grayscaleA};
  font-weight: 600;
  font-size: 17px;
  line-height: 50px;
  cursor: pointer;
`;
