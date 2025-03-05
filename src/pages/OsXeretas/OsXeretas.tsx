import * as S from './OsXeretasStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const idProgeto = require("../../assets/images/img/idProgeto.png")
const BRASILDeSAINT = require("../../assets/images/img/BRASILDeSAINT.png")
const cooperativa111 = require("../../assets/images/img/cooperativa111.png")
const tropeiro = require("../../assets/images/img/tropeiro.png")
const video1 = require('../../assets/videos/video1.mp4');
const xeretas = require("../../assets/images/img/xeretas.png")
const xeretas1 = require("../../assets/images/img/xeretas1.png")


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

export default OsXeretas;
