import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createCustomAxios } from '../../API/API';
import styled from 'styled-components';

const GoobNews = () => {
  /** BigBanner의 데이터를 받아오기 위한 useState 생성 */
  const [newsDataList, setNewsDataList] = useState([]);
  /** Mouse Hover 시 Image를 Load 하기 위한 useState 생성 */
  const [imgLoad, setImgLoad] = useState(false);
  /** 현재 mouse의 위치를 저장하기 위해 mousePosition State 생성 */
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  /**
   * target으로 삼은 Container의 위치값을 가져오기 위한 함수
   * @property e.clientX target으로 삼은 위치부터
   * */
  const handleMouseMove = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calculateTopValue = () => {
    /** map으로 추가로 생성된 div 박스의 height 값이 110px 이기 때문에 변경될 top의 값을 110씩 변경되도록 변수를 지정해줍니다. */
    const stepIncrement = 110;

    /**
     * stepIncrement와 곱할 값을 구합니다.
     * @param Math.floor 함수를 이용해 계산된 값을 올림처리해줍니다.
     * @param mousePosition.y 기본값으로 400부터 시작하기 때문에 0으로 만들기 위해 400을 마이너스 해줍니다.
     * @param currentStep mousePosition.y 값과 stepIncrement 값을 나눠준 뒤 그 값을 currentStep 변수에 저장합니다.
     * */
    const currentStep = Math.floor((mousePosition.y - 400) / stepIncrement);

    /** currentStep과 stepIncrement 값을 곱해줌으로 써 이미지를 띄워줄 top 값을 구합니다.
     * 계산의 예시를 들어보자면,
     * @param mousePosition.y 300px 이고,
     * @param stepIncrement 110px 일 경우,
     * @param currentStep Math.floor(300 / 110) 을 함으로써 2라는 값이 나오게 되고,
     * @param calculatedTop 2 * 110 이 되어 220이 되며, ImgWrap의 top 값은 220px이 됩니다.*/
    const calculatedTop = currentStep * stepIncrement;

    return calculatedTop;
  };

  if (!newsDataList) return null;
  return (
    <MainContainer>
      <h2>Goobnews</h2>
      <MainInnerWrap>
        {newsDataList.map(({ id, href, tag, title, src, alt }) => {
          const calculatedTop = calculateTopValue();
          return (
            <div key={id}>
              <TextWrap>
                <Link
                  to={href}
                  onMouseEnter={() => {
                    setImgLoad(id);
                  }}
                  onMouseLeave={() => {
                    setImgLoad('');
                  }}
                  onMouseMove={handleMouseMove}
                >
                  <span>{tag}</span>
                  <span>{title}</span>
                </Link>
              </TextWrap>
              <ImgWrap
                className={imgLoad === id && 'load'}
                style={{ top: `${calculatedTop}px` }}
              >
                <img src={src} alt={alt} />
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

const MainInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-top: 100px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
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

  & > img {
    height: 100%;
    object-fit: cover;
  }

  &.load {
    opacity: 1;
  }
`;
