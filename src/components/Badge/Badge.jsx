import styled from 'styled-components';
import { ReactComponent as BadgePepperIcon } from '../../svg/Badge/BadgePepperIcon.svg';

/**
 *  Badge Component props list
 *  @property {string} shape: new, best, md, hot
 */

const Badge = ({ shape }) => {
  return (
    <BadgeContainer>
      <BadgeWrap shape={shape}>
        {shape === 'new' && <span>{shape}</span>}
        {shape === 'best' && <span>{shape}</span>}
        {shape === 'md' && <span>{`${shape}추천`}</span>}
        {shape === 'hot' && (
          <>
            <span>{`${shape}`}</span>
            <BadgePepperIcon />
          </>
        )}
      </BadgeWrap>
    </BadgeContainer>
  );
};

export default Badge;

const BADGE_LIST = {
  new: {
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    marginRight: '0',
  },
  best: {
    backgroundColor: '#ff7b5a',
    borderColor: '#ff7b5a',
    marginRight: '0',
  },
  md: {
    backgroundColor: '#ffaf28',
    borderColor: '#ffaf28',
    marginRight: '0',
  },
  hot: {
    backgroundColor: '#000',
    borderColor: '#000',
    marginRight: '4px',
  },
};

const BadgeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeWrap = styled.div`
  display: flex;
  font-size: 12px;
  font-family: 'Rubik';
  color: #fff;
  border: 1px solid ${({ shape }) => BADGE_LIST[shape]?.borderColor};
  background-color: ${({ shape }) => BADGE_LIST[shape]?.backgroundColor};
  border-radius: 2px;
  padding: 1px 3px;
  text-transform: uppercase; // 소문자를 대문자로 변환

  & > span {
    margin-right: ${({ shape }) => BADGE_LIST[shape]?.marginRight};
  }
`;
