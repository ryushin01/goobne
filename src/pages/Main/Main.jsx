import { useEffect, useState } from 'react';
import BigBanner from './components/BigBanner';
import OvenMenu from './components/OvenMenu';
import GoobNews from './components/GoobNews';
import GoobStar from './components/GoobStar';
import Goobtube from './components/Goobtube';
import styled from 'styled-components';
import Portal from '../../components/Modal/Portal';
import Modal from '../../components/Modal/Modal';
import MainModalContent from '../../components/Modal/MainModalContent';

const Main = () => {
  /** Scroll Y값을 저장하기 위한 state */
  const [scrollY, setScrollY] = useState(0);
  /** Modal을 여닫기 위한 state */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * useEffect를 이용하여 scroll에 대한 값을 scrollY 값이 변경될 때마다 업데이트 (의존성 배열에 scrollY를 넣어줌)
   * removeEventListener를 이용하여 메모리 누수 방지 (사용안하면 메모리 누수 발생 [계속 데이터가 쌓임])
   * */
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  /** 페이지 첫 랜더링 시 Modal 오픈되도록 useEffect 추가 */
  useEffect(() => {
    handlerModal(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * 스크롤 이벤트가 발생할 때마다 scrollY값을 업데이트
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  /** Modal의 상태값을 변화시키기 위한 함수 */
  const handlerModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <MainContainer>
        <BigBanner />
        <OvenMenu scrollY={scrollY} />
        <GoobNews />
        <GoobStar />
        <Goobtube />
      </MainContainer>
      <Portal>
        {isModalOpen && (
          <Modal
            title="굽은 당신의 허리를 펴줄 단 하나의 치킨!"
            content={<MainModalContent ModalClose={handlerModal} />}
            size="small"
            isCloseBtn={true}
          />
        )}
      </Portal>
    </>
  );
};

export default Main;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
