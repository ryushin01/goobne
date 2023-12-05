import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../../public/images/instagram_icon.svg';
import { ReactComponent as Facebook } from '../../../public/images/facebook_icon.svg';
import { ReactComponent as Naverblog } from '../../../public/images/blog_icon.svg';
import { ReactComponent as Youtube } from '../../../public/images/youtube_icon.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <InnerTopSection>
          <div>
            <ul>
              <li>
                <InquirySubText>전화주문 </InquirySubText>
                <InquiryNumber>1544-0000</InquiryNumber>
              </li>
              <li>
                <InquirySubText>창업문의 </InquirySubText>
                <InquiryNumber>1644-0000</InquiryNumber>
              </li>
            </ul>
          </div>
          <InfoArea>
            <ul>
              <li>
                <InfoAreaTarget href="javascript:void(0)">
                  이용약관
                </InfoAreaTarget>
              </li>
              <li>
                <InfoAreaTarget href="javascript:void(0)">
                  개인정보처리방침
                </InfoAreaTarget>
              </li>
              <li>
                <InfoAreaTarget href="javascript:void(0)">
                  이메일무단수집거부
                </InfoAreaTarget>
              </li>
              <li>
                <InfoAreaTarget href="javascript:void(0)">
                  찾아오시는길
                </InfoAreaTarget>
              </li>
            </ul>
          </InfoArea>
          <SnsConnectionArea>
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <Instagram alt="인스타그램 이동이미지" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <Facebook alt="페이스북 이동이미지" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <Naverblog alt="네이버블로그 이동이미지" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <Youtube alt="유튜브 이동이미지" />
                </a>
              </li>
            </ul>
          </SnsConnectionArea>
        </InnerTopSection>
        <AddressSection>
          <address>
            <AddressDetailList>
              주식회사 리유니온 대표자 : 류창선
            </AddressDetailList>
            <AddressDetailList>
              주소 서울특별시 중구 한강대로 416 서울스퀘어 13층
            </AddressDetailList>
            <AddressDetailList>사업자등록번호 000-00-00000</AddressDetailList>
            <AddressDetailList>
              통신판매업신고번호 제 2023-서울중구-0000호
            </AddressDetailList>
            <AddressDetailList>TEL 00-0000-0000</AddressDetailList>
            <AddressDetailList>FAX 00-0000-0000</AddressDetailList>
            <AddressDetailList>
              광고 제휴 문의 example@example.com
            </AddressDetailList>
          </address>
          <p>© 2009-2023 REUNION.CO.ALL RIGHT RESERVED</p>
        </AddressSection>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 5%;
  margin-top: 15rem;
  background-color: #212121;
`;

const InnerTopSection = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  padding: 3.5rem 0 3rem 0;
`;

const InquirySubText = styled.p`
  display: inline-block;
  vertical-align: middle;
  font-size: 2.1rem;
  font-weight: 600;
  margin-left: 5px;
  color: #fff;
`;

const InquiryNumber = styled.p`
  display: inline-block;
  vertical-align: middle;
  font-size: 3.9rem;
  font-weight: 900;
  color: #fff;
`;

const InfoArea = styled.div`
  margin-top: 2.5rem;

  & > ul {
    display: flex;
    flex-direction: row;
  }
`;

const InfoAreaTarget = styled.a`
  margin-right: 2rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
`;

const SnsConnectionArea = styled.div`
  margin-top: 2rem;

  & > ul {
    display: flex;
  }

  & > ul > li {
    margin-right: 2rem;
  }
`;

const AddressSection = styled.section`
  margin-top: 3rem;

  & > address {
    float: right;
  }

  & > p {
    font-size: 1.4rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
    float: left;
  }
`;

const AddressDetailList = styled.p`
  float: left;
  position: relative;
  margin-right: 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: -1rem;
    transform: translate(0, -50%);
    width: 1px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
  }
`;

export default Footer;
