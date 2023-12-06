import styled from 'styled-components';
import { ReactComponent as BadgePepperIcon } from '../../svg/Badge/BadgePepperIcon.svg';

/**
 * @param  Badge  New, MD추천, BEST, HOT 으로 총 4가지가 있다.
 * @param  shape  Badge의 모양을 결정한다. - new, best, md, hot
 * @returns
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

const BADGELIST = {
  new: {
    padding: '1px 3px',
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
    marginRight: '0',
  },
  best: {
    padding: '1px 3px',
    backgroundColor: '#ff7b5a',
    borderColor: '#ff7b5a',
    marginRight: '0',
  },
  md: {
    padding: '1px 3px',
    backgroundColor: '#ffaf28',
    borderColor: '#ffaf28',
    marginRight: '0',
  },
  hot: {
    padding: '1px 3px',
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
  border: 1px solid ${({ shape }) => BADGELIST[shape]?.borderColor};
  background-color: ${({ shape }) => BADGELIST[shape]?.backgroundColor};
  border-radius: 2px;
  padding: 1px 3px;
  text-transform: uppercase; // 소문자를 대문자로 변환

  & > span {
    margin-right: ${({ shape }) => BADGELIST[shape]?.marginRight};
  }
`;
