import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as ModalClose } from '../../svg/ModalClose.svg';

/**
 * Modal props list
 * @property {string} title                          - 해당 모달의 제목
 * @property {string} content                        - 해당 모달의 내용
 * @property {boolean} isCloseBtn                    - 모달 닫기 버튼의 표시 여부
 * @property {string} size: small, medium, large     - 모달창의 크기
 */

const Modal = ({ title, content, isCloseBtn, ...props }) => {
  // 모달을 여닫기 위한 state
  const [isModalOpen, setIsModalOpen] = useState(true);

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

    // 해당 이벤트를 삭제하여 메모리 누수를 방지함
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
          <ModalDim onClick={closeModal} />
          <ModalWrap {...props}>
            <ModalButton>
              {isCloseBtn && <ModalClose onClick={closeModal}></ModalClose>}
            </ModalButton>
            <ModalBox>
              <ModalTitle>{title}</ModalTitle>
              <ModalContent>{content}</ModalContent>
            </ModalBox>
          </ModalWrap>
        </ModalMain>
      )}
    </>
  );
};

export default Modal;

const MODAL_SIZE = {
  small: {
    width: '460px',
    padding: '16px',
  },
  medium: {
    width: '600px',
    padding: '25px',
  },
  large: {
    width: '860px',
    padding: '15px',
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
  width: ${({ size }) => MODAL_SIZE[size]?.width || '500px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding: ${({ size }) => MODAL_SIZE[size]?.padding || '20px'};
  border-radius: 5px;
  background-color: ${props => props.theme.grayscaleA};
  z-index: 20;
`;

const ModalButton = styled.p`
  display: flex;
  justify-content: flex-end;
`;

const ModalBox = styled.div`
  ${FlexCenter};
  flex-direction: column;
  width: 100%;
`;

const ModalTitle = styled.span`
  padding-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
`;

const ModalContent = styled.div`
  padding: 15px;
  font-size: 14px;
`;
