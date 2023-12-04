import styled from 'styled-components';

const Button = ({
  type = 'button',
  context = '기본버튼입니다',
  size,
  color,
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DefaultButton
        type={type}
        size={size}
        color={color}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {context}
      </DefaultButton>
    </div>
  );
};

/**버튼에 사이즈 스타일을 정의합니다. padding간격,글씨크기 */
const SIZE_STYLES = {
  small: {
    padding: '10px 10px',
    fontSize: '14px',
  },
  medium: {
    padding: '12px 10px',
    fontSize: '16px',
  },
  large: {
    padding: '14px 10px',
    fontSize: '18px',
  },
};

const DefaultButton = styled.button`
  border: 1px solid ${props => props.theme.grayscaleB};
  border-radius: 5px;
  font-weight: 400;
  width: 100%;
  cursor: pointer;

  padding: ${({ size }) => SIZE_STYLES[size]?.padding || '10px 10px'};
  font-size: ${({ size }) => SIZE_STYLES[size]?.fontSize || '14px'};

  &[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
    &:hover {
      opacity: 0.2;
    }
  }

  &:hover {
    opacity: 0.8;
  }

  background-color: ${props =>
    (props.color === 'primary' && props.theme.primaryColor) ||
    (props.color === 'black' && props.theme.grayscaleH) ||
    (props.color === 'beige' && props.theme.grayscaleB) ||
    props.theme.primaryColor};

  color: ${props =>
    (props.color === 'primary' && props.theme.grayscaleA) ||
    (props.color === 'black' && props.theme.grayscaleA) ||
    (props.color === 'beige' && props.theme.grayscaleH) ||
    props.theme.grayscaleA};
`;

/**
 * Button props list
 * @property {string} type: button, submit, reset           - 버튼 타입을 정의합니다.
 * @property {string} color: primary,black,beige            - 버튼 색상을 정의합니다.
 * @property {string} size: small, medium, large            - 버튼 크기를 정의합니다.
 * @property {string} content                               - 버튼 내부 텍스트에 사용합니다.
 * @property {function} onClick                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 * @property {boolean} disabled                             - 버튼의 비활성화 상태를 정의합니다.
 * @property {string} shape:                                - 버튼 형태를 정의합니다.  << 필요성을 아직 잘모르겠습니다. 리뷰좀 부탁드려요.
 */

export default Button;
