import styled from 'styled-components';

const FooterUserInfo = () => {
  return (
    <div>
      <TextInfoArea>
        (주)리유니온(굽으네치킨 goobeune이하 회사 라 함)는 이용자들의
        <br />
        개인정보를 매우 중요시하며,
        <br />
        정보통신망 이용촉진 및 정보보호 등에
        <br />
        관한 법율 및 개인정보보호법 등 개인정보보호 관련 법규를 준수하고
        있습니다.
        <br />
        회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한
        <br />
        용도와 방식으로 이용되고 있으며,
        <br /> 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        회사는
        <br />
        개인정보 처리방침을 개정 또는 변경하는 경우 웹사이트 공지사항(또는
        개별공지)
        <br />를 통하여 공지할 것입니다.
      </TextInfoArea>
    </div>
  );
};

export default FooterUserInfo;

const TextInfoArea = styled.span`
  display: inline-block;
  width: 100%;
  height: 395px;
  line-height: 20px;
`;
