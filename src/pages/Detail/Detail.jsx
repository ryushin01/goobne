import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { _requestDetailDataGet } from '../../API/TEST_API';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/Redux';
import Badge from '../../../src/components/Badge/Badge';
import Button from '../../components/Button/Button';
import RadioGroup from './components/RadioGroup';
import Count from '../../components/Count/Count';
import DropDown from '../../components/DropDown/DropDown';
import styled, { css } from 'styled-components';

const Detail = () => {
  /** detail Page에 대한 Data를 저장하는 useState 입니다. */
  const [detailData, setDetailData] = useState({});
  /** radio 버튼 선택 id를 저장합니다. 초기값은 0번 입니다. */
  const [radioData, setRadioData] = useState(0);
  /** 상품 수량을 저장하는 useState 입니다. 초기값은 1개 입니다. */
  const [count, setCount] = useState(1);
  /** params를 이용하여 detail에 대한 path parameter를 가져옵니다. */
  const params = useParams();
  /** params의 id를 Number로 변환하여 userId에 저장합니다. */
  const userId = Number(params.id);
  /** redux의 dispatch를 사용하기 위한 변수 입니다. */
  const dispatch = useDispatch();
  /** react-router-dom의 navigate를 사용하기 위한 변수 입니다. */
  const navigate = useNavigate();
  /** 로그인 여부를 확인하는 변수 입니다. */
  const isLogin = localStorage.getItem('accessToken');

  /** useEffect를 이용해 처음 랜더링 될 때 detailData를 가져오는 함수를 실행합니다. */
  useEffect(() => {
    /** TEST_API를 이용하여 userId에 따른 데이터를 detailData로 불러옵니다. */
    _requestDetailDataGet(userId).then(response => {
      return setDetailData(response.data);
    });
  }, [userId]);

  /** radioData의 index로 productDetail의 객체 데이터를 선택합니다. */
  const currentProductDetailData = detailData?.productDetail?.[radioData];
  /** 상품 가격에 콤마를 추가한 변수 입니다. */
  const GoodsPrice = currentProductDetailData?.price?.toLocaleString();
  /** 상품 수량에 따른 총 상품 금액을 계산한 변수 입니다. */
  const totalPrice = currentProductDetailData?.price * count;
  /** 상품 가격에 콤마를 추가하는 함수 입니다. */
  const addComma = num => {
    return num.toLocaleString();
  };

  /** Radio 버튼이 onChange 될 때마다 e.target의 value값을 가져와 RadioData에 저장합니다. */
  const handleRadioChange = value => {
    setRadioData(value);
  };

  /** 장바구니에 데이터를 넣기 위한 함수 입니다.
   * 1. dispatch를 이용하여 payload data를 addCart로 보내줍니다.
   */
  const putInCartData = () => {
    /** Redux Toolkit을 사용하지 않았을 때의 dispatch 입니다.  */
    // dispatch({
    //   type: 'ADD_CART',
    //   payload: {
    //     id: detailData?.id,
    //     radioData: Number(radioData),
    //     name: currentProductDetailData.title,
    //     price: currentProductDetailData.price,
    //     count: count,
    //     src: currentProductDetailData.image,
    //     alt: currentProductDetailData.alt,
    //   },
    // });

    /** Redux Toolkit을 사용했을 때의 dispatch 입니다.  */
    dispatch(
      addCart({
        id: detailData?.id,
        radioData: Number(radioData),
        name: currentProductDetailData.title,
        price: currentProductDetailData.price,
        count: count,
        src: currentProductDetailData.image,
        alt: currentProductDetailData.alt,
      }),
    );
  };

  return (
    <DetailContainer>
      <ContainerInnerWrap key={detailData.id}>
        <h2>{detailData.mainTitle}</h2>
        <DetailWrap>
          <DetailInfoWrap>
            <div>
              <img
                src={currentProductDetailData?.image}
                alt={currentProductDetailData?.alt}
              />
            </div>
            <DetailInfo>
              <DropDown
                country="true"
                countryInfo={currentProductDetailData?.origin?.bacon}
              />
              {currentProductDetailData && (
                <DropDown
                  nutrient="true"
                  nutrientInfo={currentProductDetailData?.servingSize}
                />
              )}
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
              defaultChecked={currentProductDetailData?.option?.isChecked}
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
              <Button
                content="온라인주문"
                size="medium"
                onClick={() => {
                  putInCartData();
                  isLogin ? navigate('/delivery') : navigate('/login');
                }}
              />
            </OrderBtnWrap>
          </DetailInnerWrap>
        </DetailWrap>
      </ContainerInnerWrap>
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

  & > div:first-child {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    overflow: hidden;
  }

  img {
    aspect-ratio: 1/1;
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
