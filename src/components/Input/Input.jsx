import styled from 'styled-components';

const Input = ({
  type = 'text',
  placeholder,
  onChange,
  name,
  value,
  label,
  labelForId,
  required,
  ...props
}) => {
  return (
    <InputWrap {...props}>
      <InputLabel htmlFor={labelForId} {...props}>
        {label}
        {required === 'required' && <span>&nbsp;*</span>}
      </InputLabel>
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
 *@property {string} value                             - 인풋의 초깃값을 정의합니다.
 *@property {string} position: column,  기본값 = row    - 인풋의 Wrap의 포지션을 해당 조건에따라 적용하는것을 정의합니다.
 *@property {string} isDot                             - 값이 true일 경우 label 태그의 before속성이 적용되며, padding-left 10px과 함께 적용됩니다.
 *@property {function} onChange                        - 인풋의 값이 변경될시 실행할 함수를 정의합니다.
 */

//INPUT WRAP position에따른 속성값.
const INPUT_WRAP_POSITION_STYLES = {
  column: {
    flexDirection: 'column',
  },
};

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  
  /* props position이 전달되지 않은 경우 기본설정에 따르고, 
  props를 전달 받으면 지정조건에 따른다 */
  flex-direction: ${({ direction }) =>
    INPUT_WRAP_POSITION_STYLES[direction]?.flexDirection || 'row'};
`;

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 5px;
  //props isDot true일때 padding-left 10px값을 적용합니다.
  padding-left: ${props => (props.isDot === true && '10px') || '0px'};
  position: relative;

  //flex-direction row의 기본값에서 Label의 앞쪽 before속성을 의미한다.
  //props isDot의 값이 true일시 before속성을 적용시킵니다.
  ${props => {
    if (props.isDot === true) {
      return `
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 19%;
      left: 0;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #000;
    }
  `;
    }
  }}
  & > span {
    color: ${props => props.theme.primaryColor};
  }
`;

//Default input속성값을 정의합니다.
const DefaultInput = styled.input`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid ${props => props.theme.grayscaleF};
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
`;

export default Input;
