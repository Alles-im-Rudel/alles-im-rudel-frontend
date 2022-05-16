import styled, {css} from 'vue-styled-components';

const paralaxSectionProps = {bgImage: String, isParalax: Boolean, isStatic: Boolean};

export const ParalaxWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`;

export const ParalaxSection = styled('section', paralaxSectionProps)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 5px #000;
  transform-style: preserve-3d;
  ${props => props.bgImage ? css`::after {background-image: url("${props.bgImage}");}` : ''};
  ${props => props.isParalax ? css`${paralax}` : ''};
  ${props => props.isStatic ? css`${staticCss}` : ''};
`;

const paralax = css`
  ::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    background-size: 100%;
    z-index: -1;
  }
`;

const staticCss = css`
  display: unset;
`;