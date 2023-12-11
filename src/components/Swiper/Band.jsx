import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import styled from 'styled-components';

/**
 * Main 페이지에 사용되는 Swiper 컴포넌트 입니다.
 */
const Band = () => {
  return (
    <BandContainer>
      <TitleWrap>
        <h2>Oven Menu</h2>
      </TitleWrap>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        slidesPerView={'4'}
        spaceBetween={30}
        loop
        coverflowEffect={{
          rotate: 30, // 슬라이드 회전 각도
          stretch: 0, // 슬라이드 사이의 간격
          depth: 100, // 슬라이드와 슬라이드 사이의 거리
          modifier: 1, // 슬라이드 크기
          slideShadows: true, // 슬라이드 그림자
        }}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrap>
            <Link to="#">
              <img src="../goobne/images/main_banner_01.jpg" />
            </Link>
          </ImageWrap>
        </SwiperSlide>
      </Swiper>
    </BandContainer>
  );
};

export default Band;

const BandContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 150px;
  background-color: #e0e0e0;

  & > .mySwiper {
    height: 400px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 55px;
  font-family: 'Rubik';
  font-weight: 900;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;

  & > a {
    width: 100%;
    height: 100%;
  }

  & img {
    height: 100%;
    object-fit: cover;
  }
`;
