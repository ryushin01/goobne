import styled, { css } from 'styled-components';

const Nutrient = ({ open, nutrientInfo }) => {
  const {
    amountPerServing,
    calories,
    carbohydrates,
    cholesterol,
    fat,
    protein,
    saturatedFat,
    sodium,
    sugars,
    transFat,
  } = nutrientInfo;

  return (
    <DropDownOption className={open && 'open'}>
      <CountryOriginTitleWrap>
        <h3>영양성분 정보보기</h3>
        <span>영양성분 정보</span>
      </CountryOriginTitleWrap>
      <NutrientWrap>
        <NutrientContainer>
          <caption>영양성분 정보</caption>
          <colgroup>
            <col width="50%" />
            <col width="50%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">1회제공량</th>
              <th scope="col">{amountPerServing}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>열량(kcal)</th>
              <td>{calories}</td>
            </tr>
            <tr>
              <th>나트륨(mg)</th>
              <td>{sodium}</td>
            </tr>
            <tr>
              <th>탄수화물(g)</th>
              <td>{carbohydrates}</td>
            </tr>
            <tr>
              <th>당류(g)</th>
              <td>{sugars}</td>
            </tr>
            <tr>
              <th>지방(g)</th>
              <td>{fat}</td>
            </tr>
            <tr>
              <th>트랜스지방(g)</th>
              <td>{transFat}</td>
            </tr>
            <tr>
              <th>포화지방(g)</th>
              <td>{saturatedFat}</td>
            </tr>
            <tr>
              <th>콜레스테롤(mg)</th>
              <td>{cholesterol}</td>
            </tr>
            <tr>
              <th>단백질(g)</th>
              <td>{protein}</td>
            </tr>
          </tbody>
        </NutrientContainer>
      </NutrientWrap>
    </DropDownOption>
  );
};

export default Nutrient;

const DropDownOption = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 400px;
  padding: 10px 40px 40px;
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
  }
`;

/** Table 기본 Setting */
const TableStyle = css`
  display: table;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
`;

const NutrientContainer = styled.table`
  ${TableStyle};

  font-size: 13px;
  padding-top: 20px;

  & > caption {
    font-size: 0;
  }

  & thead th {
    background-color: ${props => props.theme.grayscaleH};
    color: ${props => props.theme.grayscaleA};
    padding: 10px 0;

    &:first-child {
      border-radius: 8px 0 0 0;
    }

    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }

  th {
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.grayscaleC};
  }

  td {
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.grayscaleC};

    &:last-child {
      padding: 10px 0;
    }
  }
`;

const NutrientWrap = styled.div`
  display: block;
  overflow-y: scroll;
  padding-right: 3px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grayscaleH};
    border-radius: 12px;
  }
`;
