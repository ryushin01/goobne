import styled from 'styled-components';

const Input = ({
  type = 'text',
  placeholder,
  onChange,
  name,
  value,
  label,
  ...props
}) => {
  return (
    <InputWrap>
      <InputLabel>{label}</InputLabel>
      <DefaultInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        {...props}
      />
    </InputWrap>
  );
};

/**
 *@property {string} type: text, password              - 인풋의 타입을 정의합니다.
 *@property {string} placeholder                       - 인풋의 입력될 값에 대한 짧은 힌트를 정의합니다.
 *@property {string} name                              - 인풋의 form을 제출시 서버에서 데이터를 참조하기 위하여 정의합니다.
 *@property {any} value                                - 인풋의 초깃값을 정의합니다.
 *@property {function} onChange                        - 인풋의 값이 변경될시 실행할 함수를 정의합니다.
 */

const InputWrap = styled.div``;

const InputLabel = styled.label``;

//Default input속성값을 정의합니다.
const DefaultInput = styled.input`
  width: 100%;
  padding: 13px 0px 13px 15px;
  border: 1px solid ${props => props.theme.grayscaleF};
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.primaryColor};
    box-shadow: 0 0 0 1px ${props => props.theme.primaryColor} inset;
  }
`;

export default Input;
