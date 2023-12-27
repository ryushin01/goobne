import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ConutryOrigin from './Contents/ConutryOrigin';
import Nutrient from './Contents/Nutrient';

/**
 * DropDown Component
 * @param data DropDownBox에 들어갈 Data를 props로 받습니다.
 */
const DropDown = ({ data, country, nutrient, countryInfo, nutrientInfo }) => {
  /** Button을 onClick했을 때 ul부분을 open/close 하기 위한 state입니다. */
  const [open, setOpen] = useState(false);
  /** Button의 Data를 props로 받은 것을 useState에 저장 */
  const [countryOriginDate, setCountryOriginData] = useState(data); //eslint-disable-line no-unused-vars
  /** Button의 외부를 선택했을 때 Open된 것을 Close 시키기 위해 useRef 사용 */
  const buttonBoxRef = useRef();

  /** handleClickOutside의 click 이벤트를 감지하고, return되면 해당 이벤트를 제거합니다. (메모리 누수 방지) */
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /** Button을 클릭했을 때 open/close를 위한 함수입니다. */
  const handleOpen = () => {
    setOpen(!open);
  };

  /**
   * Button의 외부를 클릭했을 때 open된 것을 close 시키기 위한 함수입니다.
   * @param selectBoxRef.current Button의 ref를 이용하여 외부를 클릭했는지 확인합니다.
   * @param !buttonBoxRef.current.contains(e.target) buttonBoxRef.current가 e.target을 포함하고 있지 않다면 setOpen(false)를 실행합니다.
   */
  const handleClickOutside = e => {
    if (buttonBoxRef.current && !buttonBoxRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <>
      <DropDownButton
        onClick={handleOpen} // SelectBox를 클릭했을 때 open/close를 위한 함수입니다.
        ref={buttonBoxRef} // selectBoxRef를 이용하여 외부를 클릭했는지 확인합니다.
      >
        {country === 'true' && <span>원산지 정보보기</span>}
        {nutrient === 'true' && <span>영양정보 정보보기</span>}
      </DropDownButton>
      {country === 'true' && (
        <ConutryOrigin open={open} countryInfo={countryInfo} />
      )}
      {nutrient === 'true' && (
        <Nutrient open={open} nutrientInfo={nutrientInfo} />
      )}
    </>
  );
};

export default DropDown;

const DropDownButton = styled.button`
  position: relative;
  width: 100%;
  padding: 10px 10px;
  border: 1px solid ${props => props.theme.grayscaleG};
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  text-align: left;

  // Button Box의 화살표를 만들기 위한 CSS입니다.
  &::before {
    content: '';
    position: absolute;
    top: 13px;
    right: 10px;
    width: 7px;
    height: 7px;
    border-top: 2px solid ${props => props.theme.grayscaleC};
    border-right: 2px solid ${props => props.theme.grayscaleC};
    transform: rotate(135deg);
    transition: all 0.2s ease-in;
  }

  // Button Box가 open 되었을 때 화살표의 위치를 바꿔주기 위한 CSS 입니다.
  &.open::before {
    content: '';
    position: absolute;
    top: 17px;
    right: 10px;
    width: 7px;
    height: 7px;
    border-top: 2px solid ${props => props.theme.grayscaleC};
    border-right: 2px solid ${props => props.theme.grayscaleC};
    transform: rotate(315deg);
    transition: all 0.2s ease-out;
  }

  & > span {
    font-size: 16px;
    color: ${props => props.theme.grayscaleC};
    margin-left: 10px;
    cursor: pointer;
  }
`;
