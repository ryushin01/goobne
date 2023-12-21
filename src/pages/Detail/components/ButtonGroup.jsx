import { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import styled from 'styled-components';

/** Detail 에서 사용되는 버튼에 대한 그룹 컴포넌트 입니다. */
const ButtonGroup = ({ data }) => {
  /** 버튼 Click 이벤트에 대해 변경되는 isActive 상태를 가져오기 위해 만든 useState 입니다. */
  const [buttonData, setButtonData] = useState([]);

  /**
   * 화면이 처음 랜더링 될 때 0번 째 인덱스 isActive 상태를 true로 변경시켜 줍니다.
   * 의존성 배열을 사용함으로써 처음 랜더링 될 때만 실행되도록 합니다.
   */
  useEffect(() => {
    handleClick(0);
  }, []);

  /**
   * 버튼 클릭 이벤트에 대한 핸들러 함수 입니다.
   *
   * data props로 받은 배열을 map 함수를 통해 순회하면서 isActive 상태를 변경시켜 주는 함수입니다.
   *
   * 스프레드 문법을 사용하여 기존의 데이터를 복사한 뒤 클릭한 버튼의 인덱스만 isActive 상태를 변경시켜 줍니다.
   *
   * 바뀐 data props를 setButtonData를 통해 buttonData에 저장시켜 줍니다.
   */
  const handleClick = index => {
    const newData = data.map((active, i) => ({
      ...active,
      isActive: i === index ? !active.isActive : active.isActive,
    }));
    setButtonData(newData);
  };

  return (
    <DetailButtonGroupContainer>
      {buttonData.map(({ id, label, isActive }, index) => (
        <Button
          key={id}
          className={isActive ? 'active' : ''}
          content={label}
          color="beige"
          type="button"
          onClick={() => handleClick(index)}
        />
      ))}
    </DetailButtonGroupContainer>
  );
};

export default ButtonGroup;

const DetailButtonGroupContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding-top: 30px;
  margin-bottom: 15px;

  & > button {
    width: calc((100% - 32px) / 3);
  }

  & > .active {
    background-color: ${props => props.theme.grayscaleH};
    color: ${props => props.theme.grayscaleA};
  }
`;
