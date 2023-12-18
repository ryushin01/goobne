import { useState } from 'react';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';
import Radio from '../../components/Radio/Radio';
import styled from 'styled-components';
// import { customAxios } from '../../API/API'; 테스트를 마치면 활성화 합니다.
// import { API } from '../../../config'; 테스트를 마치면 활성화 합니다.
import { idDuplicateCheck_test } from '../../API/TEST_API'; //테스트용 api 입니다.

const Join = () => {
  /**회원가입에 필요한 정보를 저장하는 useState를 정의합니다. */
  const [userJoinInfo, setUserJoinInfo] = useState({
    name: '',
    id: '',
    duplication: null,
  });
  console.log(userJoinInfo);

  const saveUserJoinInfo = event => {
    const { name, value } = event.target;
    setUserJoinInfo({ ...userJoinInfo, [name]: value });
  };

  /**중복체크한 아이디랑 Verification 하기위한  useState 정의합니다.*/
  const [testCheckId, setTestCheckID] = useState('');
  console.log(testCheckId);

  const idDuplicateCheck = () => {
    // const params = userJoinInfo.id;
    // const response = await customAxios //eslint-disable-line no-unused-vars
    //   .post(JOIN_POST, params) //백엔드 서버 api입니다.

    //TODO:인풋에 아이디를 입력 하지않았을때 id 값이 없을때 체크를 해야한다.

    idDuplicateCheck_test(200, userJoinInfo.id)
      .then(response => {
        console.log(response);
        setUserJoinInfo({ ...userJoinInfo, duplication: response.status });
        setTestCheckID(response.checkId);
      })
      .catch(error => {
        if (error.status === 404) {
          alert('존재하는 아이디입니다.');
        }
      });
  };

  // userInfo 1차 데이터 목록 체크

  // name:         // 이름                              ok
  // id:           // 아이디                             ok
  // duplication:  // 중복체크여부  1:했다 0:안했다.         ok
  // password:      //비밀번호
  // confirmPassword: //비밀번호 확인
  // email:        // 이메일아이디
  // emailAddress: // 이메일뒤에 주소
  // eventEmail    // 0 1 이벤트체크여부 또는 블리언
  // phoneNum:       //핸드폰번호
  // certificationNum  // 인증번호입력
  // certification:   //인증체크여부 0 1 또는 블리언 = 인증체크를했는지안했는지
  // zipCode:       // 우편주소
  //  Address:      //주소
  // detailedAddress  //상세주소
  // gender:         // 성별
  // BirthDate :    //  생년월일
  // recommendedId:  // 아이디 //있는지 여부 체크

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
            />

            <Input
              label="비밀번호 확인"
              required="required"
              placeholder="비밀번호을 입력해주세요."
              type="password"
              direction="column"
              name="confirmPassword"
            />

            <Input
              label="이메일"
              required="required"
              placeholder="이메일을 입력해주세요."
              type="text"
              direction="column"
              name="email"
            />

            <EmailWrapDiv>
              <span>@</span>
              <Input name="emailAddress" />
              <SelectBox />
            </EmailWrapDiv>

            <CheckBox label="정보/이벤트 메일 수신에 동의합니다." />

            <PhoneAuthenticationWrapDiv>
              <Input
                label="휴대폰번호"
                required="required"
                direction="column"
                placeholder="- 없이 휴대폰 번호를 입력하세요."
                name="phoneNum"
                // onChange={}
              />
              <SandAuthenticationBtnInnerDiv>
                <Button
                  content="인증번호 발송"
                  color="black"
                  size="medium"
                  type="button"
                  // onClick={}
                />
              </SandAuthenticationBtnInnerDiv>
            </PhoneAuthenticationWrapDiv>

            <CheckBox label="정보/이벤트 SNS 수신에 동의합니다." />

            <CertificationWrap>
              <Input
                direction="column"
                placeholder="인증번호를 입력하세요."
                name="certificationNum"
                type="text"
                // onChange={}
              />
              <CertificationBtnInner>
                <Button
                  content="인증하기"
                  color="black"
                  size="medium"
                  type="button"
                  // onClick={}
                />
              </CertificationBtnInner>
            </CertificationWrap>

            <AddressSearchWrap>
              <Input direction="column" placeholder="우편번호" name="zipCode" />
              <AddressSearchBtnInner>
                <Button
                  content="주소검색"
                  color="black"
                  size="medium"
                  type="button"
                />
              </AddressSearchBtnInner>
            </AddressSearchWrap>

            <Input direction="column" placeholder="주소" />
            <Input
              direction="column"
              placeholder="상세주소"
              name="detailedAddress"
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
                <SelectBox />
                <SelectBox />
                <SelectBox />
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
              <Input direction="column" label="아이디" name="recommendedId" />

              <RecommenderBtnInnerDiv>
                <Button
                  color="black"
                  content="확인"
                  size="medium"
                  type="button"
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
    </JoinContainerMain>
  );
};

export default Join;
/**전체 컨테이너 스타일 영역 */
const JoinContainerMain = styled.main`
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
