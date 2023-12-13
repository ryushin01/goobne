import styled from 'styled-components';
import { ReactComponent as Blog } from '../../svg/FooterBlogIconBtn.svg';
import { ReactComponent as Facebook } from '../../svg/FooterFacebookIcon.svg';
import { ReactComponent as Instagram } from '../../svg/FooterInstagramIcon.svg';
import { ReactComponent as Youtube } from '../../svg/FooterYouTubeIcon.svg';
import { ReactComponent as Cart } from '../../svg/GlobalCartIconBtn.svg';
import { ReactComponent as Close } from '../../svg/GlobalCloseIconBtn.svg';
import { ReactComponent as List } from '../../svg/HeaderListIconBtn.svg';
import { ReactComponent as KaKao } from '../../svg/GlobalKaKaoIconBtn.svg';

/**
 * IconButton props list
 * @property {string} type: button, submit, reset                                           - 버튼 타입을 정의합니다.
 * @property {string} size: small, medium, large ,bigLarge                                            - 버튼 크기를 정의합니다.
 * @property {string} color: black, white                                               - svgIcon 색상을 정의합니다.
 * @property {string} content: blog,facebook ,instagram, youtube, cart, close, list , kakao - 버튼 내부 svgicon 컴포넌트를 정의합니다.
 * @property {function} onClick                                                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
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
    <ButtonContainer size={size} color={color} content={content}>
      <DefaultIconButton type={type} onClick={onClick} {...props}>
        {ICON_BTN_LIST[content].tag}
      </DefaultIconButton>
    </ButtonContainer>
  );
};

/**svg 파일컴포넌트를 정의합니다. */
const ICON_BTN_LIST = {
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
  kakao: {
    tag: <KaKao />,
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
  bigLarge: {
    width: '40px',
    height: '40px',
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
  cursor: pointer;

  //카카오 아이콘 버튼에 대한 스타일만 적용
  //카카오 content 들어오면 배경색을 카카오대표색으로 변경하고 아이콘을 동그라미로 적용됩니다.
  border-radius: ${props => (props.content === 'kakao' && '100px') || '0px'};
  background-color: ${props =>
    (props.content === 'kakao' && props.theme.kakao) || 'transparent'};

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
