import * as S from './EstadoResistenciaStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const estadoDressis = require("../../assets/images/img/estadoDressis.webP");
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
            <S.TextoB>
              Duração: 52 min<br />
              Ano: 2007<br />
              Direção: Berenice Mendes<br />
              Co-produção: Berenice Mendes / C.H.G /<br />
              Paraná Educativa / Fundação Padre Anchieta - TV Cultura
            </S.TextoB>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
      </S.Body>
      <S.BodyC>
        <S.TitleC>
          • assista o teaser:
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
