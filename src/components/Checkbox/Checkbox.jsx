import styled from 'styled-components';

/**
 * Checkbox props list
 * @property {function} onChange   - 체크박스의 상태 변경을 위한 함수
 * @property {boolean} checked     - 체크박스가 체크 된 상태
 * @property {string} label        - 체크박스의 라벨
 * @property {string} id           - 체크박스별 고유의 id
 * @property {string} weight       - 라벨의 font-weight
 */

const CheckBox = ({ onChange, checked, label, id, name, ...props }) => {
  return (
    <CheckboxWrap>
      <CheckboxInput
        type="checkbox"
        onChange={onChange}
        checked={checked}
        id={id}
        name={name}
      />
      <CheckboxLabel {...props}>{label}</CheckboxLabel>
    </CheckboxWrap>
  );
};

// font-weight를 normal과 bold로 구분
const LABEL_FONT_WEIGHT = {
  normal: {
    fontWeight: '400',
  },
  bold: {
    fontWeight: '700',
  },
};

// 체크의 모양을 위한 정의
const CheckDefault = `
  content: '';
  height: 4px;
  width: 7px;
  transform: rotate(-45deg);
`;

const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  padding-left: 8px;
  color: ${props => props.theme.grayscaleG};
  font-size: 14px;
  font-weight: ${({ weight }) =>
    LABEL_FONT_WEIGHT[weight]?.fontWeight || 'normal'};
`;

const CheckboxInput = styled.input`
  height: 18px;
  width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3px;
  border: 1px solid ${props => props.theme.grayscaleC};
  appearance: none;
  cursor: pointer;

  &:after {
    ${CheckDefault};
    border-left: 1px solid ${props => props.theme.grayscaleC};
    border-bottom: 1px solid ${props => props.theme.grayscaleC};
  }

  &:checked {
    background-color: ${props => props.theme.grayscaleG};

    &:after {
      ${CheckDefault};
      border-left: 1px solid ${props => props.theme.grayscaleA};
      border-bottom: 1px solid ${props => props.theme.grayscaleA};
    }
  }
`;
export default CheckBox;
