import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <InnerTopSection>
          <NumberArea>
            <NumberInnerBlock>
              <li>
                <PhoneOrder>전화주문 </PhoneOrder>
                <OrderNumber>1661-9494</OrderNumber>
              </li>
              <li>
                <p>창업문의 </p>
                <p>1899-9458</p>
              </li>
            </NumberInnerBlock>
          </NumberArea>
          <div>
            <ul>
              <li>
                <a href="javascript:void(0)">이용약관</a>
              </li>
              <li>
                <a href="javascript:void(0)">개인정보처리방침</a>
              </li>
              <li>
                <a href="javascript:void(0)">이메일무단수집거부</a>
              </li>
              <li>
                <a href="javascript:void(0)">찾아오시는길</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <img src="" alt="인스타그램이동이미지" />
              </li>
              <li>
                <img src="" alt="페이스북이동이미지" />
              </li>
              <li>
                <img src="" alt="네이버블로그이동이미지" />
              </li>
              <li>
                <img src="" alt="유튜브이동이미지" />
              </li>
            </ul>
          </div>
        </InnerTopSection>
        <section>
          <address>
            <p>주식회사 리유니온 대표자 : 류창선</p>
            <p>주소 서울특별시 중구 한강대로 416 서울스퀘어 13층</p>
            <p>사업자등록번호 000-00-00000</p>
            <p>통신판매업신고번호 제 2023-서울중구-0000호</p>
            <p>TEL 00-0000-0000</p>
            <p>FAX 00-0000-0000</p>
            <p>광고 제휴 문의 example@example.com</p>
          </address>
          <p>© 2009-2023 REUNION.CO.ALL RIGHT RESERVED</p>
        </section>
      </FooterInner>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 5%;
  margin-top: 15rem;
  background-color: #212121;
`;

const FooterInner = styled.div``;

const InnerTopSection = styled.section`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 3.5rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const NumberArea = styled.div``;

const NumberInnerBlock = styled.ul`
  list-style: none;
`;

const PhoneOrder = styled.p`
  display: inline-block;
  vertical-align: middle;
  font-size: 2.1rem;
  font-weight: 600;
  margin-left: 5px;
  color: #fff;
`;

const OrderNumber = styled.p`
  display: inline-block;
  vertical-align: middle;
  font-size: 3.9rem;
  font-weight: 900;
  color: #fff;
`;

export default Footer;
