import styled from 'styled-components';
const KakaoBtn = () => {
  return <KakaoBtnButton type="button">카카오 로그인</KakaoBtnButton>;
};

export default KakaoBtn;

const KakaoBtnButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffdb43;
  background-image: url(public/images/kakaoBtn.png);
  background-repeat: no-repeat;
  background-size: 45px 45px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
`;
