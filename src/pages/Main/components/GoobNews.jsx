import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';

const GoobNews = () => {
  /** newsData 데이터를 받아오기 위한 useState 생성 */
  const [newsDataList, setNewsDataList] = useState([]);
  /** Mouse Hover 시 Image를 Load 하기 위한 useState 생성 */
  const [imgLoad, setImgLoad] = useState(false);

  /** Button에서 페이지 이동을 위한 Navigate 함수 추가 */
  const navigate = useNavigate();

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    requestNewsDataGet();
  }, []);

  /**
   * Custom Axios를 이용하여 NewsDataList 대한 Data를 Json파일에서 받아온다.
   * response는 변수지정을 하지만 실제로 사용하지 않기 때문에 에러줄을 없애기 위해 eslint-disable-line no-unused-vars를 사용
   * 1. customAxios를 이용하여 API.GOOB_NEWS 대한 Data를 받아온다.
   * 2. 받아온 Data를 setNewsDataList 이용하여 NewsDataList 저장한다.
   * 3. 에러가 발생했을 경우 alert를 띄운다.
   * */
  const requestNewsDataGet = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.GOOB_NEWS)
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
      <ButtonWrap>
        <Button
          type="button"
          content="더보기 >"
          color="beige"
          size="large"
          onClick={() => {
            navigate('/goobne');
          }}
        />
      </ButtonWrap>
    </MainContainer>
  );
};

export default GoobNews;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
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
  margin-top: 200px;
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

const ButtonWrap = styled.div`
  width: 300px;
  margin-top: 50px;
`;
