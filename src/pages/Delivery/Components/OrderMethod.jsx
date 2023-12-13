import styled from 'styled-components';
import Button from '../../../components/Button/Button';

const OrderMethod = () => {
  return (
    <OrderWrap>
      <OrderSelectionList>
        <li>배달주문</li>
        <li>포장주문</li>
      </OrderSelectionList>
      <OrderListWrap>
        <AddressConfimation>등록된 주소가 없습니다.</AddressConfimation>
      </OrderListWrap>
      <OrderBottom>
        <ButtonWrap>
          <Button size="small" color="brown" content="+ 배달주소 등록" />
        </ButtonWrap>
        <span>* 배달주소는 최대 10개까지만 등록 가능합니다.</span>
      </OrderBottom>
    </OrderWrap>
  );
};
export default OrderMethod;

const FlexBetween = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderWrap = styled.section`
  width: 100%;
`;

const OrderSelectionList = styled.ul`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};

  & > li {
    padding: 12px 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: ${props => props.theme.grayscaleD};
    font-size: 14px;
    cursor: pointer;
  }
`;

const OrderListWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grayscaleH};
`;

const AddressConfimation = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 15px 0;
`;

const OrderBottom = styled.div`
  ${FlexBetween};
  padding: 33px;
  background-color: #f5ece4;
  font-size: 14px;

  & > span {
    color: ${props => props.theme.grayscaleI};
  }
`;

const ButtonWrap = styled.div`
  width: 15%;
`;
