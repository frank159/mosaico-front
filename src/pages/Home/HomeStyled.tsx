import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #F8F6E6;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const InicialSecao = styled.div`
  background-color: #c2cfb4;
  width: 100%;
  height: 45vh;
  margin-top: 5vh;
`;

export const SecSecao = styled.div`
  background-color: #141c16;
  width: 100%;
  height: 150vh;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10vh;
`;

export const TextCard = styled.div`
  display: flex;
  margin-top: 4vh;
  text-align: center;
  font-size: 1.4rem;
  color: #8aa88a;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #4e5c2c;
  border-radius: 20px;
  height: 25vh;
  width: 25vw;
`;

export const IconCard = styled.img`
  position: absolute;
  top: -4.5vh;
  left: 2vh;
  height: 7vh;
`;

export const LogoEcoacao = styled.img`
  width: 30rem;
  margin-top: 10vh;
  margin-left: 10vh;
`;

export const TextoInicial = styled.div`
  margin-top: 5vh;
  margin-left: 10vh;
  font-family: 'Chocolates', sans-serif;
  font-size: 2rem;
  font-style: italic;
  font-weight: bolder;
  color: #000000;
`;

export const Hr = styled.hr`
  margin-top: 7vh;
  width: 97%;
  border: 1px solid #1a3f136c;
`;

export const SubTitle = styled.li`
  color: #e4e6da;
  font-size: 2rem;
  font-weight: bolder;
  margin-top: 7vh;
  margin-left: 4vw;
`;

export const MiniCardSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5vh;
  justify-content: center;
  width: 100%;
`;

export const MinCardText = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  color: #141c16;
  margin-left: 2rem;
`;

export const MiniCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1rem;
`;

export const MiniCardEsfera = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #4e5c2c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -1rem;
  z-index: 1;
`;

export const MiniCardEsferaIcon = styled.img`
  width: 2rem;
  height: 2rem;
  height: 6rem;
  object-fit: contain; /* Garante que o ícone mantenha a proporção */
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 7vh;
  width: 40vw;
  background-color: #4e5c2c;
  position: relative;
  border-radius: 8px;
  z-index: 0;
  padding-left: 2rem;
`;


export const SubtextSection = styled.div`
  margin-left: 5rem;
  margin-top: 5vh;
  color: #e4e6da;
  font-size: 1.8em;
  font-weight: lighter;
`;

export const LongCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LongCard = styled.div`
  margin-top: 5vh;
  background-color: #4e5c2c;
  width: 86.1vw;
  border-radius: 10px;
  height: 10vh;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const LongCardText = styled.div`
  color: #e4e6da;
  font-size: 1.8rem;
`;

export const LongCardIcon = styled.img`
  height: 8vh;
  margin: 1rem;
`;

export const BigCardContainer = styled.div`
    width: 100%;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
`;

export const BigCard = styled.div`
  width:  90%;
  height: 30vh;
  position: relative;

  background-color: #0f1410;
  display: flex;
  flex-direction: row;
`;

export const BigCardIcon = styled.img`
height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -1rem;
  top: -2rem;
  z-index: 1;

`;

export const BigCardTextSection = styled.div`
  width: 100%;
`;

export const BigCardTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  color: #c2cfba;
  margin-bottom: 10px;
  font-family: 'Chocolates', sans-serif;

`;

export const BigCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 6rem;

`;

export const BigCardText = styled.div`
margin-bottom: 2rem;
font-size: 1.7rem;
  font-weight: lighter;
  color: #c2cfba;

  font-family: 'Chocolates', sans-serif;

`;


export const TercSecao = styled.div`
  background-color: #c2cfba;
  width: 100%;
  height: 150vh;
  display: flex;
  flex-direction: column;

  /* Adicionando a imagem como fundo */
  background-image: url('../../assets/images/pinheiro claro.png'); /* Atualize o caminho para o correto */
  background-size: cover; /* Faz a imagem cobrir todo o fundo */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
`;


export const TercSecaoTitle = styled.div`
  color: #141c16;
  font-size: 2rem;
  font-weight: bolder;
  font-family: 'Chocolates', sans-serif;
  padding: 5vh;
`;

export const TercSecaoText = styled.div`
  color: #141c16;
  margin-left: 5vh;
  font-size: 1.7rem;
  font-weight: lighter;
  font-family: 'Chocolates', sans-serif;
`;

export const LogoTercSecao = styled.img`

`;