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
            <td>열량(kcal)</td>
            <td>{calories}</td>
          </tr>
          <tr>
            <td>나트륨(mg)</td>
            <td>{sodium}</td>
          </tr>
          <tr>
            <td>탄수화물(g)</td>
            <td>{carbohydrates}</td>
          </tr>
          <tr>
            <td>당류(g)</td>
            <td>{sugars}</td>
          </tr>
          <tr>
            <td>지방(g)</td>
            <td>{fat}</td>
          </tr>
          <tr>
            <td>트랜스지방(g)</td>
            <td>{transFat}</td>
          </tr>
          <tr>
            <td>포화지방(g)</td>
            <td>{saturatedFat}</td>
          </tr>
          <tr>
            <td>콜레스테롤(mg)</td>
            <td>{cholesterol}</td>
          </tr>
          <tr>
            <td>단백질(g)</td>
            <td>{protein}</td>
          </tr>
        </tbody>
      </NutrientContainer>
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
  padding: 10px 40px;
  border: 1px solid ${props => props.theme.grayscaleG};
  border-radius: 4px;
  background-color: ${props => props.theme.grayscaleA};
  overflow-y: auto;

  &.open {
    display: flex;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.grayscaleH};
    border-radius: 12px;
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

  width: 100%;
  font-size: 13px;
  padding-top: 20px;
  margin-bottom: 40px;

  & > caption {
    font-size: 0;
  }

  th {
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

  td {
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.grayscaleC};

    &:last-child {
      padding: 10px 0;
    }
  }
`;
