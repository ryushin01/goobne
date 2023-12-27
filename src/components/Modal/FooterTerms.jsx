import styled from 'styled-components';

const FooterTerms = () => {
  return (
    <div>
      <TextInfoArea>
        1. 개인정보의 수집 및 이용목적
        <br />
        <br />
        ㈜리유니온 goobEune 회원 이용약관입니다.
        <br />
        먼저 아래의 이용약관을 반드시읽어 보시고 회원가입해 주시기 바랍니다.
        <br />
        <br />
        종전의 약관은 본 약관으로 대체합니다.
      </TextInfoArea>
    </div>
  );
};

export default FooterTerms;

const TextInfoArea = styled.span`
  display: inline-block;
  width: 100%;
  height: 395px;
  line-height: 20px;
`;
