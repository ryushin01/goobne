import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/Redux';

/**
 * DetailSelectModal props list
 * @property {number} cartItemId                     - 카트 버튼 클릭시 아이템에 고유의 아이디를 받습니다.
 */

const DetailSelectModal = ({ cartItemId, productListData }) => {
  /**
   * useNavigate()를 navigate 변수에 담습니다.
   */
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const navigateDetail = () => {
    navigate(`/detail/${cartItemId}`);
  };
  const navigateDelivery = id => {
    const productItem = productListData.filter(item => {
      return item.id === id;
    });
    dispatch(
      addCart({
        id: productItem?.id,
        radioData: Number(productItem.radioData),
        name: productItem.title,
        price: productItem.price,
        count: productItem.count,
        src: productItem.image,
        alt: productItem.alt,
      }),
    );
    navigate('/cart');
  };

  return (
    <>
      <ButtonWrapDiv>
        <Button
          color="black"
          content="옵션선택 하러가기"
          onClick={navigateDetail}
        />
        <Button
          color="primary"
          content="장바구니 바로가기"
          onClick={() => {
            navigateDelivery(cartItemId);
          }}
        />
      </ButtonWrapDiv>
    </>
  );
};

export default DetailSelectModal;

const ButtonWrapDiv = styled.div`
  display: flex;
  gap: 5px;
  width: 400px;
`;
