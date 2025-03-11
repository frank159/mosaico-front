import * as S from './TropicaisStyled';
import React from 'react';
import ReactPlayer from 'react-player';

const video1 = require('../../assets/videos/video1.mp4');
const tropicais = require("../../assets/images/img/Tropicais.png")


const Tropicais: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Body>
        <S.TopSectionCard>
          <S.ContainerBigCardFoto >
            <S.ImgFotoA src={tropicais} />
          </S.ContainerBigCardFoto>
          <S.TextoAContinerBigCard>
            <div>
              <S.TitleA>SONHOS TROPICAIS</S.TitleA>
            </div>

            <S.TextoB>
              Em 1889 chega ao Rio de Janeiro no mesmo navio o sanitarista Oswaldo Cruz (Bruno Giordano), que retorna ao pais após anos de estudo na Europa, e a jovem Esther (Carolina Kasting), polonesa que veio ao Brasil na promessa de se casar e constituir familia. Cruz logo consegue emprego como médico de uma fábrica de tecidos, enquanto que Esther não tem a mesma sorte, logo descobrindo que a proposta de casamento era apenas uma farsa, preparada no intuito de trazer ao pais jovens polonesas, as "polacas", para trabalharem como prostitutas nos bordéis da cidade. Inicialmente Esther resiste ao destino a ela traçado mas, sem opção, acaba cedendo e recebe a ajuda de Vania (Lu Grimaldi), polaca que nem ela que foi vitima do mesmo golpe anos atrás. Enquanto isso Cruz começa sua ascensão na medicina local, assumindo o comando do Instituto Soropédico de Manguinhos, onde pesquisa a cura de doenças como a peste e a febre amarela. As medidas de Cruz se mostram eficazes. Até que, na tentativa de extinguir a variola, propõe que maiores de 6 meses sejam obrigados a se vacinarem e desencadeia a Revolta da Vacina.
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
              url="https://www.youtube.com/watch?v=IzeNDFDltec"
              width="100%"
              height="100%"
              controls
            />
        </S.VideoWrapper>
      </S.BodyC>

    </S.MainContainer >
  );
};

export default Tropicais;
