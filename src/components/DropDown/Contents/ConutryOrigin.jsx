import styled from 'styled-components';

const CountryOrigin = ({ open }) => {
  return (
    <DropDownOption className={open && 'open'}>
      <CountryOriginTitleWrap>
        <h3>원산지 정보보기</h3>
        <span>원산지</span>
      </CountryOriginTitleWrap>
      <CountryOriginContent>
        <span>
          페퍼로니: 돼지고기[국내산과
          외국산(미국,아일랜드,스페인)섞음],쇠고기(호주산)
        </span>
      </CountryOriginContent>
    </DropDownOption>
  );
};

export default CountryOrigin;

const DropDownOption = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  padding: 10px 40px;
  border: 1px solid ${props => props.theme.grayscaleG};
  border-radius: 4px;
  background-color: ${props => props.theme.grayscaleA};

  &.open {
    display: flex;
  }
`;

const CountryOriginTitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > h3 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.grayscaleH};
    margin: 20px 0;
  }

  & > span {
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.grayscaleH};
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.grayscaleG};
  }
`;

const CountryOriginContent = styled.div`
  display: flex;
  font-size: 13px;
  padding-top: 20px;
  margin-bottom: 40px;
`;
