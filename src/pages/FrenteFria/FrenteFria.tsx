import * as S from './FrenteFriaStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const idProgeto = require("../../assets/images/img/idProgeto.png")
const BRASILDeSAINT = require("../../assets/images/img/BRASILDeSAINT.png")
const cooperativa111 = require("../../assets/images/img/cooperativa111.png")
const tropeiro = require("../../assets/images/img/tropeiro.png")
const video1 = require('../../assets/videos/video1.mp4');
const xeretas = require("../../assets/images/img/xeretas.png")
const xeretas1 = require("../../assets/images/img/xeretas1.png")
const frentefria = require("../../assets/images/img/frentefria.png")


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
            <S.SubTextContainer>
              O longa de Neville D’Almeida tem como objetivo propor uma análise sobre o abuso <br />
              das comunidades pelas classes altas:<br />
            </S.SubTextContainer>
            <S.SubTextContainerB>
              “Falamos sobre a cafetinização das favelas pelos ricos sem fazer concessões”.
            </S.SubTextContainerB>
          </S.SubContainer>
          
      </S.Body>
      <S.BodyC>
        <S.TitleC>
          • assista o teaser:
        </S.TitleC>
        <S.VideoWrapper>
          <div style={{ width: '100%', height: '100%' }}>
            <ReactPlayer
              url={video1}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </S.VideoWrapper>
      </S.BodyC>

    </S.MainContainer >
  );
};

export default FrenteFria;
