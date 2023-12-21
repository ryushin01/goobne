import Radio from '../../../components/Radio/Radio';
import SelectBox from '../../../components/SelectBox/SelectBox';
import { getDays, getMonths, getYears } from '../../../data/BirthData';
import { RADIO_GROUP_DATA } from '../../../data/RadioGroupData';
import styled from 'styled-components';

/**
 * AdditionalInfo props list
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

  /**
   * 1.이벤트에 인자로 id 를 받습니다.
   * 2.데이터에 id와 인자로 들어온 id가 같은것만 세터함수를 활용해 데이터에 value값을 gender 담습니다.
   * 3.그외는 defaultChecked 값음 false로 만들어 체크상태를 풀어줍니다.
   */
  const radioClick = id => {
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
                  radioClick(id);
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
