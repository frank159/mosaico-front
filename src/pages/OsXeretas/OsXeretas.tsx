import * as S from './OsXeretasStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const xeretas1 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas1_yk9fxp.png'

const ft1 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas-1_m0ifdv.png'
const ft2 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas-2_f24uk2.png'
const ft3 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas-3_yerm3i.png'
const ft4 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324660/xeretas-4_c8fg1r.png'
const ft5 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324661/xeretas-5_fpntt6.png'
const ft6 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324661/xeretas-6_cgbmrj.png'
const ft7 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324661/xeretas-7_av5nog.png'

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
            url="https://www.youtube.com/watch?v=m2NIJ-VwEOo"
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
