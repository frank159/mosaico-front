import styled, { keyframes } from 'styled-components';


interface Props {
    width?: string;
    height?: string;
    isMobile?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

interface AnimatedTextProps extends Props {
  as: 'p' | 'h1' | 'h2' | 'h3';
}

export const AnimatedText = styled.div<AnimatedTextProps>`
  animation: ${fadeIn} 1s ease-in-out;
  ${({ as }) => as === 'p' && 'font-size: 16px;'}
  ${({ as }) => as === 'h1' && 'font-size: 32px;'}
  ${({ as }) => as === 'h2' && 'font-size: 24px;'}
  ${({ as }) => as === 'h3' && 'font-size: 20px;'}
`;

export const MainContainer = styled.div`
    background: #C2CFB4;
    display: flex;
    flex-direction: column;
    height: auto;
    padding-top: 5vh;
    padding: 80px;
    position: relative;

    @media (max-width: 768px) {
        padding: 20px !important;  /* Ajuste de padding para mobile */
    }
`;
