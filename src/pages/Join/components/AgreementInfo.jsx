import CheckBox from '../../../components/CheckBox/CheckBox';
import styled from 'styled-components';

const AgreementInfo = () => {
  return (
    <AgreementWrapSection>
      <h3>약관동의</h3>
      <PrivacyWrapDiv>
        <CheckBox label="전체 약관에 동의합니다. (선택 항목도 포함합니다.)" />
        <CheckBox label="(필수) 이용약관에 모두 동의합니다." />
        <ul>
          <AgreementItemLi>
            <AgreementContentSpan>구부네 치킨 이용약관</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>

          <AgreementItemLi>
            <AgreementContentSpan>개인정보 수집/이용</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>

          <AgreementItemLi>
            <AgreementContentSpan>개인정보취급 위탁안내</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>

          <AgreementItemLi>
            <AgreementContentSpan>개인정보 제3자동의</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>
        </ul>
      </PrivacyWrapDiv>

      <AgeCheckWrapDiv>
        <CheckBox label="(필수) 본인은 만 14세 이상입니다." />
      </AgeCheckWrapDiv>

      <EventCheckWrapDiv>
        <CheckBox label="(선택) 정보 / 이벤트 메일 / SMS 수신에 동의합니다." />

        <EventReceptionCheckInnerDiv>
          <CheckBox label="SMS알림톡" />
          <CheckBox label="APP푸시" />
          <CheckBox label="이메일" />
        </EventReceptionCheckInnerDiv>
      </EventCheckWrapDiv>
    </AgreementWrapSection>
  );
};

export default AgreementInfo;

/** 약관동의 스타일 시작 */
const AgreementWrapSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;

  & > h3 {
    font-size: 20px;
    font-weight: 800;
    border-bottom: 1px solid ${props => props.theme.grayscaleH};
    padding-bottom: 20px;
  }
`;

const PrivacyWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
`;
const AgreementItemLi = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px 30px;
`;

const AgreementContentSpan = styled.span`
  font-size: 12px;
  color: ${props => props.theme.grayscaleE};
`;
const AgreementContentButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const AgeCheckWrapDiv = styled.div`
  padding: 10px 0px;
`;

const EventCheckWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0px 30px 0;
  border-top: 1px solid ${props => props.theme.grayscaleH};
`;
const EventReceptionCheckInnerDiv = styled.div`
  display: flex;
  gap: 5px;
`;
/** 약관동의 스타일 끝 */
