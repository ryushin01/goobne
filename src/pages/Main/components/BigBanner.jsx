import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

const BigBanner = () => {
  /** BigBanner의 데이터를 받아오기 위한 useState 생성 */
  const [bigBannerList, setBigBannerList] = useState([]);

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestBigBannerDataGet();
  }, []);

  /**
   * Custom Axios를 이용하여 BigBanner에 대한 Data를 Json파일에서 받아온다.
   * response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * 1. customAxios를 이용하여 API.BIG_BANNER에 대한 Data를 받아온다.
   * 2. 받아온 Data를 setBigBannerList를 이용하여 bigBannerList에 저장한다.
   * 3. 에러가 발생했을 경우 alert를 띄운다.
   * */
  const requestBigBannerDataGet = async () => {
    try {
      const request = await customAxios.get(`${API.BIG_BANNER}`);
      setBigBannerList(request.data.result);
    } catch (error) {
      alert('에러가 발생했습니다.');
    }
  };

  return (
    <BigBannerContainer>
      <Swiper
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
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
  width: 100%;
  height: 100vh;
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
      border: 6px solid ${props => props.theme.primaryColor};
      margin-right: 15px;
    }

    .swiper-pagination-bullet-active {
      background-color: ${props => props.theme.grayscaleA};
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
  color: ${props => props.theme.grayscaleA};
  text-shadow: 3px 3px 3px ${props => props.theme.transparentB};
  line-height: 1.6;

  & > span:first-child {
    font-size: 50px;
  }

  & > span:last-child {
    font-size: 30px;
  }
`;
