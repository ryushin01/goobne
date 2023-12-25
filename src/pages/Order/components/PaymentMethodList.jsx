import styled from 'styled-components';

/**
 *@property {string} type: radio                       - 라디오인풋의 타입을 정의합니다.
 *@property {string} name                              - 라디오인풋 그룹의 이름을 지정 및 그중 한가지만 선택가능함을 정의합니다.
 *@property {string} value                             - 라디오인풋의 form을 제출시 서버에서 선택값을 식별하기위함을 정의합니다.
 *@property {string} text                              - 라디오인풋 옆에 표시되는 텍스트를 정의합니다.
 *@property {function} onChange                        - 라디오인풋의 선택이 변경될 때 호출되는 함수를 정의합니다.
 */
const PaymentMethod = ({
  type = 'radio',
  id,
  name,
  value,
  onChange,
  text,
  ...props
}) => {
  const handleRadioDataGet = e => {
    onChange(e.target.value);
  };

  return (
    <RadioContainer {...props}>
      <PaymentRadio
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleRadioDataGet}
        {...props}
      />
      <RadioLabel htmlFor={id}>
        <LabelImage {...props}></LabelImage>
        {text}
      </RadioLabel>
    </RadioContainer>
  );
};

//라디오 text를 클릭시 체크상태가 이루어지기위하여 라벨링.
const RadioContainer = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid ${props => props.theme.grayscaleH};
  cursor: pointer;
  position: relative;
`;

//라디오 속성값을 정의합니다.
const PaymentRadio = styled.input`
  width: 100%;
  height: 100%;
  appearance: none;
  cursor: pointer;
  color: ${props => props.theme.grayscaleA};

  &:checked {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.grayscaleH};
  }

  &:checked + label {
    background-color: ${props => props.theme.grayscaleH};
    color: white;
    text-align: center;
    width: 100%;
    height: 25px;
    cursor: pointer;

    & img {
      filter: invert(98%) sepia(61%) saturate(6693%) hue-rotate(183deg)
        brightness(123%) contrast(98%);
    }
  }
`;

const RadioLabel = styled.label`
  position: absolute;
  top: 65%;
  left: 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const LabelImage = styled.img`
  position: absolute;
  top: -34px;
  left: 18px;
  width: 30px;
  height: 30px;
`;

export default PaymentMethod;
