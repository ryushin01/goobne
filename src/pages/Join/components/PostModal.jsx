import IconButton from '../../../components/IconButton/IconButton';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const PostModal = ({ setIsAddressFind, setUserJoinInfo, userJoinInfo }) => {
  // complete 함수 정의: 주소 검색이 완료되면 실행되는 콜백 함수
  const complete = data => {
    // 주소 정보에서 기본 주소를 fullAddress 담습니다.
    let fullAddress = data.address;

    // 추가 주소 정보를 담을 extraAddress 변수를 만들어줍니다.
    let extraAddress = '';

    // 만약 주소 유형이 'R' (도로명 주소)인 경우
    if (data.addressType === 'R') {
      // 건물명이 비어있지 않으면 extraAddress에 추가 // += 란? 예를들어  a += 5는 a = a + 5와 동일합니다.
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      // 건물명이 비어있지 않으면 extraAddress에 추가, 이미 extraAddress에 값이 있다면 쉼표로 구분
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      // 최종 주소에 extraAddress를 추가 (extraAddress가 비어있으면 추가하지 않습니다.)
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    // 주소 검색 상태를 종료하고 사용자 정보 상태를 업데이트 합니다.
    setIsAddressFind(false);
    setUserJoinInfo({
      ...userJoinInfo,
      address: fullAddress,
      zipCode: data.zonecode,
    });

    //데이터를 콘솔에 전체적으로 찍어봅니다. 추후삭제
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
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
  background-color: rgba(0, 0, 0, 0.25);
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
