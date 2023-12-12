import Input from '../components/Input/Input';
import styled from 'styled-components';

const Test = () => {
  return (
    <Testa>
      <Tests>
        <Input type="text" />
        <Input type="text" label="라벨표시12313131" />
        <Input type="text" label="test3" position="column" />
        <Input type="text" label="test3" dot="on" />
        <Input type="text" label="test4" dot="on" />
      </Tests>
    </Testa>
  );
};

export default Test;

const Tests = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  flex-direction: column;
`;
const Testa = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
