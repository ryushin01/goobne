import IconButton from '../../../components/IconButton/IconButton';
import DaumPostcode from 'react-daum-postcode';

import styled from 'styled-components';
const PostModal = ({ setIsAddressFind, setUserJoinInfo, userJoinInfo }) => {
  const complete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setIsAddressFind(false);
    setUserJoinInfo({
      ...userJoinInfo,
      address: fullAddress,
      zipCode: data.zonecode,
    });

    // console.log(data); 전체데이터
    // console.log(fullAddress); 주소
    // console.log(data.zonecode); 우편번호
  };
  return (
    <DaumPostcodeWrapDiv>
      <DaumPostcodeInnerDiv>
        <IconDiv>
          <IconButton
            content="close"
            size="small"
            onClick={() => setIsAddressFind(false)}
          ></IconButton>
        </IconDiv>
        <DaumPostcodeDiv>
          <DaumPostcode onComplete={complete}></DaumPostcode>
        </DaumPostcodeDiv>
      </DaumPostcodeInnerDiv>
    </DaumPostcodeWrapDiv>
  );
};

export default PostModal;

/** 주소검색 스타일 영역 */
const DaumPostcodeWrapDiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
  position: absolute;
  top: 0;
`;

const DaumPostcodeInnerDiv = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.grayscaleA};
`;

const DaumPostcodeDiv = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const IconDiv = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;
