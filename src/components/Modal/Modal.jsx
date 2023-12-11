import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ModalClose } from '../../svg/ModalClose.svg';

/**
 * Modal props list
 * @property {string} title                          - 해당 모달의 제목
 * @property {string} desc                           - 해당 모달의 내용
 * @property {boolean} closeBtn                      - 모달 닫기 버튼의 표시 여부
 * @property {string} size: small, medium, large     - 모달창의 크기
 */

const Modal = ({ title, desc, closeBtn, ...props }) => {
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

  // esc 누르면 모달 닫기
  useEffect(() => {
    const esc = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', esc);
  }, []);

  // 모달 닫기시 실행되는 함수
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
              <ModalButton>
                {closeBtn && <ModalClose onClick={closeModal}></ModalClose>}
              </ModalButton>
              <ModalTitle>{title}</ModalTitle>
              <ModalDesc>{desc}</ModalDesc>
            </ModalContainer>
          </ModalWrap>
        </ModalMain>
      )}
    </>
  );
};

export default Modal;

const MODAL_SIZE = {
  map: {
    padding: '15px 20px',
    borderRadius: '5px',
  },
  main: {
    padding: '0',
    borderRadius: '20px',
  },
};

const FlexCenter = `
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
  ${FlexCenter}
  width: 100%;
  max-width: 500px;
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding: ${({ size }) => MODAL_SIZE[size]?.padding || '20px'};
  border-radius: ${({ size }) => MODAL_SIZE[size]?.borderRadius || '5px'};
  background-color: ${props => props.theme.grayscaleA};
  z-index: 20;
`;

const ModalContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ModalTitle = styled.div`
  padding-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
`;

const ModalDesc = styled.div`
  padding: 15px;
  font-size: 14px;
`;
