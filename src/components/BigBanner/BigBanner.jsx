import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BigBanner = () => {
  return (
    <BigBannerContainer>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="swiperContainer"
      >
        <SwiperSlide>
          <img
            src="../goobne/images/main_banner_01.jpg"
            alt="메인 배너 이미지"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../goobne/images/main_banner_02.jpg"
            alt="메인 배너 이미지"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../goobne/images/main_banner_03.jpg"
            alt="메인 배너 이미지"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../goobne/images/main_banner_04.jpg"
            alt="메인 배너 이미지"
          />
        </SwiperSlide>
      </Swiper>
    </BigBannerContainer>
  );
};

export default BigBanner;

const BigBannerContainer = styled.section`
  & > .swiperContainer {
    width: 100%;
    height: 900px;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);

    .swiper-pagination-bullet {
      border: 6px solid #ff0000;
      margin-right: 15px;
    }

    .swiper-pagination-bullet-active {
      background-color: #fff;
      width: 25px;
      height: 25px;
    }
  }

  & > img {
    object-fit: contain;
  }
`;
