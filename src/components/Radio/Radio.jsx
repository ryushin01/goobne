import styled from 'styled-components';

const Radio = ({
  type = 'radio',
  name,
  value,
  checked,
  onChange,
  text,
  ...props
}) => {
  return (
    <RadioLabel {...props}>
      <DefaultRadio
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <RadioText>{text}</RadioText>
    </RadioLabel>
  );
};

/**
 *@property {string} type: radio                       - 라디오인풋의 타입을 정의합니다.
 *@property {string} name                              - 라디오인풋 그룹의 이름을 지정 및 그중 한가지만 선택가능함을 정의합니다.
 *@property {string} value                             - 라디오인풋의 form을 제출시 서버에서 선택값을 식별하기위함을 정의합니다.
 *@property {string} text                              - 라디오인풋 옆에 표시되는 텍스트를 정의합니다.
 *@property {function} checked                         - 라디오인풋의 기본선택을 정의합니다.
 *@property {function} onChange                        - 라디오인풋의 선택이 변경될 때 호출되는 함수를 정의합니다.
 */

//라디오 text를 클릭시 체크상태가 이루어지기위하여 라벨링.
const RadioLabel = styled.label`
  position: relative;
  margin-right: 15px;
  cursor: pointer;
`;

//라디오 속성값을 정의합니다.
const DefaultRadio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  appearance: none; //라디오 기본속성을 제거하는속성
  width: 18px;
  height: 18px;
  border: 1px solid ${props => props.theme.grayscaleC};
  border-radius: 50%;
  cursor: pointer;

  //checked 시 가운데 원형을 나타내기위한 속성
  &:checked + span:after {
    content: '';
    position: absolute;
    top: 45%;
    left: 5px;
    transform: translate(0, -50%);
    background: ${props => props.theme.grayscaleF};
    width: 8px;
    height: 8px;
    background-size: contain;
    border-radius: 50%;
  }
`;

const RadioText = styled.span`
  position: relative;
  padding: 0px 0px 0px 25px;
  font-size: 14px;
`;
export default Radio;
