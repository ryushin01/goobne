import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import CheckBox from '../../../components/CheckBox/CheckBox';
import styled from 'styled-components';

const NonMemberLogin = () => {
  return (
    <>
      <NonLoginWrapForm>
        <fieldset>
          <legend>비회원로그인</legend>
          <Input
            placeholder="이름"
            type="text"
            label="이름"
            direction="column"
            name="name"
          />
          <PhoneAuthenticationDiv>
            <Input
              placeholder="- 없이 입력하세요."
              type="text"
              label="핸드폰 번호"
              direction="column"
              name="phoneNum"
            />
            <BtnInner>
              <Button
                size="medium"
                content="인증번호발송"
                color="black"
                type="button"
              />
            </BtnInner>
          </PhoneAuthenticationDiv>

          <Input
            placeholder="인증번호를 입력헤주세요."
            type="text"
            label="인증번호"
            direction="column"
            name="id"
          />
        </fieldset>
      </NonLoginWrapForm>

      <AgreementWrapDiv>
        <CheckBox label="(필수) 이용약관에 모두 동의합니다." />

        <ul>
          <AgreementItemLi>
            <AgreementContentSpan>개인정보 수집/이용</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>

          <AgreementItemLi>
            <AgreementContentSpan>위치기반 서비스 이용</AgreementContentSpan>
            <AgreementContentButton>내용보기{'>'}</AgreementContentButton>
          </AgreementItemLi>
        </ul>
      </AgreementWrapDiv>

      <NonMemBerOrderContainer>
        <Button
          color="black"
          content="비회원 주문"
          size="large"
          type="button"
        />
      </NonMemBerOrderContainer>
    </>
  );
};

export default NonMemberLogin;

const NonLoginWrapForm = styled.form`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grayscaleC};
  padding-bottom: 30px;
  margin-bottom: 10px;

  & > fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > fieldset > legend {
    font-size: 0;
  }
`;
const PhoneAuthenticationDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  width: 100%;
`;
const BtnInner = styled.div`
  width: 200px;
`;

const AgreementWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
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
const NonMemBerOrderContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
