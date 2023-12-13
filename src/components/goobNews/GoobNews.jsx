import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createCustomAxios } from '../../API/API';
import { API } from '../../config';
import styled from 'styled-components';

const GoobNews = () => {
  /** newsData 데이터를 받아오기 위한 useState 생성 */
  const [newsDataList, setNewsDataList] = useState([]);
  /** Mouse Hover 시 Image를 Load 하기 위한 useState 생성 */
  const [imgLoad, setImgLoad] = useState(false);

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestNewsDataGet();
  }, []);

  /** createCustomAxios 함수를 불러와 BaseURL을 적용시켜준다. */
  const NewsAxios = createCustomAxios(API.GOOB_NEWS);

  /**
   * Custom Axios를 이용하여 BigBanner에 대한 Data를 Json파일에서 받아온다.
   * @property response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * */
  const requestNewsDataGet = async () => {
    const response = await NewsAxios.get() //eslint-disable-line no-unused-vars
      .then(response => {
        setNewsDataList(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러가 발생했습니다.');
        }
      });
  };

  if (!newsDataList) return null;
  return (
    <MainContainer>
      <h2>Goobnews</h2>
      <MainInnerListWrap>
        {newsDataList.map(({ id, href, tag, title, src, alt }) => {
          return (
            <li key={id}>
              <TextWrap>
                <Link
                  to={href}
                  onMouseEnter={() => {
                    setImgLoad(id);
                  }}
                  onMouseLeave={() => {
                    setImgLoad('');
                  }}
                >
                  <span>{tag}</span>
                  <span>{title}</span>
                </Link>
              </TextWrap>
              <ImgWrap className={imgLoad === id && 'load'}>
                <img src={src} alt={alt} />
              </ImgWrap>
            </li>
          );
        })}
      </MainInnerListWrap>
    </MainContainer>
  );
};

export default GoobNews;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.grayscaleB};
  width: 100%;
  height: 100vh;
  padding: 0 60px;

  & > h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    font-size: 52px;
    font-weight: bold;
    font-family: 'Rubik';
  }
`;

const MainInnerListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > li {
    position: relative;
  }
`;

const TextWrap = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.grayscaleH};

  & > a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 40px 0;

    &:hover {
      background-color: ${props => props.theme.grayscaleH};
      color: ${props => props.theme.grayscaleA};
    }

    & > span {
      min-width: 480px;
      padding-left: 50px;
      font-size: 30px;
      font-weight: bold;
      white-space: nowrap;

      &:last-child {
        flex: 1;
      }
    }
  }
`;

const ImgWrap = styled.div`
  position: absolute;
  top: -100px;
  right: 100px;
  width: 400px;
  height: 300px;
  rotate: -15deg;
  border: 2px solid ${props => props.theme.grayscaleH};
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 99;

  & > img {
    height: 100%;
    object-fit: cover;
  }

  &.load {
    opacity: 1;
  }
`;
