import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

// 주문방법선택 페이지 내의 배너를 위한 컴포넌트
const DeliverySwiper = () => {
  return (
    // 구동방식 - 자동재생(2초)
    <Swiper
      modules={[Autoplay]}
      spaceBetween={3}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
    >
      {BANNER_IMG.map(({ id, img, alt }) => (
        <SwiperSlide key={id}>
          <SwiperImgWrap>
            <img src={img} alt={alt} />
          </SwiperImgWrap>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SwiperImgWrap = styled.div`
  width: 100%;
  height: 156px;
  cursor: pointer;
`;

export default DeliverySwiper;

const BANNER_IMG = [
  {
    id: 1,
    img: './public/images/CartSwiper_1.jpg',
    alt: '주문방법선택 배너1',
  },
  {
    id: 2,
    img: './public/images/CartSwiper_2.jpg',
    alt: '주문방법선택 배너2',
  },
  {
    id: 3,
    img: './public/images/CartSwiper_3.jpg',
    alt: '주문방법선택 배너3',
  },
];
