import * as S from './FrenteFriaStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const frentefria = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324648/frentefria_gamxjz.png'
const aspas = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324726/aspas_u2hlhq.png'
const f1 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324677/1_gnqnox.png'
const f2 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/2_fxe2ma.png'
const f3 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/3_aopl2r.png'
const f4 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/4_zabiub.png'
const f5 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324641/5_gfo9mt.png'
const f6 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324642/6_tfrgkh.png'
const f7 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324640/7_txh8qi.png'
const f8 = 'https://res.cloudinary.com/djg8c78mb/image/upload/v1746324642/9_oic2ml.png'


const FrenteFria: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Body>
        <S.TopSectionCard>
          <S.ContainerBigCardFoto >
            <S.ImgFotoA src={frentefria} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>A FRENTE FRIA QUE A CHUVA TRAZ</S.TitleA>
              <S.TextoA>
                Um grupo de playboys organiza a última festa na favela antes da mudança no tempo. E para esta noite especial, além das drogas, álcool e sexo habituais, eles receberão convidados e penetras inusitados: uma viciada que usa e é usada pelo grupo, um cantor sertanejo criado na própria favela, um segurança estranho e o dono da laje. Essa mistura não pode terminar bem. Livremente inspirada na peça homônima de Mario Bortolotto.
              </S.TextoA>
            </div>

            <S.TextoB>
              A Frente Fria que a Chuva Traz<br />
              Neville D’Almeida<br />
              Ficção/Fiction<br />
              Cor/Color DCP 80'<br />
              Brasil - 2015<br />
              Direção e roteiro/Direction and screenplay: NEVILLE D’ALMEIDA<br />
              Empresa Produtora/Production Company: REPÚBLICA PUREZA, COOPERATIVA DE CINEMA E MÍDIAS DIGITAIS<br />
              Produção/Production: MARCELLO LUDWIG MAIA, HOMERO CAMARGO RIBAS<br />
              Fotografia/Photography: KIKA CUNHA<br />
              Montagem/Editing: TINA SAPHIRA<br />
              Música/Music: EDU KRIEGER<br />
              Elenco/Cast: BRUNA LINZMEYER, JOHNNY MASSARO, CHAY SUED, NATALIA LIMA VERDE, JULIANA LOHMANN, MARINA PROVENZZANO, JULIANE ARAUJO, MARIO BORTOLOTTO
            </S.TextoB>
          </S.TextoAContinerBigCard>
        </S.TopSectionCard>
        <S.SubContainer>
          <S.SubTextContainer>
            A Frente fria que a chuva traz leva jovens ricos à favela e levanta questões<br />
            sobre o distanciamento entre os dois mundos.
          </S.SubTextContainer>
          <br />
          <br />
          <S.SecaoInicialIcon src={aspas} />
          <S.SubTextContainer>
            O longa de Neville D’Almeida tem como objetivo propor uma análise sobre o abuso <br />
            das comunidades pelas classes altas:<br />
          </S.SubTextContainer>
          <S.SubTextContainerB>
            “Falamos sobre a cafetinização das favelas pelos ricos sem fazer concessões”.
          </S.SubTextContainerB>
        </S.SubContainer>

      </S.Body>
      <S.GalleryContainer>
        <S.Gallery>
          <S.GalleryCard><img src={f1} alt="Foto 1" /></S.GalleryCard>
          <S.GalleryCard><img src={f2} alt="Foto 2" /></S.GalleryCard>
          <S.GalleryCard><img src={f3} alt="Foto 3" /></S.GalleryCard>
          <S.GalleryCard><img src={f4} alt="Foto 4" /></S.GalleryCard>
          <S.GalleryCard><img src={f5} alt="Foto 5" /></S.GalleryCard>
          <S.GalleryCard><img src={f6} alt="Foto 6" /></S.GalleryCard>
          <S.GalleryCard><img src={f7} alt="Foto 7" /></S.GalleryCard>
          <S.GalleryCard><img src={f8} alt="Foto 8" /></S.GalleryCard>
        </S.Gallery>
      </S.GalleryContainer>
      <S.BodyC>
        <S.TitleC>
          • assista o teaser:
        </S.TitleC>
        <S.VideoWrapper>
          <ReactPlayer
            url="https://www.facebook.com/100050233255888/videos/a-frente-fria-que-a-chuva-traz/472630300260914/?rdid=RcQ5gQFkxaSKKzYl"
            width="100%"
            height="100%"
            controls
          />
        </S.VideoWrapper>
      </S.BodyC>

    </S.MainContainer >
  );
};

export default FrenteFria;
