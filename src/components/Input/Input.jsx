import styled from 'styled-components';

const Input = ({
  type = 'text',
  placeholder,
  onChange,
  name,
  value,
  label,
  labelForId,
  before,
  ...props
}) => {
  return (
    <InputWrap>
      <InputText before={before} htmlFor={labelForId}>
        {label}
      </InputText>
      <DefaultInput
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
        id={labelForId}
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

const InputWrap = styled.div`
  display: flex;
`;
const InputText = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;

  &[before] {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000;
  }
`;

//Default input속성값을 정의합니다.
const DefaultInput = styled.input`
  width: 100%;
  padding: 13px 0px 13px 15px;
  border: 1px solid ${props => props.theme.grayscaleF};
  border-radius: 5px;
  font-size: 16px;
`;

export default Input;
