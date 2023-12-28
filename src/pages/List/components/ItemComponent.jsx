import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../../../components/Badge/Badge';
import IconButton from '../../../components/IconButton/IconButton';
import Portal from '../../../components/Modal/Portal';
import Modal from '../../../components/Modal/Modal';
import DetailSelectModal from '../../../components/Modal/DetailSelectModal';
import styled from 'styled-components';

/**
 * ListItem props list
 * @property {number} id                             - 아이템 고유의 아이디를 정의합니다.
 * @property {number} price                          - 아이템 가격데이터 정의합니다.
 * @property {string} image                          - 아이템 이미지url 데이터를 정의합니다.
 * @property {string} alt                            - 아이템 alt 데이터를 정의합니다.
 * @property {string} mainTitle                      - 아이템 제목을 정의합니다.
 * @property {function} onClick                      - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 * @property {arr}    badge                             - 뱃지 배열 데이터를 정의합니다.
 * @property {object} productListData                - 프로덕트 리스트 페이지 객체 데이터를 정의합니다.
 */

const ListItem = ({
  id,
  image,
  price,
  mainTitle,
  onClick,
  badge,
  alt,
  productListData,
  ...props
}) => {
  /**로컬스토리에서 accessToken을 token 변수에 담습니다. */
  const token = localStorage.getItem('accessToken');

  /** 카트버튼클릭시 아이템 id를 담을 useState를 정의합니다. */
  const [cartItemId, setCartItemId] = useState('');

  // modal을 여닫기 위한 state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 버튼을 클릭시 defaultModal이 실행되어 modal이 열림
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  /**
   * useNavigate()를 navigate 이름으로 변수로 지정합니다.
   */
  const navigate = useNavigate();

  /**
   * 1.토큰이 없다면 로그인페이로 네비게이트 합니다.
   * 2.토큰이 있다면 모달창을 띄우고 cartItemId에
       이벤트 인자로받은 id를 담습니다. 모달창에 id를 props로 
       주기 위해서 입니다. */
  const cartIconClick = id => {
    if (!token) {
      navigate('/login');
    } else {
      toggleModal();
      setCartItemId(id);
    }
  };

  return (
    <ListItemDiv className="emphasisContainer" {...props}>
      <ImgInnerBtnButton
        className="emphasisImgInner"
        onClick={() => {
          onClick(id);
        }}
      >
        <img src={image} alt={alt} />
      </ImgInnerBtnButton>

      <ListInfoWrapDiv>
        <BadgeWrapDiv>
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
              {mainTitle}
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
          <Portal>
            {isModalOpen && (
              <Modal
                size="small"
                title="메뉴에 대한 옵션을 선택하시겠습니까?"
                isCloseBtn={true}
                content={
                  <DetailSelectModal
                    cartItemId={cartItemId}
                    productListData={productListData}
                  />
                }
              />
            )}
          </Portal>
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
  font-size: 14px;
  font-weight: 900;
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
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const TitlePriceWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`;
