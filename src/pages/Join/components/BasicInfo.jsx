import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import SelectBox from '../../../components/SelectBox/SelectBox';
import CheckBox from '../../../components/CheckBox/CheckBox';
import { EMAIL_DATA } from '../../../data/EmailData';
import { basic_test } from '../../../API/TEST_API';
import styled from 'styled-components';

/**
 * BasicInfo props list
 * @property {Hook} userJoinInfo                             - 유저의 가입정보를 담는 useState 입니다.
 * @property {Hook} setUserJoinInfo                          - 유저의 가입정보 변경하는 세터함수 useState 입니다.
 * @property {Hook} severCertificationNum                    - 인증확인 버튼클릭시 서버가가지고있는 핸드폰번호랑같은지 테스트를 하기위한 임시의 useState 입니다.
 * @property {function} saveUserJoinInfo                     - input event.value값을 지정된 useState에 업데이트 하는 함수 입니다.
 * @property {function} AddressFindToggle                    - 주소검색 모달창을 Toggle하는 함수 입니다.
 * @property {function} idDuplicateCheck                     - 아이디 중복체크를 해주는 버튼클릭시 실행되는 함수입니다.
 * @property {function} getCertNumber                        - 인증번호발송 버튼 클릭시 실행되는 인증번호를 보내주는 함수입니다.
 */

const BasicInfo = ({
  saveUserJoinInfo,
  idDuplicateCheck,
  userJoinInfo,
  getCertNumber,
  setUserJoinInfo,
  AddressFindToggle,
  severCertificationNum,
}) => {
  /**
   * 1.인증번호를 확인하는함수입니다.
   * 2.테스트 보내준 저장한 인증번호와 , 사용자가 인풋에 입력한 인증번호가 일치하는지 확인합니다.
   * 3.일치한다면 인증번호성공한 값을 setUserJoinInfo(certification: res.status) 담습니다.
   * 4.알림창을 띄우고 마무리합니다.
   * * 서버가 구축이된다면 가상의 인증번호를 저장할필요는 없습니다.테스트를 하기위해서 저장합니다.
   */
  const certificationSubmit = () => {
    if (userJoinInfo.certificationNum.length < 5) {
      alert('인증번호는 5자리 또는 6자리입니다.');
    } else {
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
    }
  };

  return (
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
          placeholder="영어+숫자가 7글자 이상 특수문자 제외"
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
        placeholder="영문/숫자/특수문자포함 11자리이상 입력하세요."
        type="password"
        direction="column"
        name="password"
        onChange={saveUserJoinInfo}
        onWheel={e => e.target.blur()}
      />

      <Input
        label="비밀번호 확인"
        required="required"
        placeholder="영문/숫자/특수문자포함 11자리이상 입력하세요."
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
        <Input
          name="emailAddress"
          onChange={saveUserJoinInfo}
          value={
            userJoinInfo.emailAddress === '직접입력'
              ? ''
              : userJoinInfo.emailAddress
          }
          disabled={
            EMAIL_DATA.indexOf(userJoinInfo.emailAddress) > 0 ? true : false
          }
        />
        <SelectBox
          data={EMAIL_DATA}
          value="이메일 주소 선택"
          name="emailAddress"
          setUserJoinInfo={setUserJoinInfo}
        />
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
            onClick={AddressFindToggle}
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
  );
};

export default BasicInfo;
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
