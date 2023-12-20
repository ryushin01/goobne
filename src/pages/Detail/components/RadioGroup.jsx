import { useEffect } from 'react';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

/** 라디오 버튼의 그룹입니다. 여러개의 라디오 버튼을 만들어야할 때 사용합니다. */
const RadioGroup = ({ data, onChange, setRadioData }) => {
  /** useEffect를 이용해 처음 랜더링 될 때 RadioData를 첫번 째 데이터로 넣어줍니다. */
  useEffect(() => {
    setRadioData(data[0].label);
  }, []);
  return (
    <RadioGroupContainer>
      {data?.map(({ id, label, isChecked, name, disabled }) => {
        return (
          <CustomRadio
            key={id}
            id={id}
            value={label}
            defaultChecked={isChecked}
            label={label}
            name={name}
            onChange={onChange}
            disabled={disabled}
          />
        );
      })}
    </RadioGroupContainer>
  );
};

export default RadioGroup;

const RadioGroupContainer = styled.div`
  display: flex;
  width: 100%;
  padding-top: 30px;
  margin-bottom: 15px;
  gap: 10px;
`;
