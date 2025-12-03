import * as S from "./SeriePurunaStyled";
import React, { useState, useEffect } from "react";
import useImagesLoaded from "../../../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../../../components/LoadingComponente/Loading";

const foto =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758220017/Purun%C3%A3_wl6z3j.jpg";

const DocumentarioPuruna: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [foto];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  const handleClose = () => setFullScreenImage(null);

  return (
    <S.MainContainer>
      {onLoading && <LoadingOverlay />}

      <S.Body>
        <S.ContainerSubA>
          <S.TextContainer>
            <S.TextoContainerB>
              <S.FloatedImage src={foto} alt="Imagem do documentário" />
              <S.TitleA>Puruna</S.TitleA>
              <S.TextoA>
                O seriado conta as aventuras de Franco e Maloni, dois moradores
                da região dos Campos Gerais, que são os guardiões da bela região
                da serra de São Luiz do Purunã. Entre roubo de cavalos,
                maquinários agrícolas, assalto a bancos, a bandidagem não
                consegue se criar na região.
              </S.TextoA>
              <br />
              <br />
              <S.TitleB>Willy Schumann</S.TitleB>
              <S.TextB>
                • Brasileiro, natural de Curitiba.
                <br />
                • Jornalista, escritor, comunicólogo social, psicanalista e
                produtor audiovisual.
                <br />
                • Atua também como roteirista.
                <br />
                <br />
                <strong>Atuação principal:</strong>
                <br />
                • Produz vídeos e filmes, alguns em parceria com seu irmão
                Werner Schumann.
                <br />
                • Interesse acadêmico/intelectual em psicanálise, linguística e
                no estudo da construção de personagens em obras de ficção.
                <br />
                <br />
                <strong>Obras & prêmios destacados:</strong>
                <br />
                • Escreveu o livro Cidade dos Monges.
                <br />
                • Participou de curta-metragem, documentários, e longa-metragem
                ("Onde os poetas morrem primeiro").
                <br />• Recebeu prêmios em festivais de cinema por filmes como
                Tesouro.
                <br />
                <br />
                <br />
              </S.TextB>
              <S.TitleB>CONCEITO E IDENTIFICAÇÃO</S.TitleB>
              <S.TextB>
                <strong>TÍTULO:</strong>
                PURUNÃ – As aventuras de Franco & Maloni
                <br />
                <strong>SUBTÍTULO:</strong>
                Onde a tradição enfrenta o crime
                <br />
                <strong>FORMATO:</strong>
                Série Dramática Serializada - 10 episódios de 50 minutos
                <br />
                <strong>GÊNERO:</strong>
                Policial Rural com elementos de Drama Familiar, Suspense e
                Realismo Mágico
                <br />
                <strong>PÚBLICO-ALVO:</strong>
                18-65 anos (Classificação 12 anos)
                <br />
                <strong>LOGLINE:</strong>
                Nos Campos Gerais do Paraná, dois homens com habilidades
                complementares - um especialista em artes marciais e um cowboy
                experiente - formam uma dupla improvável para proteger sua
                comunidade contra crimes que escondem uma conspiração capaz de
                destruir seu modo de vida tradicional, enquanto lidam com dramas
                familiares e a misteriosa aparição de um Tropeiro Fantasma.
              </S.TextB>
              
              <br />
              <br />
              
              <S.TitleB>SINOPSE EXPANDIDA</S.TitleB>
              <S.TextB>
                <strong>O CENÁRIO:</strong>
                <br />
                São Luiz do Purunã, nos Campos Gerais do Paraná. Uma região de paisagens
                impressionantes - cânions profundos, campos de araucárias, fazendas
                centenárias - onde a vida segue o ritmo das estações e as tradições campeiras
                permanecem vivas. É neste cenário que se desenrolam histórias de crime,
                tradição, superação e mistério.
                <br />
                <br />
                <strong>O CONFLITO CENTRAL:</strong>
                <br />
                FRANCO (62), especialista em artes marciais, e MALONI (61), cowboy
                experiente, são os guardiões não-oficiais da região. Quando crimes começam a
                perturbar a paz local, eles unem forças para investigar, descobrindo que cada
                caso está conectado a um plano maior da corporação AGROGLOBAL, que
                pretende forçar os moradores a venderem suas terras para exploração de um
                mineral raro.
                <br />
                <br />
                <strong>O DRAMA FAMILIAR:</strong>
                <br />
                MARGARETE (68), viúva que perdeu o marido Antônio em acidente
                automobilístico na região, cria sozinha as filhas Clara (13) e Letícia (18)
                enquanto administra uma fazenda de cavalos de raça. Clara, uma jovem
                sonhadora que sofre bullying na escola por ser do interior, sente
                profundamente a falta do pai. Letícia, prestes a ingressar na vida adulta,
                envolve-se romanticamente com DANIEL (25), jovem veterinário ambicioso que
                chegou recentemente à região, gerando conflitos entre tradição e modernidade.
                <br />
                <br />
                <strong>O MISTÉRIO DO TROPEIRO FANTASMA:</strong>
                <br />
                Quando turistas ou invasores tentam depredar a natureza, surge
                misteriosamente o TROPEIRO FANTASMA (75), montado em uma mula e
                puxando outra carregada de utensílios para venda, protegendo o meio
                ambiente com sabedoria ancestral.
                <br />
                <br />
                <strong>A REDE DE APOIO:</strong>
                <br />
                A comunidade conta ainda com:
                <br />
                • FERNANDO (72) e JORDANA (68), casal experiente que oferece sabedoria e
                apoio
                <br />
                • TAYLA (55), bióloga e praticante de xamanismo
                <br />
                • MESTRE TONÉ (78), líder do Mosteiro Franciscano Independente
                <br />
                • GALO VÉIO (58) e seu filho TIASQUE (49), especialistas em equitação e
                tradições
              </S.TextB>
            </S.TextoContainerB>
          </S.TextContainer>
        </S.ContainerSubA>
      </S.Body>
      {fullScreenImage && (
        <S.ModalOverlay onClick={handleClose}>
          <S.CloseButton onClick={handleClose}>×</S.CloseButton>
          <img
            src={fullScreenImage}
            alt="Full screen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </S.ModalOverlay>
      )}
    </S.MainContainer>
  );
};

export default DocumentarioPuruna;