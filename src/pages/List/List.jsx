import styled from 'styled-components';
import ListItem from './components/ListItem';
import { API } from '../../config';
import { customAxios } from '../../API/API';
import { useEffect, useState } from 'react';

const List = () => {
  const [productList, setProductList] = useState('');
  console.log(productList);

  useEffect(() => {
    requestProductListItemDataGet();
  }, []);

  const requestProductListItemDataGet = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(API.LISTITEM)
      .then(response => {
        setProductList(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
  };
  if (!productList) return null;

  return (
    <ListWrapMain>
      <ListContainerSection>
        <h2>메뉴</h2>

        <ButtonWrapDiv>
          <button>전체</button>
          <button>치킨</button>
          <button>피자</button>
          <button>세트</button>
        </ButtonWrapDiv>

        <ListContainerUl>
          {productList?.map(
            (
              { imgSrc, price, title, badgeHot, badgeMd, badgeNew, badgeBast },
              index,
            ) => {
              return (
                <ListItemLi key={index}>
                  <ListItem
                    imgSrc={imgSrc}
                    price={price}
                    title={title}
                    badgeNew={badgeNew}
                    badgeBast={badgeBast}
                    badgeMd={badgeMd}
                    badgeHot={badgeHot}
                  ></ListItem>
                </ListItemLi>
              );
            },
          )}
        </ListContainerUl>
      </ListContainerSection>
    </ListWrapMain>
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
  width: 1200px;
  margin: 0 auto;
  & > h2 {
    font-weight: 900;
    font-size: 40px;
  }
`;

const ListContainerUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
  margin-bottom: 200px;
`;
const ListItemLi = styled.li`
  display: flex;
  justify-content: center;
`;

const ButtonWrapDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  & > button {
    background-color: black;
    color: white;
    padding: 10px 5px;
    border: none;
    border-radius: 20px;
    width: 100px;
  }
`;
