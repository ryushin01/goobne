import styled from 'styled-components';

/**
 * Button props list
 * @property {string} type: button, submit, reset           - 버튼 타입을 정의합니다.
 * @property {string} color: primary,black,beige,brown      - 버튼 색상을 정의합니다.
 * @property {string} size: small, medium, large            - 버튼 크기를 정의합니다.
 * @property {string} content                               - 버튼 내부 텍스트에 사용합니다.
 * @property {function} onClick                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 * @property {boolean} disabled                             - 버튼의 비활성화 상태를 정의합니다.
 */

const Button = ({
  type = 'button',
  content = '확인',
  onClick,
  disabled = false,
  ...props
}) => {
  return (
    <DefaultButton type={type} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </DefaultButton>
  );
};

/**버튼에 사이즈 padding,font-size 스타일을 정의합니다.*/
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

/**기본으로 적용되는 스타일된 버튼컴포넌트 입니다. */
const DefaultButton = styled.button`
  border-radius: 5px;
  font-weight: 400;
  width: 100%;
  cursor: pointer;

  /**props.color에 따라 border색상이 변경됩니다. */
  border: 1px solid
    ${props =>
      (props.color === 'primary' && props.theme.primaryColor) ||
      (props.color === 'black' && props.theme.grayscaleH) ||
      (props.color === 'beige' && props.theme.grayscaleH) ||
      (props.color === 'brown' && props.theme.grayscaleI) ||
      props.theme.primaryColor};

  /***props.size값에 따라서 위 SIZE_STYLES 객체에 접근하여 조건에 맞는 padding을 적용합니다.  */
  padding: ${({ size }) => SIZE_STYLES[size]?.padding || '10px 10px'};

  /**props.size값에 따라서 위 SIZE_STYLES 객체에 접근하여 조건에 맞는 fontsize 적용합니다. */
  font-size: ${({ size }) => SIZE_STYLES[size]?.fontSize || '14px'};

  /**disabled 가 활성화가 되었을때 적용되는 스타일 입니다. */
  &[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }

  /**props.color 에 값에따라 background 색상이 적용됩니다.*/
  background-color: ${props =>
    (props.color === 'primary' && props.theme.primaryColor) ||
    (props.color === 'black' && props.theme.grayscaleH) ||
    (props.color === 'beige' && props.theme.grayscaleB) ||
    (props.color === 'brown' && props.theme.grayscaleI) ||
    props.theme.primaryColor};

  /**props.color 에 값에따라 font 색상이 적용됩니다.*/
  color: ${props =>
    (props.color === 'primary' && props.theme.grayscaleA) ||
    (props.color === 'black' && props.theme.grayscaleA) ||
    (props.color === 'beige' && props.theme.grayscaleH) ||
    (props.color === 'brown' && props.theme.grayscaleA) ||
    props.theme.grayscaleA};
`;

export default Button;
