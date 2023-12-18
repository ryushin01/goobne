import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const Goobtube = () => {
  /** goobtube의 Data를 받아와 저장하기 위해 useState 생성 */
  const [goobutbeDataList, setGoobtubeDataList] = useState([]);

  /** 화면이 처음 로딩될 때 goobtube에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestGoobtubeDataGet();
  }, []);

  /**
   * Custom Axios를 이용하여 goobutbeDataList 대한 Data를 Json파일에서 받아온다.
   * response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * 1. customAxios를 이용하여 GOOB_TUBE 대한 Data를 받아온다.
   * 2. 받아온 Data를 setGoobtubeDataList 이용하여 goobutbeDataList 저장한다.
   * 3. 에러가 발생했을 경우 alert를 띄운다.
   * */
  const requestGoobtubeDataGet = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.GOOB_TUBE)
      .then(response => {
        setGoobtubeDataList(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러가 발생했습니다.');
        }
      });
  };
  /** goobtubeDataList에 데이터가 없다면 null Return */
  if (!goobutbeDataList) return null;

  return (
    <MainGoobtubeContainer>
      <h2>Goobtube</h2>
      <TextContainer>
        <TextSlide>
          <ul>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>😠 RELAX YOUR BACK</span>
            </li>
            <li>
              <span>🤬 RELAX YOUR BACK</span>
            </li>
          </ul>
        </TextSlide>
      </TextContainer>
      <SlideContainer>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {goobutbeDataList.map(({ id, href, src, alt }) => {
            return (
              <SwiperSlide key={id}>
                <Link to={href}>
                  <img src={src} alt={alt} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SlideContainer>
      <PartnersContainer>
        <PartnersInnerWrap>
          <Link to="#">
            <img src="../goobne/images/PartnersLogo1.png" alt="PartnersLogo" />
          </Link>
          <Link to="#">
            <img src="../goobne/images/PartnersLogo2.png" alt="PartnersLogo" />
          </Link>
        </PartnersInnerWrap>
      </PartnersContainer>
    </MainGoobtubeContainer>
  );
};

export default Goobtube;

const MainGoobtubeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;

  & > h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    font-size: 52px;
    font-weight: 800;
    font-family: 'Rubik', sans-serif;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 90px;
  top: 15%;
  white-space: nowrap;
  border-top: 1px solid ${props => props.theme.grayscaleH};
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
  overflow: hidden;
`;

const TextSlideAnimation = keyframes`
    100% {
        transform: translateX(calc(-100px * 12));
    }
`;

const TextSlide = styled.div`
  width: 100%;
  animation: ${TextSlideAnimation} 20s linear infinite;

  & > ul {
    width: 100%;
    display: flex;
    font-size: 24px;
    font-weight: 800;
    font-family: 'Rubik', sans-serif;

    & > li {
      padding-right: 20px;
    }
  }
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;

  & > .mySwiper {
    width: 80%;
    height: 300px;
    overflow: hidden;

    & img {
      object-fit: cover; // 이미지가 잘리지 않고 꽉차게 표시
      border: 2px solid ${props => props.theme.grayscaleH};
    }

    & a {
      height: 100%; // a태그의 height를 100%로 설정해야 이미지가 꽉차게 표시
    }
  }
`;

const PartnersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80%;
  width: 80%;
  border-top: 1px solid ${props => props.theme.grayscaleH};
`;

const PartnersInnerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  & > a {
    width: 100px;
    height: 80px;
    margin-top: 50px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
