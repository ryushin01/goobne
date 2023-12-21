import styled from 'styled-components';

const PaymentMethod = ({
  type = 'radio',
  name,
  value,
  onChange,
  text,
  ...props
}) => {
  return (
    <RadioLabel {...props}>
      <PaymentRadio
        type={type}
        name={name}
        value={value}
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
 *@property {function} onChange                        - 라디오인풋의 선택이 변경될 때 호출되는 함수를 정의합니다.
 */

//라디오 text를 클릭시 체크상태가 이루어지기위하여 라벨링.
const RadioLabel = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70px;
  border: 1px solid #000;
  cursor: pointer;
`;

//라디오 속성값을 정의합니다.
const PaymentRadio = styled.input`
  appearance: none;
  width: 100%;

  height: 25px;
  cursor: pointer;
  background-color: #000;

  &:checked + label {
    background: #212121;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    width: 100%;
    height: 25px;
    cursor: pointer;
  }
`;

const RadioText = styled.label`
  font-size: 14px;
  user-select: none;
  margin: 0 auto;
  white-space: nowrap;
`;
export default PaymentMethod;
