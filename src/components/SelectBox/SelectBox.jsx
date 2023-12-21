import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/**
 * SelectBox props list
 * @property {function} setUserJoinInfo                          - useState 세터함수를 정의합니다.
 */

/**
 * SelectBox Component
 * @param data SelectBox에 들어갈 Data를 props로 받습니다.
 */
const SelectBox = ({ data, value, name, setUserJoinInfo }) => {
  /** SelectBox를 onClick했을 때 ul부분을 open/close 하기 위한 state입니다. */
  const [open, setOpen] = useState(false);
  /** SelectBox의 선택된 option 값을 저장하기 위한 state입니다. */
  const [currentValue, setCurrentValue] = useState(value);
  /** SelectBox의 Data를 props로 받은 것을 useState에 저장 */
  const [selectDate, setSelectData] = useState(data); //eslint-disable-line no-unused-vars
  /** selectBox의 외부를 선택했을 때 Open된 것을 Close 시키기 위해 useRef 사용 */
  const selectBoxRef = useRef();

  /** handleClickOutside의 click 이벤트를 감지하고, return되면 해당 이벤트를 제거합니다. (메모리 누수 방지) */
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /**
   * SelectBox의 외부를 클릭했을 때 open된 것을 close 시키기 위한 함수입니다.
   * @param selectBoxRef.current SelectBox의 ref를 이용하여 외부를 클릭했는지 확인합니다.
   * @param !selectBoxRef.current.contains(e.target) selectBoxRef.current가 e.target을 포함하고 있지 않다면 setOpen(false)를 실행합니다.
   */
  const handleClickOutside = e => {
    if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  if (!selectDate) return null;

  /** SelectBox를 클릭했을 때 open/close를 위한 함수입니다. */
  const handleOpen = () => {
    setOpen(!open);
  };

  /** SelectBox의 option을 선택했을 때 선택된 값을 저장하기 위한 함수입니다. */
  const handleSelectValue = e => {
    e.preventDefault();
    setCurrentValue(e.target.textContent);
    setOpen(false);

    /**
     * 1.basicInfo props받은 세터함수입니다.
     * 2. userJoinInfo 값을 스프레드 오퍼레이터(연산자)로 복사하여 SelectBox에 발생한 이벤트를  SelectBox name과 일치하는
     * key에 textContent 값을 setUserLoginInfo() 실행시켜 값을 변경해줍니다.
     */
    setUserJoinInfo(userJoinInfo => ({
      ...userJoinInfo,
      [name]: e.target.textContent,
    }));
  };

  return (
    <SelectBoxContainer
      onClick={handleOpen} // SelectBox를 클릭했을 때 open/close를 위한 함수입니다.
      className={open && 'open'} // open이 true라면 open 클래스를 추가합니다.
      ref={selectBoxRef} // selectBoxRef를 이용하여 외부를 클릭했는지 확인합니다.
      name={name}
    >
      <span>{currentValue}</span>
      <ul>
        {selectDate?.map((item, index) => {
          // selectDate의 값이 존재한다면 map을 이용하여 li를 생성합니다.
          return (
            <li key={index} onClick={handleSelectValue}>
              {item}
            </li>
          );
        })}
      </ul>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 13px 10px;
  padding: 13px 10px;
  border: 1px solid ${props => props.theme.grayscaleG};
  border-radius: 4px;
  background-color: transparent;
  align-self: center;
  cursor: pointer;
  user-select: none;

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
    text-align: center;
    cursor: pointer;
  }

  &.open {
    & > ul {
      display: flex;
    }
  }

  & > ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 43px;
    left: 0;
    width: 100%;
    max-height: 180px;
    padding: 10px 0;
    border-radius: 4px;
    background-color: ${props => props.theme.grayscaleA};
    z-index: 1;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    overflow-y: auto;

    & > li {
      font-size: 16px;
      padding: 10px 20px;
      user-select: none;

      &:first-child {
        font-weight: bold;
      }

      &:hover {
        color: ${props => props.theme.primaryColor};
        font-weight: 600;
      }
    }
  }
`;
