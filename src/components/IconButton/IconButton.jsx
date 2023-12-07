import styled from 'styled-components';
import { ReactComponent as Blog } from '../../svg/FooterBlogIconBtn.svg';
import { ReactComponent as Facebook } from '../../svg/FooterFacebookIcon.svg';
import { ReactComponent as Instagram } from '../../svg/FooterInstagramIcon.svg';
import { ReactComponent as Youtube } from '../../svg/FooterYouTubeIcon.svg';
import { ReactComponent as Cart } from '../../svg/GlobalCartIconBtn.svg';
import { ReactComponent as Close } from '../../svg/GlobalCloseIconBtn.svg';
import { ReactComponent as List } from '../../svg/HeaderListIconBtn.svg';

/**
 * IconButton props list
 * @property {string} type: button, submit, reset                                   - 버튼 타입을 정의합니다.
 * @property {string} size: small, medium, large                                    - 버튼 크기를 정의합니다.
 * @property {string} size: black, white                                        - svgIcon 색상을 정의합니다.
 * @property {string} content: blog,facebook ,instagram, youtube, cart, close, list - 버튼 내부 svgicon 컴포넌트를 정의합니다.
 * @property {function} onClick                                                     - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 */

const IconButton = ({
  type = 'button',
  onClick,
  content,
  size,
  color,
  ...props
}) => {
  return (
    <ButtonContainer size={size} color={color}>
      <DefaultIconButton type={type} onClick={onClick} {...props}>
        {ICONBTNLIST[content].tag}
      </DefaultIconButton>
    </ButtonContainer>
  );
};

/**svg 파일컴포넌트를 정의합니다. */
const ICONBTNLIST = {
  blog: {
    tag: <Blog />,
  },
  facebook: {
    tag: <Facebook />,
  },
  instagram: {
    tag: <Instagram />,
  },
  youtube: {
    tag: <Youtube />,
  },
  cart: {
    tag: <Cart />,
  },
  close: {
    tag: <Close />,
  },
  list: {
    tag: <List />,
  },
};

/**아이콘btn을 감싸는부모 ButtonContainer 스타일컴포넌트에 사용될 size를 정의합니다. */
const BTN_CONTAINTNER_SIZE_STYLES = {
  small: {
    width: '25px',
    height: '25px',
  },
  medium: {
    width: '30px',
    height: '30px',
  },
  large: {
    width: '35px',
    height: '35px',
  },
};

/**기본 DefaultIconButton 스타일컴포넌트입니다. */
const DefaultIconButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

/**svg파일은 w,h 100% 입니다 그렇기때문에  svg 감싸는 부모 div스타일 컴포넌트입니다.
 * ICONBTNLIST wrap size를 조절합니다.
 * props.size 변화에 따라 사이즈를 조절합니다.
 */

const ButtonContainer = styled.div`
  width: ${({ size }) => BTN_CONTAINTNER_SIZE_STYLES[size]?.width || '20px'};
  height: ${({ size }) => BTN_CONTAINTNER_SIZE_STYLES[size]?.height || '20px'};

  /**props.color 값에 따라 svgIcon색상이 변경됩니다. 기본색상은 검정색입니다.*/
  svg {
    path {
      stroke: ${props =>
        (props.color === 'black' && props.theme.grayscaleH) ||
        (props.color === 'white' && props.theme.grayscaleA) ||
        props.theme.grayscaleH};
    }
  }
`;

export default IconButton;
