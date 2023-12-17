import styled, { css } from 'styled-components';
import { ReactComponent as BadgePepperIcon } from '../../svg/Badge/BadgePepperIcon.svg';

/**
 *  Badge Component props list
 *  @property {string} shape: new, best, md, hot
 */

const Badge = ({ shape, size }) => {
  return (
    <BadgeContainer shape={shape}>
      <BadgeWrap shape={shape} size={size}>
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

const BADGE_SIZE = {
  small: {
    padding: '1px 3px',
    borderRadius: '2px',
  },
  large: {
    padding: '4px 6px',
    borderRadius: '4px',
  },
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeContainer = styled.section`
  ${FlexCenter}
`;

const BadgeWrap = styled.div`
  display: ${props => (props.shape ? 'flex' : 'none')};
  font-size: 12px;
  font-family: 'Rubik';
  color: #fff;
  border: 1px solid ${({ shape }) => BADGE_LIST[shape]?.borderColor};
  background-color: ${({ shape }) => BADGE_LIST[shape]?.backgroundColor};
  border-radius: ${({ size }) =>
    BADGE_SIZE[size]?.borderRadius || BADGE_SIZE.small.borderRadius};
  padding: ${({ size }) =>
    BADGE_SIZE[size]?.padding || BADGE_SIZE.small.padding};
  text-transform: uppercase; // 소문자를 대문자로 변환

  & > span {
    margin-right: ${({ shape }) => BADGE_LIST[shape]?.marginRight};
  }
`;
