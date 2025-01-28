import styled from 'styled-components';
  
export const MediaContainer = styled.div<{ backgroundColor?: string }>`
    width: 100%;
    height: 15vh; 
    background-color: ${props => props.backgroundColor || '#ffffff'};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
