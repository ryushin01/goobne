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
  // 모달을 여닫기 위한 state
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef(null);

  // 모달 외부 클릭시 모달 닫기
  useEffect(() => {
    // 모달이 열려있고, 클릭한 부분이 모달 내부가 아닐 때 closeModal 함수를 실행
    const handleDimClick = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };
    // 모달이 열려있을 때 mousedown를 감지하여 handleDimClick 함수를 실행
    if (isModalOpen) {
      window.addEventListener('mousedown', handleDimClick);
    }
    return () => {
      window.removeEventListener('mousedown', handleDimClick);
    };
  }, [isModalOpen]);

  // esc 누르면 모달 닫기
  useEffect(() => {
    const esc = e => {
      // Escape(esc)키가 눌리면 closeModal 함수를 실행
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    // keydown event를 감지하여 esc 함수를 실행
    window.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('keydown', esc);
    };
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
              <ModalContent>
                <ModalTitle>{title}</ModalTitle>
                <ModalDesc>{desc}</ModalDesc>
              </ModalContent>
            </ModalContainer>
          </ModalWrap>
        </ModalMain>
      )}
    </>
  );
};

export default Modal;

const MODAL_SIZE = {
  small: {
    padding: '15px',
    borderRadius: '5px',
  },
  medium: {
    padding: '25px',
    borderRadius: '5px',
  },
  large: {
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
  width: 100%;
  margin: auto;
`;

const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  ${FlexCenter}
  flex-direction: column;
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
