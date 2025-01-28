import styled from 'styled-components';

export interface FullScreenMediaProps {
    mediaSrc: string; // Propriedade obrigatória para a URL do vídeo ou imagem
    isVideo?: boolean; // Propriedade opcional para indicar se é um vídeo
  }
  
export const MediaContainer = styled.div`
    width: 100%;
    height: 70vh; 
  `;
  
export const TitleContainer = styled.div`
    color: #ffff;
    width: 100%;
    height: 50vh; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.h1`
  margin-left: 2vw;
`;

export const Text = styled.text`
  width: 45%;
  margin-right: 2vw;
`;

export const MediaWrapper = styled.div`
    width: 100%;
    height: 100%; 
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
  