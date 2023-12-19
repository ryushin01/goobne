import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styled from 'styled-components';

const RecommenderInfo = ({ saveUserJoinInfo, recommendedIdSubmit }) => {
  /**
   * BasicInfo props list
   * @property {Hook}     userJoinInfo                             - 유저의 가입정보를 담는 useState 입니다.
   * @property {function} recommendedIdSubmit                      - 추천아이디를 입력후 확인버튼을 클릭시 실행되는 함수입니다.
   */

  return (
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
  );
};

export default RecommenderInfo;

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

/** 추천인 입력 영역 스타일 끝 */
