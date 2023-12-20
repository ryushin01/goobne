import styled from 'styled-components';

/** Detail Page용 CustomRadio 버튼 입니다. */
const CustomRadio = ({
  id,
  label,
  name,
  defaultChecked,
  onChange,
  disabled,
  value,
}) => {
  /** 상태가 변화된 Radio 버튼의 target.value를 저장하는 함수 입니다. */
  const handleRadioChange = e => {
    onChange(e.target.value);
  };

  return (
    <RadioContainer>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        onChange={handleRadioChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </RadioContainer>
  );
};

export default CustomRadio;

const RadioContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;

  & > input[type='radio'] {
    display: none;

    &:checked + label {
      background-color: ${props => props.theme.grayscaleH};
      color: ${props => props.theme.grayscaleA};
      border: 1px solid ${props => props.theme.grayscaleH};
    }
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: ${props => props.theme.grayscaleH};
    cursor: pointer;
    padding: 13px 0;
    border: 1px solid ${props => props.theme.grayscaleC};
    border-radius: 4px;
  }
`;
