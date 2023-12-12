import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { createCustomAxios } from '../../API/API';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BigBanner = () => {
  /** BigBanner의 데이터를 받아오기 위한 useState 생성 */
  const [bigBannerList, setBigBannerList] = useState([]);

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestBigBannerDataGet();
  }, []);

  /** BigBanner에 대한 Data를 받아오기 위한 Axios BaseURL */
  const BigBannerAxiosBaseURL = '../goobne/data/BigBannerData.json';
  /** createCustomAxios 함수를 불러와 BaseURL을 적용시켜준다. */
  const BigBannerAxios = createCustomAxios(BigBannerAxiosBaseURL);

  /**
   * Custom Axios를 이용하여 BigBanner에 대한 Data를 Json파일에서 받아온다.
   * @property response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * */
  const requestBigBannerDataGet = async () => {
    const response = await BigBannerAxios.get() //eslint-disable-line no-unused-vars
      .then(response => {
        setBigBannerList(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러가 발생했습니다.');
        }
      });
  };

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
        {bigBannerList.map(item => {
          const { id, href, src, alt, title, subTitle } = item;
          return (
            <SwiperSlide key={id}>
              <Link to={href}>
                <img src={src} alt={alt} />
              </Link>
              <TextWrap>
                <TextInnerWrap>
                  <span>{title}</span>
                  <span>{subTitle}</span>
                </TextInnerWrap>
              </TextWrap>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BigBannerContainer>
  );
};

export default BigBanner;

const BigBannerContainer = styled.section`
  & > .swiperContainer {
    width: 100%;
    height: 100vh;
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 90%;
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

  & img {
    height: 100vh;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateX(-50%);
  z-index: 999;
`;

const TextInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.6;

  & > span:first-child {
    font-size: 50px;
  }

  & > span:last-child {
    font-size: 30px;
  }
`;
