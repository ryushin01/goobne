import Chip from './Chip.jsx';
import styled from 'styled-components';

const ChipGroup = () => {
  return (
    <ChipWrap>
      {CHIP.map(({ id, name, content }) => (
        <Chip key={id} id={id} name={name} content={content} />
      ))}
    </ChipWrap>
  );
};

export default ChipGroup;

const ChipWrap = styled.div`
  display: flex;
`;

export const CHIP = [
  { id: '1', name: '메뉴', content: '전체' },
  { id: '2', name: '메뉴', content: '치킨' },
  { id: '3', name: '메뉴', content: '피자' },
  { id: '4', name: '메뉴', content: '사이드' },
  { id: '5', name: '메뉴', content: '세트' },
  { id: '6', name: '메뉴', content: '포장전용' },
];
