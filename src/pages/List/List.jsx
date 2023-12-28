import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemComponent from './components/ItemComponent';
import MenuChipGroup from '../../components/Chip/MenuChipGroup';
import Loading from '../../components/Loading/loading';
import { customAxios } from '../../API/API';
import styled from 'styled-components';

const List = () => {
  /** 프로덕트 리스트를 데이터를 담을 useState를 정의합니다. */
  const [productListData, setProductListData] = useState([]);

  /**로딩페이지를 토글할 useState를 정의합니다. */
  const [loading, setLoading] = useState(true);

  /**
   * useNavigate()를 navigate 변수에 담습니다.
   */
  const navigate = useNavigate();

  /**
   * 1.useEffect 실행됩니다.
   * 2.productList값이 바뀔때마다 chipSelect 세터함수를 실행합니다.
   */
  useEffect(() => {
    setLoading(true);
    chipSelect('All');
  }, []);

  /**
   * 1.chip버튼이 클릭되면 이벤트인자로 chip에 category를 인자로 받습니다.
   * 2.axios get메서드가 카테고리에 맞는 json목데이터를 불러옵니다.
   * 3.response 데이터를 productList useState를 담습니다.
   * 위 useEffect 확인하세요.
   * 여기를 확인하세요.
   */
  const chipSelect = async category => {
    try {
      const response = await customAxios.get(`/ListItem${category}.json`);
      setProductListData(response.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * 1.클릭이벤트 감지될때마다 실행되는 함수입니다.
   * 2.아이템에 고유에 id를 인자로 받습니다.
   * 3.아이디를 적용한 url로 네비게이트 해줍니다.
   */
  const listItemClick = id => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      {loading && <Loading />}
      <ListWrapMain>
        <ListContainerSection>
          <h2>메뉴보기</h2>

          <ButtonWrapDiv>
            <MenuChipGroup chipSelect={chipSelect}></MenuChipGroup>
          </ButtonWrapDiv>

          {productListData.length > 0 ? (
            <ListContainerUl>
              {productListData?.map(
                ({ id, image, price, mainTitle, badge, alt }, index) => {
                  return (
                    <ListItemLi key={index}>
                      <ItemComponent
                        id={id}
                        image={image}
                        alt={alt}
                        price={price}
                        mainTitle={mainTitle}
                        badge={badge}
                        onClick={listItemClick}
                        productListData={productListData}
                      />
                    </ListItemLi>
                  );
                },
              )}
            </ListContainerUl>
          ) : (
            <NotDataImgInnerWrap>
              <img
                src="https://ryushin01.github.io/goobne/images/notData.png"
                alt="메뉴가 없음 이미지"
              />
            </NotDataImgInnerWrap>
          )}
        </ListContainerSection>
      </ListWrapMain>
    </>
  );
};

export default List;

const ListWrapMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 200px;
  background-color: ${props => props.theme.grayscaleB};
`;

const ListContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1300px;
  margin: 0 auto;
  & > h2 {
    font-weight: 900;
    font-size: 33px;
  }
`;

const ListContainerUl = styled.ul`
  position: relative;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
  margin-bottom: 200px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr; /* 각 아이템이 한 열에 하나씩 쌓이도록 설정 */
  }
`;

const ListItemLi = styled.li`
  display: flex;
  justify-content: center;

  &:first-child {
    grid-column: span 2;
    grid-row: span 2;
    .emphasisContainer {
      width: 100%;
    }
    .emphasisImgWrap {
      position: relative;
      display: flex;
      background-color: white;
      width: 600px;
      height: 670px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }
    .emphasisImgInner {
      width: 400px;
      height: 400px;
    }
    .emphasisTitleInner {
      font-size: 50px;
    }

    .emphasisTitlePriceWrap {
      margin-top: 40px;
      width: 100%;
    }
    .emphasisPriceInner {
      font-size: 30px;
    }
    .emphasisCartIconBtn {
      width: 40px;
      position: absolute;
      right: 15px;
      top: 40px;
    }
    .emphasisBadge {
      position: absolute;
      top: 0;
      left: 20px;
      & > span {
        font-size: 20px;
      }
    }
  }
`;

const ButtonWrapDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 50px 0px;
  & > button {
    background-color: black;
    color: white;
    padding: 10px 5px;
    border: none;
    border-radius: 20px;
    width: 100px;
  }
`;
const NotDataImgInnerWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 30px;
  & > img {
    object-fit: cover;
  }
`;
