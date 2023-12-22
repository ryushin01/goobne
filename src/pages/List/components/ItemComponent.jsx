import { useNavigate } from 'react-router-dom';
import Badge from '../../../components/Badge/Badge';
import IconButton from '../../../components/IconButton/IconButton';
import styled from 'styled-components';

const ListItem = ({ id, imgSrc, price, title, onClick, badge, ...props }) => {
  /**로컬스토리에서 accessToken을 token 변수에 담습니다. */
  const token = localStorage.getItem('accessToken');

  /**토큰이 없다면 로그인페이로 토큰이 있다면 딜리버리 페이지로 이동하는 함수입니다. */
  const cartIconClick = id => {
    if (!token) {
      navigate('/login');
    } else {
      navigate('/delivery');
      console.log(id);
    }
  };

  /**
   * useNavigate()를 navigate 이름으로 변수로 지정합니다.
   */
  const navigate = useNavigate();
  return (
    <ListItemDiv className="emphasisContainer" {...props}>
      <ImgInnerBtnButton
        className="emphasisImgInner"
        onClick={() => {
          onClick(id);
        }}
      >
        <img src={imgSrc} alt="메뉴사진" />
      </ImgInnerBtnButton>

      <ListInfoWrapDiv>
        <BadgeWrapDiv className="test">
          {badge?.map((badge, index) => {
            return (
              <Badge
                key={index}
                shape={badge}
                size="small"
                className="emphasisBadge"
              />
            );
          })}
        </BadgeWrapDiv>

        <TitlePriceWrapDiv className="emphasisTitlePriceWrap">
          <h3>
            <TitleBtn
              className="emphasisTitleInner"
              onClick={() => {
                onClick(id);
              }}
            >
              {title}
            </TitleBtn>
          </h3>

          <PriceButton
            className="emphasisPriceInner"
            onClick={() => {
              onClick(id);
            }}
          >
            {price.toLocaleString('ko-KR')}원
          </PriceButton>
          <IconButton
            content="cart"
            onClick={() => {
              cartIconClick(id);
            }}
            className="emphasisCartIconBtn"
          />
        </TitlePriceWrapDiv>
      </ListInfoWrapDiv>
    </ListItemDiv>
  );
};

export default ListItem;

const ListItemDiv = styled.div`
  width: 300px;
`;
const ListInfoWrapDiv = styled.div`
  background-color: transparent;
  & > h3 {
    font-weight: 900;
    cursor: pointer;
  }
  .cartIconBtn {
    width: 25px;
    /* position: absolute;
    right: 10px;
    top: -15px; */ //이전방법!
  }
`;
const ImgInnerBtnButton = styled.button`
  width: 300px;
  height: 300px;
  border: none;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    aspect-ratio: 1/1;
  }
`;
const BadgeWrapDiv = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 0px;
`;

const PriceButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;

  & + div {
    position: absolute;
    right: 10px;
    top: 10px; //선택자 방법
  }
`;
const TitleBtn = styled.button`
  border: none;
  background-color: transparent;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
`;

const TitlePriceWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`;
