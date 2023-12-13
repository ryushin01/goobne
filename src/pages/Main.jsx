import { useEffect, useRef, useState } from 'react';
import BigBanner from '../components/BigBanner/BigBanner';
import Band from '../components/Swiper/Band';
import styled from 'styled-components';

const Main = () => {
  /** Scroll Y값을 저장하기 위한 state */
  const [scrollY, setScrollY] = useState(0);

  const isScrollY = scrollY >= window.innerHeight / 3;

  // const Observer = new IntersectionObserver((entries, observer) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       console.log('isIntersecting');
  //     } else {
  //       console.log('isNotIntersecting');
  //     }
  //   });
  // });

  // const section = Observer.observe(document.querySelector('section'));
  // Observer.observe(section[0]);
  // Observer.observe(section[1]);

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

  /**
   * 스크롤 이벤트가 발생할 때마다 scrollY값을 업데이트
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <main>
      <MainContainer>
        <BigBannerContainer>
          <BigBanner />
        </BigBannerContainer>
        <BandContainer className={isScrollY && 'pageOffset'}>
          <Band scrollY={scrollY} />
        </BandContainer>
      </MainContainer>
    </main>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BigBannerContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const BandContainer = styled.section`
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
`;
