import Badge from '../../../src/components/Badge/Badge';
import Button from '../../components/Button/Button';
import SelectBox from '../../components/SelectBox/SelectBox';
import Count from '../../components/Count/Count';
import styled, { css } from 'styled-components';

const Detail = () => {
  return (
    <DetailContainer>
      <ContainerInnerWrap>
        <h2>허리바사삭 곱빼기</h2>
        <DetailWrap>
          <DetailInfoWrap>
            <img
              src="../goobne/images/main_chicken_01.jpg"
              alt="고추바사삭 곱빼기"
            />
            <DetailInfo>
              <SelectBox size="small" placeholder="원산지 정보보기" />
              <SelectBox size="small" placeholder="영양성분 정보보기" />
              <SelectBox size="small" placeholder="알레르기 정보보기" />
            </DetailInfo>
          </DetailInfoWrap>
          <DetailInnerWrap>
            <DetailTextWrap>
              <BadgeWrap>
                <Badge shape="new" size="large" />
                <Badge shape="hot" size="large" />
                <Badge shape="md" size="large" />
              </BadgeWrap>
              <h3>허리바사삭 곱빼기</h3>
              <span>1초에 한 마리씩 팔리는 허리 바사삭의 양이 2배!</span>
              <span>
                <strong>27,000</strong>원
              </span>
            </DetailTextWrap>
            <DetailButtonWrap>
              <Button content="곱빼기" />
              <Button content="곱빼기 윙" />
              <Button content="곱빼기 통다리" />
            </DetailButtonWrap>
            <CountryOrigin>
              <h3>원산지</h3>
              <span>베이컨:돼지고기[외국산(스페인,미국,브라질 등)]</span>
            </CountryOrigin>
            <CountWrap>
              <Count />
            </CountWrap>
            <DetailText>
              <span>
                • 본 이미지는 실제와 다를 수 있으며 가맹점 상황에 따라 가격이
                상이 할 수 있습니다.
              </span>
            </DetailText>
            <TotalAmount>
              <span>
                총 상품금액 : <strong>27,000원</strong>
              </span>
            </TotalAmount>
            <OrderBtnWrap>
              <Button content="온라인주문" size="medium" />
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
  gap: 10px;
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
