import Badge from '../../../components/Badge/Badge';
import IconButton from '../../../components/IconButton/IconButton';
import styled from 'styled-components';

const ListItem = ({ id, imgSrc, price, title, onClick, badge, ...props }) => {
  return (
    <ListItemDiv {...props}>
      <ImgInner>
        <img src={imgSrc} alt="메뉴사진" />
      </ImgInner>

      <ListInfoWrapDiv>
        <BadgeWrapDiv>
          {badge?.map((badge, index) => {
            return <Badge key={index} shape={badge} size="small" />;
          })}
        </BadgeWrapDiv>

        <h3>{title}</h3>

        <PriceCartInner>
          <span>{price.toLocaleString('ko-KR')}원</span>

          <IconButton
            content="cart"
            onClick={() => {
              onClick(id);
            }}
          />
        </PriceCartInner>
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
`;
const ImgInner = styled.div`
  width: 300px;
  height: 300px;
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

const PriceCartInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  & > span {
    font-weight: 900;
    cursor: pointer;
  }
`;
