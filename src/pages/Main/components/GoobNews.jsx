import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { customAxios } from '../../../API/API';
import { API } from '../../../config';
import Loading from '../../../components/Loading/loading';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';

const GoobNews = () => {
  /** newsData 데이터를 받아오기 위한 useState 생성 */
  const [newsDataList, setNewsDataList] = useState([]);

  /**로딩페이지를 토글할 useState를 정의합니다. */
  const [loading, setLoading] = useState(true);

  /** Button에서 페이지 이동을 위한 Navigate 함수 추가 */
  const navigate = useNavigate();

  /** 화면이 처음 로딩될 때 배너에 대한 정보를 받아오기 위한 useEffect */
  useEffect(() => {
    setLoading(true);
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
    try {
      const request = await customAxios.get(API.GOOB_NEWS);
      setNewsDataList(request.data.result);
      setLoading(false);
    } catch (error) {
      alert('에러가 발생했습니다.');
    }
  };

  return (
    <>
      {loading && <Loading />}
      <MainContainer>
        <h2>Goobnews</h2>
        <MainInnerListWrap>
          {newsDataList.map(({ id, href, tag, title, src, alt }) => {
            return (
              <li key={id}>
                <TextWrap>
                  <Link to={href}>
                    <span>{tag}</span>
                    <span>{title}</span>
                  </Link>
                </TextWrap>
                <ImgWrap className="imgLoad">
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
    </>
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
  min-height: 100vh;
  padding: 0 60px;

  & > h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%);
    font-size: 48px;
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

    &:hover {
      // li에 hover가 되었을 때 imgLoad 클래스에 대한 css를 적용
      .imgLoad {
        opacity: 1;
        z-index: 1;
      }
    }
  }
`;

const TextWrap = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.grayscaleH};

  & > a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 50px 0;

    &:hover {
      background-color: ${props => props.theme.grayscaleH};
      color: ${props => props.theme.grayscaleA};
    }

    & > span {
      min-width: 480px;
      padding-left: 50px;
      font-size: 30px;
      font-weight: bold;
      white-space: nowrap; // 너무 긴 글자가 있을 경우 글자가 넘어가지 않고 한줄로 표시

      &:last-child {
        overflow: hidden; // 너무 긴 글자가 있을 경우 넘어가는 글자는 보이지 않도록 설정
        text-overflow: ellipsis; // 너무 긴 글자가 있을 경우 넘어가는 글자는 ...으로 표시
        flex: 1; // span의 크기가 고정되어 있을 경우 글자가 넘어가지 않고 ...으로 표시되지 않기 때문에 flex: 1을 이용하여 span의 크기를 유동적으로 설정
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
  overflow: hidden; // 이미지가 border를 넘어가지 않도록 설정
  opacity: 0; // 이미지가 로드되기 전까지는 opacity를 0으로 설정하여 이미지가 로드되기 전까지는 보이지 않도록 설정
  z-index: -1; // 이미지가 로드되기 전까지는 z-index를 -1로 설정하여 이미지가 로드되기 전까지는 클릭이 되지 않도록 설정
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  & > img {
    height: 100%;
    object-fit: cover;
  }
`;

const ButtonWrap = styled.div`
  width: 300px;
  margin-top: 50px;
`;
