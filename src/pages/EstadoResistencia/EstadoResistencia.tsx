import * as S from './EstadoResistenciaStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const estadoDressis = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324647/estadoDressis_guhvqm.png'
const EstadoResistencia: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Body>
        <S.TopSectionCard>
          <S.ContainerBigCardFoto >
            <S.ImgFotoA src={estadoDressis} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>ESTADO DE RESISTENCIA</S.TitleA>
              <S.TextoA>
                O documentário aborda diferentes modos de produção agrícola a partir de um corte longitudinal da divisa com São Paulo à Santa Catarina.
                Mergulhando em questões como: Quais as relações entre a produção de alimentos e a cultura de um povo?
                Mudanças climáticas, mudanças de vidas.
              </S.TextoA>
            </div>
            <S.TextoC>
              <strong>Roteiro e Direção:</strong> Berenice Mendes
              <br />
              <strong>Produção:</strong> Homero Camargo
              <br />
              <strong>Produção Executiva:</strong> Silvana Fontana e Lu Rufalco
              <br />
              <strong>Direção de Fotografia:</strong> Peter Lorenzo
              <br />
              <strong>Cinegrafista:</strong> Raul Custódio
              <br />
              <strong>Assistente de Produção:</strong> Jovana Cestille
              <br />
              <strong>Edição:</strong> Frank Castro
              <br />
              <strong>Web Pesquisa:</strong> Rudlaine Schwertner
              <br />
              <strong>Arte:</strong> Foca
              <br />
              <strong>Exibição:</strong> DOCTV – Circuito da Rede Pública de Televisão – 2007
              <br />
              <strong>Mostra:</strong> Mostra de Filmes na Cúpula dos Povos – Rio+20 – 2012
            </S.TextoC>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
      </S.Body>
      <S.BodyC>
        <S.TitleC>
          • assista o trailer:
        </S.TitleC>
        <S.VideoWrapper>
          <ReactPlayer
            url="https://www.facebook.com/2107741922669245/videos/257501028788442/"
            height="60vh"
            width="60vw"
            controls
            style={{ 
              position: 'absolute',
              top: '0%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </S.VideoWrapper>
      </S.BodyC>

    </S.MainContainer >
  );
};

export default EstadoResistencia;
