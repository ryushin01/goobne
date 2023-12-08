import { useState } from 'react';
import styled from 'styled-components';

const SelectBox = () => {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('직접 입력');

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelectValue = e => {
    setCurrentValue(e.target.textContent);
    setOpen(false);
  };

  return (
    <SelectBoxContainer onClick={handleOpen} className={open && 'open'}>
      <label>{currentValue}</label>
      <ul>
        <li onClick={handleSelectValue}>직접 입력</li>
        <li onClick={handleSelectValue}>naver.com</li>
        <li onClick={handleSelectValue}>daum.net</li>
        <li onClick={handleSelectValue}>google.com</li>
      </ul>
    </SelectBoxContainer>
  );
};

export default SelectBox;

const SelectBoxContainer = styled.section`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
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
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotate(135deg);
    transition: all 0.3s ease-in;
  }

  &.open::before {
    content: '';
    position: absolute;
    top: 17px;
    right: 10px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotate(315deg);
    transition: all 0.3s ease-out;
  }

  & > label {
    font-size: 16px;
    color: #999;
    line-height: 40px;
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
    top: 40px;
    left: 0;
    width: 100%;
    padding: 10px 0;
    border-radius: 4px;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);

    & > li {
      font-size: 16px;
      padding: 10px 20px;
      user-select: none;

      &:first-child {
        font-weight: bold;
      }

      &:hover {
        color: #ff0000;
        font-weight: 600;
      }
    }
  }
`;
