import styled from 'styled-components';

const FooterEmailRefusal = () => {
  return (
    <div>
      <TextInfoArea>
        본 웹사이트에 게시된 이메일 주소가 전자우편 수집프로그램이나 그 밖의
        기술적
        <br />
        장치를 이용하여 무단으로 수집되는 것을 거부하며 이를 위반 시
        정보통신망법에
        <br />
        의해 형사 처벌됨을 유념하시기 바랍니다.
        <br />
        <br />
        [게시일 2023년 00월 00일]
      </TextInfoArea>
    </div>
  );
};

export default FooterEmailRefusal;

const TextInfoArea = styled.span`
  display: inline-block;
  width: 100%;
  height: 395px;
  line-height: 20px;
`;
