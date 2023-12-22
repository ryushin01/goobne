import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../config';
import { customAxios } from '../../API/API';
import axios from 'axios';
import Badge from '../../../src/components/Badge/Badge';
import Button from '../../components/Button/Button';
import RadioGroup from './components/RadioGroup';
import Count from '../../components/Count/Count';
import DropDown from '../../components/DropDown/DropDown';
import styled, { css } from 'styled-components';

const Detail = () => {
  /** detail Page에 대한 Data를 저장하는 useState 입니다. */
  const [detailData, setDetailData] = useState([]);
  /** radio 버튼 선택 id를 저장합니다. 초기값은 0번 입니다. */
  const [radioData, setRadioData] = useState(0);
  /** 상품 수량을 저장하는 useState 입니다. 초기값은 1개 입니다. */
  const [count, setCount] = useState(1);

  const params = useParams();
  const userId = params.id;

  /** useEffect를 이용해 처음 랜더링 될 때 detailData를 가져오는 함수를 실행합니다. */
  useEffect(() => {
    requestDetailDataGet();
  }, [userId]);

  /**
   * detailData를 가져오는 함수 입니다.
   * customAxios를 이용해 API.DETAIL에 요청을 보내고, 응답을 받아 detailData에 저장합니다.
   * 에러가 발생할 경우 alert를 띄웁니다.
   */
  const requestDetailDataGet = async () => {
    const response = await customAxios //eslint-disable-line no-unused-vars
      .get(`${API.DETAIL}`)
      .then(response => {
        setDetailData(response.data.result);
      })
      .catch(error => {
        if (error) {
          alert('에러가 발생했습니다.');
        }
      });
  };

  /** Radio 버튼이 onChange 될 때마다 e.target의 value값을 가져와 RadioData에 저장합니다. */
  const handleRadioChange = value => {
    setRadioData(value);
  };

  /** detailData가 없을 경우 null을 반환합니다. */
  if (!detailData) return null;

  return (
    <DetailContainer>
      {detailData?.map(({ id, mainTitle, productDetail }) => {
        /** radioData의 index로 productDetail의 객체 데이터를 선택합니다. */
        const currentProductDetailData = productDetail?.[radioData];
        /** 상품 가격에 콤마를 추가한 변수 입니다. */
        const GoodsPrice = currentProductDetailData.price.toLocaleString();
        /** 상품 수량에 따른 총 상품 금액을 계산한 변수 입니다. */
        const totalPrice = currentProductDetailData.price * count;
        /** 상품 가격에 콤마를 추가하는 함수 입니다. */
        const addComma = num => {
          return num.toLocaleString();
        };

        if (!currentProductDetailData) return null;
        return (
          <ContainerInnerWrap key={id}>
            <h2>{mainTitle}</h2>
            <DetailWrap>
              <DetailInfoWrap>
                <img
                  src={currentProductDetailData?.image}
                  alt={currentProductDetailData?.alt}
                />
                <DetailInfo>
                  <DropDown
                    country="true"
                    countryInfo={currentProductDetailData?.origin?.bacon}
                  />
                  <DropDown
                    nutrient="true"
                    nutrientInfo={currentProductDetailData?.servingSize}
                  />
                </DetailInfo>
              </DetailInfoWrap>
              <DetailInnerWrap>
                <DetailTextWrap>
                  <BadgeWrap>
                    {currentProductDetailData?.badges?.map((badge, index) => (
                      <Badge key={index} shape={badge} size="large" />
                    ))}
                  </BadgeWrap>
                  <h3>{currentProductDetailData?.title}</h3>
                  <span>{currentProductDetailData?.description}</span>
                  <span>
                    <strong>{GoodsPrice}</strong>원
                  </span>
                </DetailTextWrap>

                <RadioGroup
                  data={currentProductDetailData?.option}
                  onChange={handleRadioChange}
                  setRadioData={setRadioData}
                />

                <CountryOrigin>
                  <h3>원산지</h3>
                  <span>{currentProductDetailData?.origin?.bacon}</span>
                </CountryOrigin>
                <CountWrap>
                  <Count count={count} setCount={setCount} />
                </CountWrap>
                <DetailText>
                  <span>• {currentProductDetailData?.disclaimer}</span>
                </DetailText>
                <TotalAmount>
                  <span>
                    총 상품금액 : <strong>{addComma(totalPrice)}원</strong>
                  </span>
                </TotalAmount>
                <OrderBtnWrap>
                  <Button content="온라인주문" size="medium" />
                </OrderBtnWrap>
              </DetailInnerWrap>
            </DetailWrap>
          </ContainerInnerWrap>
        );
      })}
    </DetailContainer>
  );
};

export default Detail;

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailContainer = styled.main`
  ${FlexCenter};
  flex-direction: column;
  height: 100vh;
  margin-top: 200px;
  margin-bottom: 140px;
`;

const ContainerInnerWrap = styled.section`
  ${FlexCenter};
  flex-direction: column;
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;

  & > h2 {
    top: 25%;
    font-size: 34px;
    font-weight: 900;
  }
`;

const DetailWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;

const DetailInfoWrap = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 50px;

  img {
    object-fit: cover;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 5px;
`;

const DetailInnerWrap = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 0 50px;
`;

const BadgeWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

const DetailTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  & > h3 {
    font-size: 20px;
    font-weight: 700;
  }

  & > span {
    font-size: 14px;
    color: ${props => props.theme.grayscaleC};
  }

  & > span:last-child {
    font-size: 20px;
    color: ${props => props.theme.grayscaleH};

    & > strong {
      font-size: 24px;
      font-weight: 800;
      font-family: 'Rubik', sans-serif;
    }
  }
`;

const CountryOrigin = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid ${props => props.theme.grayscaleC};
  border-bottom: 1px solid ${props => props.theme.grayscaleC};

  & > h3 {
    font-size: 14px;
    padding-right: 30px;
    color: ${props => props.theme.grayscaleH};
  }

  & > span {
    font-size: 14px;
    color: ${props => props.theme.grayscaleH};
  }
`;

const CountWrap = styled.div`
  ${FlexCenter};
  padding: 15px 0;
`;

const DetailText = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 16px;
    color: ${props => props.theme.grayscaleC};
  }
`;

const TotalAmount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 0;

  & > span {
    font-size: 14px;
    color: ${props => props.theme.grayscaleH};

    & > strong {
      font-size: 30px;
      font-weight: 800;
      font-family: 'Rubik', sans-serif;
    }
  }
`;

const OrderBtnWrap = styled.div`
  ${FlexCenter};
  width: 100%;

  & > button {
    width: 300px;
  }
`;
