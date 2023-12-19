import { useState } from 'react';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import Radio from '../../components/Radio/Radio';
import IconButton from '../../components/IconButton/IconButton';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

// import { customAxios } from '../../API/API'; 테스트를 마치면 활성화 합니다.
// import { API } from '../../../config'; 테스트를 마치면 활성화 합니다.
import { idDuplicateCheck_test } from '../../API/TEST_API'; //테스트용 api 입니다.
import { EMAIL_DATA } from '../../data/EmailData';
import { cert_test, basic_test } from '../../API/TEST_API';
import { getDays, getMonths, getYears } from '../../data/BirthData';

const Join = () => {
  const now = new Date();
  const years = getYears(now.getFullYear(), 1940);
  const months = getMonths();
  const days = getDays();

  /**회원가입에 필요한 정보를 저장하는 useState를 정의합니다. */
  const [userJoinInfo, setUserJoinInfo] = useState({
    name: '', //이름
    id: '', //아이디
    duplicateCheck: null, //중복 체크여부
    password: '', //비밀번호
    confirmPassword: '', //비밀번호확인
    email: '', //이메일
    emailAddress: '', //이메일주소
    emailReceptionCheck: false, //이메일이벤트 동의여부
    phoneNum: '', //핸드폰번호
    snsReceptionCheck: false, //sns이벤트 동의여부
    certificationNum: '', //인증번호
    certification: null, //인증번호확인여부
    address: '', //주소
    zipCode: '',
    detailedAddress: '', //상세주소
    recommendedId: '', //추천인아이디
    recommendedIdCheck: null, //존재여부 체크
    year: '', //생년월일 , 년
    month: '', //생년월일 , 월
    day: '', //생년월일 , 일
  });
  console.log(userJoinInfo);

  const saveUserJoinInfo = event => {
    const { name, value } = event.target;
    setUserJoinInfo({ ...userJoinInfo, [name]: value });
  };

  const [isAddressFind, setIsAddressFind] = useState(false);
  console.log(isAddressFind);
  /**테스트를 하기위해 서버로 보낸 내가입력한 아이디를 저장하는 useState를 정의합니다.*/
  const [testCheckId, setTestCheckID] = useState('');
  console.log(testCheckId);
  /**테스트를 하기위해 서버로 보낸 내가입력한 핸드폰번호를 저장하는 useState를 정의합니다. */
  const [severCertificationNum, setServerCertificationNum] = useState(null);
  console.log(severCertificationNum);
  /**테스트를 하기위해 서버로 보낸 내가입력한 추천인아이디를 저장하는 useState를 정의합니다. */
  const [testRecommendedId, setTestRecommendedId] = useState('');
  console.log(testRecommendedId);

  const idDuplicateCheck = () => {
    // const params = userJoinInfo.id;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

    //TODO:인풋에 아이디를 입력 하지않았을때 id 값이 없을때 Verification 체크를 해야한다.
    idDuplicateCheck_test(200, userJoinInfo.id)
      .then(response => {
        console.log(response);
        setUserJoinInfo({ ...userJoinInfo, duplicateCheck: response.status });
        setTestCheckID(response.checkId);
      })
      .catch(error => {
        if (error.status === 404) {
          alert('중복된 아이디입니다.');
        }
      });
  };

  /**
   * 인증번호를 불러오는 get test axios입니다.
   * 1.인증번호를 불러오기 위한 필수값에 입력이 체크 및 입력이 되어있는지 확인합니다.
   * 2.확인이 되어있다면 API폴더 하위 index.js파일에 .cert_test Promise객체를 가진 test axios가 실행됩니다.
   * (구조는 API폴더 하위 index.js파일 확인)
   * 3.인자로 200 전달해주면 알림창이 실행됩니다.
   * 4.setServerCertificationNum(인증번호)를 useState에 담습니다. => 실제로는 useState 담을필요가없지만
   * 서버가 없기때문에 인증번호를 받아 임시로 저장해 체크하기위해 담아놓는것입니다.
   */
  const getCertNumber = () => {
    // const params = userJoinInfo.phoneNum;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

    const { phoneNum } = userJoinInfo;
    //테스트 api 입니다.
    cert_test(200, phoneNum)
      .then(data => {
        alert('인증번호를 발송했습니다.');
        setServerCertificationNum(data.number);
        //가상의 인증번호를 보기위해있는 console.log 입니다.
        console.log(data);
      })
      .catch(() => {
        alert('인증번호 발송에 실패하였습니다.');
      });
  };
  const certificationSubmit = () => {
    // const params = userJoinInfo.certificationNum;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

    basic_test(
      severCertificationNum === Number(userJoinInfo.certificationNum)
        ? 200
        : 400,
    )
      .then(res => {
        setUserJoinInfo({ ...userJoinInfo, certification: res.status });
        alert('인증완료');
      })
      .catch(error => {
        if (error.status === 400) alert('인증번호가 틀렸습니다.');
      });
  };

  const recommendedIdSubmit = () => {
    // const params = userJoinInfo.recommendedId;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    // .post(JOIN_POST, params) //백엔드 서버 api입니다.

    basic_test(200)
      .then(res => {
        setTestRecommendedId(userJoinInfo.recommendedId);
        setUserJoinInfo({ ...userJoinInfo, recommendedIdCheck: res.status });
        alert('추천인아이디등록');
      })
      .catch(error => {
        if (error.status === 400) alert('존재하지않는 아이디입니다.');
      });
  };

  const find = () => {
    setIsAddressFind(!isAddressFind);
  };

  const complete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setIsAddressFind(false);
    setUserJoinInfo({
      ...userJoinInfo,
      address: fullAddress,
      zipCode: data.zonecode,
    });

    // console.log(data);
    // console.log(fullAddress);
    // console.log(data.zonecode);
  };
  return (
    <JoinContainerMain>
      <JoinContainerWrapSection>
        <JoinHeading>회원가입</JoinHeading>

        <FormContainerForm>
          <Legend>회원가입 유저정보</Legend>

          {/* 기본정보 입력창 영역 */}
          <BasicInfoSection>
            <InfoGuideInnerDiv>
              <h3>기본정보</h3>
              <div>
                <span className="emphasis">*</span>
                <span> 표시는 반드시 입력하셔야 하는 항목입니다.</span>
              </div>
            </InfoGuideInnerDiv>

            <InfoNameInnerDiv>
              <Input
                label="이름"
                required="required"
                placeholder="이름을 입력해주세요."
                type="text"
                direction="column"
                name="name"
                onChange={saveUserJoinInfo}
              />
            </InfoNameInnerDiv>

            {/* 아이디 중복체크 인풋 영역 */}
            <IdWrapDiv>
              <Input
                label="아이디"
                required="required"
                placeholder="아이디를 입력해주세요."
                type="text"
                direction="column"
                name="id"
                onChange={saveUserJoinInfo}
              />

              <DoubleCheckBtnInnerDiv>
                <Button
                  content="중복확인"
                  color="black"
                  size="medium"
                  type="button"
                  onClick={idDuplicateCheck}
                />
              </DoubleCheckBtnInnerDiv>
            </IdWrapDiv>

            <Input
              label="비밀번호"
              required="required"
              placeholder="비밀번호을 입력해주세요."
              type="password"
              direction="column"
              name="password"
              onChange={saveUserJoinInfo}
              onWheel={e => e.target.blur()}
            />

            <Input
              label="비밀번호 확인"
              required="required"
              placeholder="비밀번호을 입력해주세요."
              type="password"
              direction="column"
              name="confirmPassword"
              onChange={saveUserJoinInfo}
              onWheel={e => e.target.blur()}
            />

            <Input
              label="이메일"
              required="required"
              placeholder="이메일을 입력해주세요."
              type="text"
              direction="column"
              name="email"
              onChange={saveUserJoinInfo}
            />

            <EmailWrapDiv>
              <span>@</span>
              <Input name="emailAddress" onChange={saveUserJoinInfo} />
              <SelectBox data={EMAIL_DATA} value="직접입력" />
            </EmailWrapDiv>

            <CheckBox
              label="정보/이벤트 메일 수신에 동의합니다."
              onChange={e => {
                setUserJoinInfo(userJoinInfo => ({
                  ...userJoinInfo,
                  emailReceptionCheck: e.target.checked,
                }));
              }}
              checked={userJoinInfo.emailReceptionCheck}
            />

            <PhoneAuthenticationWrapDiv>
              <Input
                label="휴대폰번호"
                required="required"
                direction="column"
                placeholder="- 없이 휴대폰 번호를 입력하세요."
                name="phoneNum"
                onChange={saveUserJoinInfo}
                type="number"
                onWheel={e => e.target.blur()}
              />
              <SandAuthenticationBtnInnerDiv>
                <Button
                  content="인증번호 발송"
                  color="black"
                  size="medium"
                  type="button"
                  onClick={getCertNumber}
                />
              </SandAuthenticationBtnInnerDiv>
            </PhoneAuthenticationWrapDiv>

            <CheckBox
              label="정보/이벤트 SNS 수신에 동의합니다."
              onChange={e => {
                setUserJoinInfo(userJoinInfo => ({
                  ...userJoinInfo,
                  snsReceptionCheck: e.target.checked,
                }));
              }}
              checked={userJoinInfo.snsReceptionCheck}
            />
            {/* 인증번호 입력 확인버튼 구역 */}
            <CertificationWrap>
              <Input
                direction="column"
                placeholder="인증번호를 입력하세요."
                name="certificationNum"
                type="number"
                onWheel={e => e.target.blur()}
                onChange={saveUserJoinInfo}
              />
              <CertificationBtnInner>
                <Button
                  content="인증하기"
                  color="black"
                  size="medium"
                  type="button"
                  onClick={certificationSubmit}
                />
              </CertificationBtnInner>
            </CertificationWrap>

            <AddressSearchWrap>
              <Input
                direction="column"
                placeholder="우편번호"
                name="zipCode"
                value={userJoinInfo.zipCode}
              />
              <AddressSearchBtnInner>
                <Button
                  content="주소검색"
                  color="black"
                  size="medium"
                  type="button"
                  onClick={find}
                />
              </AddressSearchBtnInner>
            </AddressSearchWrap>

            <Input
              direction="column"
              placeholder="주소"
              type="text"
              value={userJoinInfo.address}
            />
            <Input
              direction="column"
              placeholder="상세주소"
              name="detailedAddress"
              type="text"
              onChange={saveUserJoinInfo}
            />
          </BasicInfoSection>

          {/* 부가정보 입력창 영역 */}
          <AdditionalInfoWrapSection>
            <h3>부가정보</h3>

            <GenderSelectWrapDiv>
              <div>
                <span>성별</span>
                <span className="required">&nbsp;*</span>
              </div>
              <GenderRadioInnerDiv>
                <Radio text="남자" defaultChecked={true} />
                <Radio text="여자" defaultChecked={true} />
              </GenderRadioInnerDiv>
            </GenderSelectWrapDiv>

            <BirthDateWrapDiv>
              <div>
                <span>생년월일</span>
                <span className="required">&nbsp;*</span>
              </div>

              <BirthDateSelectBoxInnerDiv>
                <SelectBox data={years} value="선택" />
                <SelectBox data={months} value="선택" />
                <SelectBox data={days} value="선택" />
              </BirthDateSelectBoxInnerDiv>
            </BirthDateWrapDiv>
          </AdditionalInfoWrapSection>

          {/* 약관 동의 체크사항 영역 */}
          <AgreementWrapSection>
            <h3>약관동의</h3>
            <PrivacyWrapDiv>
              <CheckBox label="전체 약관에 동의합니다. (선택 항목도 포함합니다.)" />
              <CheckBox label="(필수) 이용약관에 모두 동의합니다." />
              <ul>
                <AgreementItemLi>
                  <AgreementContentSpan>
                    구부네 치킨 이용약관
                  </AgreementContentSpan>
                  <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
                </AgreementItemLi>

                <AgreementItemLi>
                  <AgreementContentSpan>
                    개인정보 수집/이용
                  </AgreementContentSpan>
                  <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
                </AgreementItemLi>

                <AgreementItemLi>
                  <AgreementContentSpan>
                    개인정보취급 위탁안내
                  </AgreementContentSpan>
                  <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
                </AgreementItemLi>

                <AgreementItemLi>
                  <AgreementContentSpan>
                    개인정보 제3자동의
                  </AgreementContentSpan>
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

          {/* 가입추천인 입력영역 */}
          <RecommenderWrapSection>
            <h3>가입 추천인 아이디 {'(선택)'}</h3>

            <RecommenderInnerDiv>
              <Input
                direction="column"
                label="아이디"
                name="recommendedId"
                type="text"
                onChange={saveUserJoinInfo}
              />

              <RecommenderBtnInnerDiv>
                <Button
                  color="black"
                  content="확인"
                  size="medium"
                  type="button"
                  onClick={recommendedIdSubmit}
                />
              </RecommenderBtnInnerDiv>
            </RecommenderInnerDiv>
          </RecommenderWrapSection>

          {/* 제출 버튼 영역 */}
          <FormSelectBtnInner>
            <Button color="beige" content="이전단계" />
            <Button color="black" content="가입하기" />
          </FormSelectBtnInner>
        </FormContainerForm>
      </JoinContainerWrapSection>

      {/* 주소를 찾는 영역 */}
      {isAddressFind && (
        <DaumPostcodeWrapDiv>
          <DaumPostcodeInnerDiv>
            <IconDiv>
              <IconButton
                content="close"
                size="small"
                onClick={() => setIsAddressFind(false)}
              ></IconButton>
            </IconDiv>
            <DaumPostcodeDiv>
              <DaumPostcode onComplete={complete}></DaumPostcode>
            </DaumPostcodeDiv>
          </DaumPostcodeInnerDiv>
        </DaumPostcodeWrapDiv>
      )}
    </JoinContainerMain>
  );
};

export default Join;
/**전체 컨테이너 스타일 영역 */
const JoinContainerMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.grayscaleB};
`;

const JoinContainerWrapSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  min-width: 550px;
  margin: 0 auto;
`;
const JoinHeading = styled.h2`
  font-weight: 900;
  font-size: 35px;
`;

const FormContainerForm = styled.form`
  width: 100%;
`;
const Legend = styled.legend`
  font-size: 0;
`;

/** 기본정보 스타일 시작 */
const BasicInfoSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 50px;
`;

const InfoGuideInnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
  padding: 20px 0px;
  margin-top: 20px;

  & > h3 {
    font-size: 20px;
    font-weight: 800;
  }
  & > div > span {
    font-size: 12px;
    font-weight: 800;
  }
  & > div > .emphasis {
    color: red;
  }
`;

const InfoNameInnerDiv = styled.div`
  margin-top: 30px;
`;

const IdWrapDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const DoubleCheckBtnInnerDiv = styled.div`
  width: 150px;
`;

const EmailWrapDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PhoneAuthenticationWrapDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin: 10px 0px;
`;

const SandAuthenticationBtnInnerDiv = styled.div`
  width: 300px;
`;

const CertificationWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const CertificationBtnInner = styled.div`
  width: 300px;
`;

const AddressSearchWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

const AddressSearchBtnInner = styled.div`
  width: 300px;
`;
/** 기본정보 스타일 하단 끝 */

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

/** 추천인 입력 영역 스타일 시작 */
const RecommenderWrapSection = styled.section`
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

const RecommenderInnerDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin-top: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
`;

const RecommenderBtnInnerDiv = styled.div`
  width: 200px;
`;

const FormSelectBtnInner = styled.div`
  display: flex;
  gap: 5px;
  width: 400px;
  margin: 50px auto;
`;
/** 추천인 입력 영역 스타일 끝 */

/** 주소검색 스타일 영역 */
const DaumPostcodeWrapDiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
  position: absolute;
  top: 0;
`;

const DaumPostcodeInnerDiv = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.grayscaleA};
`;

const DaumPostcodeDiv = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const IconDiv = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;

// userInfo 1차 데이터 목록 체크

// name:                // 이름                                                  ok 필수
// id:                 // 아이디                                                 ok 필수
// duplicateCheck:      // 중복체크여부  1:했다 0:안했다.                             ok 필수
// password:             //비밀번호                                               ok 필수
// confirmPassword:        //비밀번호 확인                                         ok 필수
// email:                // 이메일아이디                                           ok 필수
// emailAddress:         // 이메일뒤에 주소                                            필수
// emailReceptionCheck     // 이벤트수신여부 false:미수신 true:수신                   ok  선택
// snsReceptionCheck       // 이벤트수신여부 false:미수신 true:수신                  ok  선택
// phoneNum:               //핸드폰번호                                          ok 필수
// certificationNum  // 인증번호입력                                              ok 필수
// certification:   //인증체크여부         200:했다 null:안했다.                     ok 필수
// zipCode:       // 우편주소                                                    ok 선택
// Address:      //주소                                                         ok 선택
// detailedAddress  //상세주소                                                   ok 선택
// gender:         // 성별                                                         필수
// BirthDate :    //  생년월일                                                      필수
// recommendedId:  // 추천아이디                                                  ok 선택
// recommendedIdCheck:  // 추천아이디체크여부  200:있다 null:없다.                    ok 선택

//TODO:1.인풋에 아이디를 입력 하지않고 중복체크 버튼을 눌렀을때 값을 입력하라고 해야하고 글자수 제한등 Verification 체크를 해야한다.
//TODO:2.비밀번호(password)값 비밀번호확인(confirmPassword)값이 같은지 확인해야한다 , 숫자 특수문자 포함 Verification 체크
//TODO:3.추천아이디에 값이 없다면 버튼이 안되어야한다.
//TODO:4.모든 Verification 체크
