import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Redux/Redux';

/**
 * DetailSelectModal props list
 * @property {number} cartItemId                     - 카트 버튼 클릭시 아이템에 고유의 아이디를 받습니다.
 * @property {object} productListData                - 프로덕트 리스트 페이지 객체 데이터를 정의합니다.
 */

const DetailSelectModal = ({ cartItemId, productListData }) => {
  /** useNavigate를 navigate 변수에 담습니다.*/
  const navigate = useNavigate();

  /** useDispatch를 dispatch 변수에 담습니다.*/
  const dispatch = useDispatch();

  /** detail페이지로 네비게이트 해주는 함수입니다. cartItemId 값에 맞는 동적 라우팅 해줍니다.*/
  const navigateDetail = () => {
    navigate(`/detail/${cartItemId}`);
  };

  /**
   * 1.아이템에 고유의 아이디를 인자로 받습니다.
   * 2.filter()메서드를 사용합니다. 전체 프로덕트 데이터와 유저가 클릭한 아이템 id와 같은것을 productItem 변수에 담아 return 합니다.
   * 3.productItem 담긴 인덱스[0] 값을 dispatch 해줍니다. (전역상태관리)
   * 4.카트 페이지로 네비게이트 해줍니다.
   */
  const navigateDelivery = cartItemId => {
    const productItem = productListData.filter(item => {
      return item.id === cartItemId;
    });

    dispatch(
      addCart({
        id: productItem[0]?.id,
        radioData: Number(productItem[0].radioData),
        name: productItem[0].mainTitle,
        price: productItem[0].price,
        count: productItem[0].count,
        src: productItem[0].image,
        alt: productItem[0].alt,
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
