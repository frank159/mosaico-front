import styled, { keyframes } from 'styled-components';

interface Props {
    width?: string;
}

export const MainContainer = styled.div`
    background: #000000;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 7rem;
`;

const rotate = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`;

export const Text = styled.div`
    color: white;
    font-size: 2rem;
`;
export const Img = styled.img`
    height: 30vh;
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    animation: ${rotate} 5s linear infinite;
`;



