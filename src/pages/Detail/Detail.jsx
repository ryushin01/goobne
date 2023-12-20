import { useEffect, useState } from 'react';
import { API } from '../../config';
import { customAxios } from '../../API/API';
import Badge from '../../../src/components/Badge/Badge';
import Button from '../../components/Button/Button';
import RadioGroup from './components/RadioGroup';
import Count from '../../components/Count/Count';
import DropDown from '../../components/DropDown/DropDown';
import styled, { css } from 'styled-components';

const Detail = () => {
  const [DetailData, setDetailData] = useState([]); //eslint-disable-line no-unused-vars
  const [RadioData, setRadioData] = useState('');
  const [countValue, setCountValue] = useState(1);

  useEffect(() => {
    requestDetailDataGet();
  }, []);

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

  const handleRadioChange = value => {
    setRadioData(value);
  };

  if (!DetailData) return null;

  return (
    <DetailContainer>
      {DetailData?.map(item => {
        const price = item.productDetail.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const totalPrice = item.totalAmount * countValue;
        const addComma = num => {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
        return (
          <>
            <ContainerInnerWrap key={item.id}>
              <h2>{item.productDetail.title}</h2>
              <DetailWrap>
                <DetailInfoWrap>
                  <img
                    src={item.productDetail.image}
                    alt={item.productDetail.alt}
                  />
                  <DetailInfo>
                    <DropDown
                      country="true"
                      countryInfo={item.productDetail.origin.bacon}
                    />
                    <DropDown
                      nutrient="true"
                      nutrientInfo={item.productDetail.servingSize}
                    />
                  </DetailInfo>
                </DetailInfoWrap>
                <DetailInnerWrap>
                  <DetailTextWrap>
                    <BadgeWrap>
                      {item.productDetail.badges.map((badge, index) => {
                        return <Badge key={index} shape={badge} size="large" />;
                      })}
                    </BadgeWrap>
                    <h3>{item.productDetail.title}</h3>
                    <span>{item.productDetail.description}</span>
                    <span>
                      <strong>{price}</strong>원
                    </span>
                  </DetailTextWrap>

                  <RadioGroup
                    data={item.RadioGroup}
                    onChange={handleRadioChange}
                    defaultChecked={item.RadioGroup[0].isChecked}
                    setRadioData={setRadioData}
                  />

                  <CountryOrigin>
                    <h3>원산지</h3>
                    <span>{item.productDetail.origin.bacon}</span>
                  </CountryOrigin>
                  <CountWrap>
                    <Count setCountValue={setCountValue} />
                  </CountWrap>
                  <DetailText>
                    <span>• {item.productDetail.disclaimer}</span>
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
          </>
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

const DetailButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
  padding-top: 30px;
  margin-bottom: 15px;
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
