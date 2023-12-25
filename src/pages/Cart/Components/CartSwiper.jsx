import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';

const CartSwiper = () => {
  //SwiperItem의 값을 받기 위하여 State를 생성합니다.
  const [swiperItem, setSwiperItem] = useState([]);

  //페이지 렌더링시 제일처음 SwiperItem을 보여주기 위하여 생성합니다.
  useEffect(() => {
    getSwiperItemInfoData();
  }, []);

  //SwiperItem을 가져오는 비동기 함수를 정의합니다.
  const getSwiperItemInfoData = async () => {
    const request = await customAxios //eslint-disable-line no-unused-vars
      .get(API.CART_SWIPER) //API.CART_SWIPER 로 GET 요청을 보냅니다.
      .then(response => {
        setSwiperItem(response.data.result);
      }) //요청이 성공하였을때 setSwiperItem함수가 실행, 데이터를 가져옵니다.
      .catch(error => {
        if (error) {
          alert('리스트 생성에 실패했습니다.'); //요청이 실패시 alert생성.
        }
      });
  };
  // SwiperItem이 없는 경우, null을 반환합니다.
  if (!swiperItem) return null;

  return (
    <CartSwiperContainer>
      <Swiper
        modules={[Navigation]}
        spaceBetween={6}
        slidesPerView={4}
        navigation={true}
        className="swiperContainer"
      >
        {swiperItem.map(({ id, img, alt, name }) => (
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
    </CartSwiperContainer>
  );
};

const CartSwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > .swiperContainer {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev {
    background: url('src/svg/Cart/arrow-left-short.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 28%;
    left: 0;

    &::after {
      display: none;
    }
  }

  .swiper-button-next {
    background: url('src/svg/Cart/arrow-right-short.svg') no-repeat;
    background-size: contain;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 28%;

    &::after {
      display: none;
    }
  }
`;

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
