import styled from 'styled-components';

/**
 * Chip props list
 * @property {string} color             - 개별 칩의 배경색
 * @property {string} id                - 각각의 칩 별로 가지고 있는 고유의 id
 * @property {boolean} checked          - 칩이 선택 된 상태
 * @property {function} defaultChecked  - 기본으로 체크된 칩
 * @property {function} onChange        - 칩의 상태 변경을 위한 함수
 * @property {string} content           - 칩의 내용. 실질적으로 보여지는 부분
 * @property {string} name              - 페이지에서 사용되는 칩 그룹의 이름
 */

const Chip = ({ id, content, checked, defaultChecked, onChange, ...props }) => {
  return (
    <ChipWrap {...props}>
      <input
        type="radio"
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...props}
      />
      <label htmlFor={id}>{content}</label>
    </ChipWrap>
  );
};

export default Chip;

const ChipWrap = styled.div`
  padding: 0 5px;

  & > input {
    display: none;

    // input이 checked 일 때 label의 색상을 변경하기 위함
    &:checked + label {
      background-color: ${props => props.theme.grayscaleH};
      color: ${props => props.theme.grayscaleA};
    }
  }

  // label의 기본값
  & > label {
    padding: 11px 14px;
    background-color: ${props =>
      (props.color === 'white' && props.theme.grayscaleA) ||
      (props.color === 'beige' && props.theme.grayscaleB) ||
      props.theme.grayscaleA};
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.grayscaleH};
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.grayscaleH};
      color: ${props => props.theme.grayscaleA};
    }
  }
`;
