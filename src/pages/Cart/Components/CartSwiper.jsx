import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const CartSwiper = () => {
  return (
    <Swiper modules={[Navigation]} spaceBetween={6} slidesPerView={4}>
      {BANNER_IMG.map(({ id, img, alt, name }) => (
        <SwiperSlide key={id}>
          <CartSwiperBox>
            <SwiperImgWrap>
              <img src={img} alt={alt} />
            </SwiperImgWrap>
            <SwiperTitle>{name}</SwiperTitle>
          </CartSwiperBox>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const CartSwiperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 325px;
`;

const SwiperImgWrap = styled.div`
  width: 190px;
  cursor: pointer;
`;

const SwiperTitle = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export default CartSwiper;

const BANNER_IMG = [
  {
    id: 1,
    img: './public/images/main_chicken_01.jpg',
    alt: '장바구니 배너1',
    name: '마라 바사삭',
  },
  {
    id: 2,
    img: './public/images/main_chicken_02.jpg',
    alt: '장바구니 배너2',
    name: '미니 치킨',
  },
  {
    id: 3,
    img: './public/images/main_chicken_03.jpg',
    alt: '장바구니 배너3',
    name: '마라 곱빼기',
  },
  {
    id: 4,
    img: './public/images/main_beer.jpg',
    alt: '장바구니 배너4',
    name: '맥주',
  },
  {
    id: 5,
    img: './public/images/main_salad.jpg',
    alt: '장바구니 배너5',
    name: '기영이 사라다',
  },
  {
    id: 6,
    img: './public/images/main_side_dish.jpg',
    alt: '장바구니 배너6',
    name: '파스타',
  },
];
