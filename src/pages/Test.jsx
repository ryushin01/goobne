import Input from '../components/Input/Input';

const Test = () => {
  return (
    <div>
      {/* <Input
        type="text"
        placeholder="디폴트 인풋"
        label="테스트"
        labelForId="default"
      /> */}
      {/* <Input type="password" placeholder="테스트2" label="비밀번호" /> */}
      <Input type="text" placeholder="테스트1" label="아이디" before="before" />
    </div>
  );
};

export default Test;
