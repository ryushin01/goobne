import styled from 'styled-components';

const OrderAmountModal = () => {
  return (
    <div>
      <TextOrderArea>
        ·&nbsp;금액권 조회 후 결제 수단 변경 시 금액권 은 자동 취소 됩니다.
        <br />
        <br /> ·&nbsp;금액권 사용 가능시간 : 12:00 ~ 23:00 (매장별로
        오픈,마감시간,휴무일 차이가 있습니
        <br />
        &nbsp;&nbsp;&nbsp;다)
        <br />
        <br />
        ·&nbsp;금액권 사용여부 및 잔액조회는 상담센터 : 1644-0000 (평일
        9:30~18:00, 주말&공휴
        <br />
        &nbsp;&nbsp;&nbsp;일 상담 불가)
        <br />
        <br /> ·&nbsp;온라인 주문 취소 문의는 굽으네치킨 콜센터 : 1661-0000
        <br />
        <br />
        ·&nbsp;금액권 환불 문의는 상품권 구매처에서만 가능합니다.
        <br />
        <br />
        ·&nbsp;사용후 잔액은 유효기간 내에 재사용 가능합니다.
        <br />
        <br />
        ·&nbsp;잔액은 60% 사용시에 반환 가능합니다.(단, 1만원 이하는 80%)
        <br />
        <br />
        ·&nbsp;잔액 환불 문의 : Pay 고객센터 1644-0000(평일 9:30~18:00,
        주말&공휴일 상담 불가)
        <br />
        <br />
        ·&nbsp;금액권은 매장에서 운영중인 기타 할인, 쿠폰과 중복 사용 혜택
        불가능 합니다
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </TextOrderArea>
    </div>
  );
};

export default OrderAmountModal;

const TextOrderArea = styled.span`
  display: inline-block;
  width: 100%;
  height: 395px;
  padding: 40px 0px;
  line-height: 18px;
  font-family: 'NanumSquareRoundR';
  border-top: 1px solid ${props => props.theme.grayscaleH};
  color: ${props => props.theme.grayscaleD};
`;
