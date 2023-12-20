import Radio from '../../../components/Radio/Radio';
import SelectBox from '../../../components/SelectBox/SelectBox';
import { getDays, getMonths, getYears } from '../../../data/BirthData';
import { RADIO_GROUP_DATA } from '../../../data/RadioGroupData';
import styled from 'styled-components';

/**
 * BasicInfo props list
 * @property {Hook} userJoinInfo                             - 유저의 가입정보를 담는 useState 입니다.
 * @property {Hook} setUserJoinInfo                          - 유저의 가입정보 변경하는 세터함수 useState 입니다.
 */

const AdditionalInfo = ({ userJoinInfo, setUserJoinInfo }) => {
  /**
   * 1. now 변수의 오늘 날짜를 담습니다. new Date() 자바스크립스트에 내장되어있는 오늘날짜를 계산하는 메서드입니다.
   * 2. import한 상수데이터 함수를  years, months, days 함수들을 각각 변수에 담습니다.
   * 3. SelectBox 컴포넌트에 값을 넘겨줍니다.
   */
  const now = new Date();
  const years = getYears(now.getFullYear(), 1940);
  const months = getMonths();
  const days = getDays();

  const Click = id => {
    RADIO_GROUP_DATA.map(data => {
      if (data.id === id) {
        setUserJoinInfo({ ...userJoinInfo, gender: data.value });
        return { ...data, defaultChecked: true };
      } else {
        return { ...data, defaultChecked: false };
      }
    });
  };

  return (
    <AdditionalInfoWrapSection>
      <h3>부가정보</h3>

      <GenderSelectWrapDiv>
        <div>
          <span>성별</span>
          <span className="required">&nbsp;*</span>
        </div>

        <GenderRadioInnerDiv>
          {RADIO_GROUP_DATA.map(data => {
            const { id, text, defaultChecked, name } = data;
            return (
              <Radio
                key={id}
                text={text}
                name={name}
                defaultChecked={defaultChecked}
                onChange={() => {
                  Click(id);
                }}
              />
            );
          })}
        </GenderRadioInnerDiv>
      </GenderSelectWrapDiv>

      <BirthDateWrapDiv>
        <div>
          <span>생년월일</span>
          <span className="required">&nbsp;*</span>
        </div>

        <BirthDateSelectBoxInnerDiv>
          <SelectBox
            data={years}
            value="선택"
            name="year"
            setUserJoinInfo={setUserJoinInfo}
          />
          <SelectBox
            data={months}
            value="선택"
            name="month"
            setUserJoinInfo={setUserJoinInfo}
          />
          <SelectBox
            data={days}
            value="선택"
            name="day"
            setUserJoinInfo={setUserJoinInfo}
          />
        </BirthDateSelectBoxInnerDiv>
      </BirthDateWrapDiv>
    </AdditionalInfoWrapSection>
  );
};

export default AdditionalInfo;

/** 부가정보 스타일 시작 */
const AdditionalInfoWrapSection = styled.section`
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
const GenderSelectWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0px;
  & > div > span {
    font-size: 14px;
    font-weight: 800;
  }
  & > div > .required {
    color: ${props => props.theme.primaryColor};
  }
`;
const GenderRadioInnerDiv = styled.div`
  margin-top: 10px;
`;
const BirthDateWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 30px;
  & > div > span {
    font-size: 14px;
    font-weight: 800;
  }
  & > div > .required {
    color: ${props => props.theme.primaryColor};
  }
`;
const BirthDateSelectBoxInnerDiv = styled.div`
  display: flex;
  gap: 5px;
`;
/** 부가정보 스타일 하단 끝 */

// userInfo 1차 데이터 목록 체크

// name:                              // 이름                                                    ok 필수
// id:                               // 아이디                                                    ok 필수
// duplicateCheck:                   // 중복체크여부                1:했다 0:안했다.                  ok 필수
// password:                            //비밀번호                                                ok 필수
// confirmPassword:                   //비밀번호 확인                                               ok 필수
// email:                             // 이메일아이디                                               ok 필수
// emailReceptionCheck                // 이벤트수신여부           false:미수신 true:수신               ok 선택
// snsReceptionCheck                  // 이벤트수신여부           false:미수신 true:수신               ok 선택
// phoneNum:                          //핸드폰번호                                                  ok 필수
// certificationNum                   // 인증번호입력                                              ok 필수
// certification:                     //인증체크여부                200:했다 null:안했다.              ok 필수
// zipCode:                           // 우편주소                                                  ok 선택
// Address:                           //주소                                                      ok 선택
// detailedAddress                    //상세주소                                                   ok 선택
// gender:                            // 성별                                                     ok 필수
// emailAddress:                      // 이메일뒤에 주소                                             ok  필수
// year: '',                          //생년월일 , 년                                               ok  선택
// month: '',                          //생년월일 , 월                                              ok  선택
// day: '',                           //생년월일 , 일                                               ok  선택
// recommendedId:                      // 추천아이디                                                  ok 선택
// recommendedIdCheck:                // 추천아이디체크여부          200:있다 null:없다.                  ok 선택
// termsOfUseCheck: null,             //이용약관 동의여부            false:안했다. true:했다              ok 필수
// ageCheck: null,                    // 나이체크 여부             false:안했다.  true:했다              ok 필수
// eventSms: null,                    // 이벤트 sns수신 체크        false:거부    true:동의              ok 선택
// eventApp: null,                    //이벤트 app수신 체크         false:거부    true:동의              ok 선택
// eventEmail: null,                  //이벤트 email수신 체크       false:거부    true:동의              ok 선택
