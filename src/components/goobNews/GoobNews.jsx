import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { createCustomAxios } from '../../API/API';
import { Link } from 'react-router-dom';

const GoobNews = () => {
  /** BigBanner의 데이터를 받아오기 위한 useState 생성 */
  const [newsDataList, setNewsDataList] = useState([]);

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestNewsDataGet();
  }, []);

  /** BigBanner에 대한 Data를 받아오기 위한 Axios BaseURL */
  const NewsAxiosBaseURL = '../goobne/data/GoobNewsData.json';
  /** createCustomAxios 함수를 불러와 BaseURL을 적용시켜준다. */
  const NewsAxios = createCustomAxios(NewsAxiosBaseURL);

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
      <span>Goobnews</span>
      <MainInnerWrap>
        {newsDataList.map(({ id, href, tag, title }) => {
          return (
            <div key={id}>
              <TextWrap>
                <Link to={href}>
                  <span>{tag}</span>
                  <span>{title}</span>
                </Link>
              </TextWrap>
              <ImgWrap>
                <img src="../goobne/images/main_banner_01.jpg" alt="이미지" />
              </ImgWrap>
            </div>
          );
        })}
      </MainInnerWrap>
    </MainContainer>
  );
};

export default GoobNews;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #e0e0e0;
  width: 100%;
  height: 100vh;
  padding: 0 60px;

  & > span {
    position: absolute;
    top: 10%;
    left: 50%;
    font-size: 52px;
    font-weight: bold;
    font-family: 'Rubik';
  }
`;

const MainInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 100px;
  border-bottom: 1px solid #000;
`;

const TextWrap = styled.div`
  display: flex;
  border-top: 1px solid #000;

  & > a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 40px 0;

    &:hover {
      background-color: #000;
      color: #fff;
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
  border: 2px solid #000;
  border-radius: 15px;
  overflow: hidden;
  opacity: 0;

  & > img {
    height: 100%;
    object-fit: cover;
  }
`;
