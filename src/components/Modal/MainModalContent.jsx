import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/Button';

/** Main 첫 랜더링 시 보여줄 Modal Popup Content 입니다. */
const MainModalContent = ({ ModalClose }) => {
  /** Modal에서 버튼 누를 시 페이지 이동을 위한 navigate */
  const navigate = useNavigate();
  /** Login/Logout 여부를 저장하는 변수 입니다. */
  const isLogin = !!localStorage.getItem('accessToken');
  return (
    <ModalContainer>
      <ModalInnerWrap>
        <div>
          <img
            src="/goobne/images/MainModalGif.gif"
            alt="치킨이 춤추고 있는 GIF 이미지"
          />
        </div>
        <div>
          <span>오늘 야식은 치킨이닭!</span>
          <ButtonWrap>
            <Button
              size="small"
              color="beige"
              content="취소"
              onClick={() => {
                ModalClose();
              }}
            />
            {isLogin ? (
              <Button
                size="small"
                color="primary"
                content={'주문하러가기'}
                onClick={() => {
                  ModalClose();
                  navigate('/list');
                }}
              />
            ) : (
              <Button
                size="small"
                color="primary"
                content={'로그인'}
                onClick={() => {
                  ModalClose();
                  navigate('/login');
                }}
              />
            )}
          </ButtonWrap>
        </div>
      </ModalInnerWrap>
    </ModalContainer>
  );
};

export default MainModalContent;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.grayscaleA};
  position: relative;
  z-index: 100;
`;

const ModalInnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;
