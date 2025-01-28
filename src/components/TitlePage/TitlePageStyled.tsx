import styled from 'styled-components';
  
export const MediaContainer = styled.div<{ backgroundColor?: string }>`
    width: 100%;
    height: 15vh; 
    background-color: ${props => props.backgroundColor || '#ffffff'};
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
export const TitleContainer = styled.div`
    color: #ffff;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.p<{ titleColor?: string, isMobile?: boolean }>`
  margin-left: 2vw;
  font-size: ${(props) => (props.isMobile ? '10vw' : '2.5vw')};

  font-weight: bold;
  color: ${props => props.titleColor || '#000000'};
`;

export const Text = styled.p<{ textColor?: string }>`
  width: 45%;
  margin-right: 2vw;
  color: ${props => props.textColor || '#000000'};
`;

export const MediaWrapper = styled.div`
    width: 100%;
    height: 70%; 
    display: flex;
    justify-content: center;
    align-items: center; 
  `;
  
export const FullScreenImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  `;
  
export const FullScreenVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  