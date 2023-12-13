import styled from 'styled-components';
import Input from '../../components/Input/Input';
import SelectBox from '../../components/SelectBox/SelectBox';
import Button from '../../components/Button/Button';
import CheckBox from '../../components/CheckBox/CheckBox';

const Join = () => {
  return (
    <JoinContainerMain>
      <JoinContainerSection>
        <JoinHeading>회원가입</JoinHeading>

        <FormContainerForm>
          <Legend>회원가입 유저정보</Legend>

          <BasicInfoSection>
            <InfoGuideInnerDiv>
              <h3>기본정보</h3>
              <div>
                <span className="emphasis">*</span>
                <span> 표시는 반드시 입력하셔야 하는 항목입니다.</span>
              </div>
            </InfoGuideInnerDiv>

            <Input
              label="이름"
              required="required"
              placeholder="이름을 입력해주세요."
              type="text"
              direction="column"
            />
            <IdWrapDiv>
              <Input
                label="아이디"
                required="required"
                placeholder="아이디를 입력해주세요."
                type="text"
                direction="column"
              />

              <DoubleCheckBtnInner>
                <Button content="중복확인" color="black" size="medium" />
              </DoubleCheckBtnInner>
            </IdWrapDiv>

            <Input
              label="비밀번호"
              required="required"
              placeholder="비밀번호을 입력해주세요."
              type="password"
              direction="column"
            />

            <Input
              label="비밀번호 확인"
              required="required"
              placeholder="비밀번호을 입력해주세요."
              type="password"
              direction="column"
            />

            <Input
              label="이메일"
              required="required"
              placeholder="이메일을 입력해주세요."
              type="text"
              direction="column"
            />

            <EmailWrapDiv>
              <span>@</span>
              <Input />
              <SelectBox />
            </EmailWrapDiv>

            <CheckBox label="정보/이벤트 메일 수신에 동의합니다." />

            <PhoneAuthenticationDiv>
              <Input
                label="휴대폰번호"
                required="required"
                direction="column"
                placeholder="- 없이 휴대폰 번호를 입력하세요."
              />
              <SandAuthenticationBtnDiv>
                <Button content="인증번호 발송" color="black" size="medium" />
              </SandAuthenticationBtnDiv>
            </PhoneAuthenticationDiv>

            <CheckBox label="정보/이벤트 SNS 수신에 동의합니다." />

            <CertificationWrap>
              <Input direction="column" placeholder="인증번호를 입력하세요." />
              <CertificationBtnInner>
                <Button content="인증하기" color="black" size="medium" />
              </CertificationBtnInner>
            </CertificationWrap>

            <AddressSearchWrap>
              <Input direction="column" placeholder="우편번호" />
              <AddressSearchBtnInner>
                <Button content="주소검색" color="black" size="medium" />
              </AddressSearchBtnInner>
            </AddressSearchWrap>

            <Input direction="column" placeholder="주소" />
            <Input direction="column" placeholder="상세주소" />
          </BasicInfoSection>

          <section>
            <h3>부가정보</h3>
          </section>

          <section>
            <h3>약관동의</h3>
          </section>

          <section>
            <h3>가입 추천인 아이디 {'(선택)'}</h3>
          </section>
        </FormContainerForm>
      </JoinContainerSection>
    </JoinContainerMain>
  );
};

export default Join;
const JoinContainerMain = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 150px;
  background-color: ${props => props.theme.grayscaleB};
`;

const JoinContainerSection = styled.section`
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
const BasicInfoSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const IdWrapDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;
const DoubleCheckBtnInner = styled.div`
  width: 150px;
`;

const EmailWrapDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PhoneAuthenticationDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin: 10px 0px;
`;
const SandAuthenticationBtnDiv = styled.div`
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
