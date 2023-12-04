import Button from '../components/Button/Button';
import styled from 'styled-components';

const Test = () => {
  const testClick = () => {
    console.log('클릭했어요.');
  };
  return (
    <div>
      <ButtonWrap>
        <Button
          context="스몰사이즈"
          color="beige"
          size="small"
          onClick={testClick}
        />
        <span>나는</span>
        <span>나는</span>
        <span>나는</span>
        <span>나는</span>
        <Button
          context="스몰사이즈"
          color="beige"
          size="small"
          onClick={testClick}
        />
      </ButtonWrap>

      <ButtonWrapTwo>
        <Button
          context="중간사이즈"
          color="primary"
          size="medium"
          onClick={testClick}
        />
      </ButtonWrapTwo>

      <div>
        <Button
          context="라지사이즈"
          color="black"
          size="large"
          onClick={testClick}
        />
      </div>
    </div>
  );
};

export default Test;

const ButtonWrap = styled.div`
  display: flex;
  width: 400px;
  & > span {
    font-size: 25px;
  }
`;
const ButtonWrapTwo = styled.div`
  width: 150px;
`;
