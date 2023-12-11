import { useState } from 'react';
import Portal from './components/Modal/Portal';
import Modal from './components/Modal/Modal';
import styled from 'styled-components';
import TestComponent from './TestComponent';

const Test = () => {
  // modal을 여닫기 위한 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 버튼을 클릭시 defaultModal이 실행되어 modal이 열림
  const defaultModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* modal을 열기 위한 버튼 */}
      <TestButton>
        <button onClick={defaultModal}>Click</button>
      </TestButton>

      {/* modal이 위치한 dom에서 modal을 열기 위한 portal을 정의 */}
      <Portal>
        {/* modal 제목은 title, 내용은 content, 크기는 size, 닫기버튼은 isCloseBtn으로 정의 */}
        {isModalOpen && (
          <Modal
            title="제목"
            content={<TestComponent />}
            size="medium"
            isCloseBtn={true}
          />
        )}
      </Portal>
    </>
  );
};

export default Test;

const TestButton = styled.div`
  margin: auto;
`;
