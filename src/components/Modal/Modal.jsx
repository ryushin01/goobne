import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({ onClick, title, desc, closeBtn, bottomBtn }) => {
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
        <Main>
          <ModalWrap ref={modalRef}>
            <ModalContainer>
              {closeBtn && <button onClick={closeModal}>x</button>}
              <div>{title}</div>
              <div>
                {desc}
                <button onClick={onClick} />
              </div>
              {bottomBtn && (
                <ModalBtnWrap>
                  <button onClick={closeModal}>오늘 하루 보지 않기</button>
                  <button onClick={closeModal}>닫기</button>
                </ModalBtnWrap>
              )}
            </ModalContainer>
          </ModalWrap>
        </Main>
      )}
    </>
  );
};

const Main = styled.section`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 50;
`;

const ModalWrap = styled.div`
  /* width: 100%; */
  border: 1px solid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  padding: 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grayscaleA};
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 90%;
  margin: auto;
`;

const ModalBtnWrap = styled.div`
  display: flex;
`;

export default Modal;
