import styled, { css } from 'styled-components';

// [ 필독 ]
// 이 파일은 styled-components로 컴포넌트를 개발하는 방법과 JSDoc 주석을 설명하기 위한 샘플입니다.
// 1. ln1: styled-components를 사용하기 위해 import합니다. mixin 사용을 위해 css도 가져옵니다.
// 2. ln16~25: 컴포넌트 생성 시 JSDoc 문법에 따라 주석합니다. 데이터 타입, props name, props value, 설명까지 기입합니다.
// 3. ln28: Button 컴포넌트에 전달될 props는 기본값을 지정할 수 있습니다.
// 4. ln32: 스타일링을 위한 props는 styled-components에서만 사용하는 것을 원칙으로 합니다. 이들을 스프레드 오퍼레이터로 묶습니다.
// 5. ln35: styled-components는 임의의 엘리먼트를 생성하고 스타일을 적용해야 합니다. 엘리먼트 명칭은 파스칼 케이스로 적습니다.
// 6. ln41~54: 컴포넌트 크기별로 나눈 객체입니다. ln60과 같이 사용합니다.
// 7. ln56~60: styled-components에서 mixin을 사용하는 방법입니다. 실제 ln63처럼 가져다 쓸 수 있습니다.
// 8. ln62: styled-components의 스타일링을 문법입니다.
// 9. ln85~102: props value에 따른 분기가 필요한 경우의 예시입니다.
// 10. ln88~92: theme.js에 지정된 컬러를 사용하는 예시입니다.

/**
 * SampleButton props list
 * @property {string} type: button, submit, reset           - 버튼 타입을 정의합니다.
 * @property {string} shape: solid, outline                 - 버튼 형태를 정의합니다.
 * @property {string} color: primary, secondary, neutral    - 버튼 색상을 정의합니다.
 * @property {string} size: small, medium, large            - 버튼 크기를 정의합니다.
 * @property {string} content                               - 버튼 내부 텍스트에 사용합니다.
 * @property {function} onClick                             - 버튼 클릭 시 실행할 함수를 위해 미리 정의합니다.
 * @property {boolean} disabled                             - 버튼의 비활성화 상태를 정의합니다.
 */

const SampleButton = ({
  type = 'button',
  content = 'button',
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

const SIZE_STYLES = {
  small: {
    padding: '11px 10px',
    fontSize: '16px',
  },
  medium: {
    padding: '12px 10px',
    fontSize: '20px',
  },
  large: {
    padding: '13px 10px',
    fontSize: '24px',
  },
};

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = styled.button`
  ${FlexCenter};

  width: 100%;
  border: 1px transparent solid;
  border-radius: 4px;
  opacity: 0.9;
  cursor: pointer;

  padding: ${({ size }) => SIZE_STYLES[size]?.padding || '13px 10px'};

  font-size: ${({ size }) => SIZE_STYLES[size]?.fontSize || '20px'};

  &:hover,
  &:active {
    opacity: 1;
  }

  &[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }

  ${props => {
    if (props.shape === 'solid') {
      return `
        background-color: ${
          (props.color === 'primary' && props.theme.primaryColor) ||
          (props.color === 'secondary' && props.theme.secondaryColor) ||
          props.theme.grayscaleD
        };
        
        color: ${props.theme.grayscaleA};
        `;
    } else {
      return `
      background-color: ${props.theme.grayscaleB};
      color: ${props.theme.grayscaleC};
    `;
    }
  }}
`;

export default SampleButton;
