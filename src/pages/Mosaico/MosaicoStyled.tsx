import styled from 'styled-components';
  
export const Container = styled.div`
    position: relative;
    width: auto;
`;

export const TESTE = styled.div`

`;

export const PageButtonSection = styled.div`
  width: 100%;
  height: 100vh;
  position: relative; /* Necessário para posicionar o botão em relação à imagem */
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0.5;
`;

export const PageButton = styled.button`
  position: absolute; /* Coloca o botão sobre a imagem */
  z-index: 1; /* Garante que o botão fique acima da imagem */
  background-color: rgb(0, 0, 0); /* Fundo preto inicial */
  color: white; /* Cor do texto */
  border: 1px solid #ffffff;
  border-radius: 16px;
  padding: 12px 24px;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 7vh;

  /* Adiciona a animação de pulsação */
  animation: pulse 1.8s infinite ease-in-out;

  &:hover {
    background-color: rgb(24, 24, 24); /* Fundo mais escuro ao passar o mouse */
    font-size: 2.2rem;
    animation: none; /* Pausa a animação ao passar o mouse */
  }

  @keyframes pulse {
    0% {
      background-color: rgb(0, 0, 0); /* Preto inicial */
    }
    50% {
      background-color: rgb(85, 85, 85); /* Um cinza mais claro */
    }
    100% {
      background-color: rgb(0, 0, 0); /* Volta ao preto */
    }
  }
`;

export const MosaicoWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`; 

export const TitleOverlayContainer = styled.div`
  position: absolute;
  top: 45%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta para que o centro do texto fique exatamente no meio */
  margin: 0; /* Remove margens */
  z-index: 2; 
  font-family: 'Montserrat'; /* Define a fonte Montserrat */
  color: white;
  pointer-events: none;
  white-space: nowrap; /* Impede que o texto quebre */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;
export const TitleOverlay = styled.div`
  display: inline-block; /* Faz com que o texto se comporte como bloco inline */
  font-size: 3rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 50px; /* Adiciona mais espaço entre as letras */
  white-space: nowrap; /* Impede quebra de linha */
  text-align: center; /* Alinha o texto ao centro */
  animation: pulse 2s infinite ease-in-out;

  @keyframes pulse {
    0% {
      text-shadow:none;
    }
    50% {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.747);
    }
    100% {
      text-shadow: none;
    }
  }
`;

export const TextOverlay = styled.div`
  display: inline-block; /* Faz com que o texto se comporte como bloco inline */
  font-size: 1rem;
  font-weight: 900;
  color: #000000;
  letter-spacing: 0.6em; /* Adiciona mais espaço entre as letras */
  white-space: nowrap; /* Impede quebra de linha */
  text-align: center; /* Alinha o texto ao centro */
  padding-right: 2.5em; /* Ajuste sutil para alinhar corretamente após o letter-spacing */
`;


