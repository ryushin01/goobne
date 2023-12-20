import { useEffect, useState } from 'react';
import CheckBox from '../../../components/CheckBox/CheckBox';
import styled from 'styled-components';

const AgreementInfo = ({ userJoinInfo, setUserJoinInfo }) => {
  const [agreementCheck, setAgreementCheck] = useState({
    allCheck: false,
    termsOfUseCheck: false,
    ageCheck: false,
    eventAllCheck: false,
    sms: false,
    app: false,
    email: false,
  });

  useEffect(() => {
    setUserJoinInfo({
      ...userJoinInfo,
      termsOfUseCheck: agreementCheck.termsOfUseCheck,
      ageCheck: agreementCheck.ageCheck,
      eventSms: agreementCheck.sms,
      eventApp: agreementCheck.app,
      eventEmail: agreementCheck.email,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agreementCheck]);

  const handleCheckboxChange = checkboxName => {
    setAgreementCheck(agreementCheck => {
      // 이전 상태의 복사본을 생성합니다.
      const newCheck = { ...agreementCheck };
      // 체크박스 값을 토글합니다.
      newCheck[checkboxName] = !newCheck[checkboxName];

      // 'allCheck' 체크박스에 대한 특별한 논리를 처리합니다.
      if (checkboxName === 'allCheck') {
        // 'allCheck'이 체크된 경우, 다른 모든 체크박스를 해당 값으로 업데이트합니다.
        Object.keys(newCheck).forEach(key => {
          if (key !== checkboxName) {
            newCheck[key] = newCheck[checkboxName];
          }
        });
      } else {
        // 'allCheck' 이외의 어떤 체크박스가 false이면 'allCheck'를 false로 설정합니다.
        if (!newCheck[checkboxName]) {
          newCheck.allCheck = false;
        } else {
          // 'allCheck'를 제외한 모든 체크박스가 true이면 'allCheck'를 true로 설정합니다.
          const allOthersTrue = Object.keys(newCheck).every(key => {
            return key !== 'allCheck' && newCheck[key];
          });

          if (allOthersTrue) {
            newCheck.allCheck = true;
          }
        }
      }

      // 'eventAllCheck' 체크박스에 대한 특별한 논리를 처리합니다.
      if (checkboxName === 'eventAllCheck') {
        // 'eventAllCheck'이 체크된 경우, sms, app, email 체크박스를 해당 값으로 업데이트합니다.
        if (newCheck[checkboxName]) {
          newCheck.sms = newCheck.app = newCheck.email = true;
        } else {
          // 'eventAllCheck'이 체크 해제된 경우, 모든 sms, app, email이 해제되도록 합니다.
          newCheck.sms = newCheck.app = newCheck.email = false;
        }
      } else if (
        checkboxName === 'sms' ||
        checkboxName === 'app' ||
        checkboxName === 'email'
      ) {
        // 개별 sms, app, email 체크박스를 처리합니다.
        // 이 중 하나가 false이면 'eventAllCheck'를 false로 설정합니다.
        if (!newCheck[checkboxName]) {
          newCheck.eventAllCheck = false;
        } else {
          // 모든 sms, app, email이 true이면 'eventAllCheck'를 true로 설정합니다.
          if (newCheck.sms && newCheck.app && newCheck.email) {
            newCheck.eventAllCheck = true;
          }
        }
      }

      return newCheck;
    });
  };

  return (
    <AgreementWrapSection>
      <h3>약관동의</h3>
      <PrivacyWrapDiv>
        <CheckBox
          label="전체 약관에 동의합니다. (선택 항목도 포함합니다.)"
          checked={agreementCheck.allCheck}
          onChange={() => handleCheckboxChange('allCheck')}
        />
        <CheckBox
          label="(필수) 이용약관에 모두 동의합니다."
          checked={agreementCheck.termsOfUseCheck}
          onChange={() => handleCheckboxChange('termsOfUseCheck')}
        />
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
        <CheckBox
          label="(필수) 본인은 만 14세 이상입니다."
          checked={agreementCheck.ageCheck}
          onChange={() => handleCheckboxChange('ageCheck')}
        />
      </AgeCheckWrapDiv>

      <EventCheckWrapDiv>
        <CheckBox
          label="(선택) 정보 / 이벤트 메일 / SMS 수신에 동의합니다."
          checked={agreementCheck.eventAllCheck}
          onChange={() => handleCheckboxChange('eventAllCheck')}
        />

        <EventReceptionCheckInnerDiv>
          <CheckBox
            label="SMS알림톡"
            checked={agreementCheck.sms}
            onChange={() => handleCheckboxChange('sms')}
          />
          <CheckBox
            label="APP푸시"
            checked={agreementCheck.app}
            onChange={() => handleCheckboxChange('app')}
          />
          <CheckBox
            label="이메일"
            checked={agreementCheck.email}
            onChange={() => handleCheckboxChange('email')}
          />
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
