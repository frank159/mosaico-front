import * as S from './OsXeretasStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const video1 = require('../../assets/videos/video1.mp4');
const xeretas1 = require("../../assets/images/img/xeretas1.png")

const ft1 = require("../../assets/images/img/xeretas-1.png")
const ft2 = require("../../assets/images/img/xeretas-2.png")
const ft3 = require("../../assets/images/img/xeretas-3.png")
const ft4 = require("../../assets/images/img/xeretas-4.png")
const ft5 = require("../../assets/images/img/xeretas-5.png")
const ft6 = require("../../assets/images/img/xeretas-6.png")
const ft7 = require("../../assets/images/img/xeretas-7.png")

const OsXeretas: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Body>
        <S.ContainerSubA>
          <S.ContainerLeftA>
            <S.TitleA>os xeretas</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                Duda (Fábio Lins), Tato (José Eduardo Gomes) e Nick (José Luiz Batistella) são três amigos inseparáveis que são conhecidos pela população local como os Xeretas. Num dia eles encontram uma pequena menina com um símbolo tatuado no braço, que está vagando perdida pela cidade. Com a ajuda da mística Alana (Ana Lúcia Torre), eles descobrem que a garota é na verdade uma viajante dos portais do tempo e do espaço e que faz parte dos Aleph, um povo responsável pela segurança destes portais. A pequena menina precisa retornar ao seu mundo e para isto é necessário que tenha em mãos um medalhão, que a chave dos portais, pois senão morrerá. Visto isso, os Xeretas resolvem ajudá-la, indo em busca dos ladrões que roubaram o medalhão, que estava em um museu de São Paulo até pouco tempo atrás.
              </S.TextoA>
              <br />
              <br />
              <br />
              <S.TextoB>
                Data de lançamento 1 de junho de 2001<br />
                Tempo: (1h 30min) Direção: Michael Ruman<br />
                Gêneros: Aventura, Família<br />
                Nacionalidade: Brasil<br />
                Elenco: Francisco Cuoco, Ana Lúcia Torre, Eliana Fonseca                   
              </S.TextoB>
            </S.TextoAContiner>
          </S.ContainerLeftA>
          <S.ContainerRightA >
            <S.ImgFoto src={xeretas1} />
          </S.ContainerRightA>
        </S.ContainerSubA>
      </S.Body>
      <S.Galeria>
          <S.Gallery>
            <S.GalleryCard><img src={ft1} alt="Foto 1" /></S.GalleryCard>
            <S.GalleryCard><img src={ft2} alt="Foto 2" /></S.GalleryCard>
            <S.GalleryCard><img src={ft3} alt="Foto 3" /></S.GalleryCard>
            <S.GalleryCard><img src={ft4} alt="Foto 4" /></S.GalleryCard>
            <S.GalleryCard><img src={ft5} alt="Foto 5" /></S.GalleryCard>
            <S.GalleryCard><img src={ft6} alt="Foto 6" /></S.GalleryCard>
            <S.GalleryCard><img src={ft7} alt="Foto 7" /></S.GalleryCard>
          </S.Gallery>
        </S.Galeria>
        <S.BodyC>
        <S.TitleC>
          • assista o teaser:
        </S.TitleC>
        <S.VideoWrapper>
            <ReactPlayer
            url="https://www.youtube.com/watch?v=LXalwhsPl2A"
            width="100%"
          height="100%"
              controls
            />
        </S.VideoWrapper>
      </S.BodyC >

    </S.MainContainer >
  );
};

export default OsXeretas;
