import styled from 'styled-components';
import { ReactComponent as Instagram } from '../../../public/images/instagram_icon.svg';
import { ReactComponent as Facebook } from '../../../public/images/facebook_icon.svg';
import { ReactComponent as Naverblog } from '../../../public/images/blog_icon.svg';
import { ReactComponent as Youtube } from '../../../public/images/youtube_icon.svg';

/**
 * @default javascript:void(0)  - HTML상 a태그의 링크기능을 무효화 하는것을 의미합니다.
 */

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
          <span>© 2009-2023 REUNION.CO.ALL RIGHT RESERVED</span>
          <address>
            <ul>
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
            </ul>
          </address>
        </AddressSection>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 95px 30px 95px;
  margin-top: 240px;
  background-color: ${props => props.theme.grayscaleF};
`;

const InnerTopSection = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.grayscaleJ};
  padding: 35px 0 30px 0;
`;

const InquirySubText = styled.span`
  vertical-align: middle;
  font-size: 20px;
  font-weight: 600;
  margin-left: 5px;
  color: ${props => props.theme.grayscaleA};
`;

const InquiryNumber = styled.span`
  vertical-align: middle;
  font-size: 40px;
  font-weight: 900;
  color: ${props => props.theme.grayscaleA};
`;

const InfoArea = styled.div`
  margin-top: 25px;

  & > ul {
    display: flex;
    flex-direction: row;
  }
`;

const InfoAreaTarget = styled.a`
  margin-right: 32px;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.theme.grayscaleA};
`;

const SnsConnectionArea = styled.div`
  margin-top: 20px;

  & > ul {
    display: flex;
  }

  & > ul > li {
    margin-right: 32px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const AddressSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;

  & > address {
    & > ul {
      display: flex;
    }
  }

  & > span {
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.grayscaleJ};
  }
`;

const AddressDetailList = styled.li`
  margin-right: 32px;
  position: relative;
  font-size: 11px;
  color: ${props => props.theme.grayscaleJ};
  font-weight: 700;

  &:last-child {
    margin-right: 0px;

    &::after {
      display: none;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 8px;
    background: ${props => props.theme.grayscaleJ};
    position: absolute;
    top: 33%;
    right: -16px;
    transform: translate(0, -50%);
  }
`;

export default Footer;
