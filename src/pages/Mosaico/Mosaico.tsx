import React, { useRef, useState } from 'react';
import * as S from "./MosaicoStyled";

import Footer from '../../components/footer/footer';
import video from '../../assets/videos/voo.mp4';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import CheckIcon from '@mui/icons-material/Check';

const mosaicoLogo = require('../../assets/images/logo/mosaicoLogo1.png');
const seta = require('../../assets/images/icons/seta.png');
const backgroundImage = require('../../assets/images/icons/mosaicoIconeMono.png');
const esclamacaoverde = require('../../assets/images/icons/esclamacaoverde.png');



const MosaicoPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null); // Referência para a seção a ser rolada
  const [isFaixaExpanded, setIsFaixaExpanded] = useState(false); // Estado para controlar a expansão

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const toggleFaixa = () => {
    setIsFaixaExpanded(!isFaixaExpanded);
  };

  return (
    <S.Container>
      <ScrollToTop />
      <S.TitleOverlayContainer>
        <S.TitleLogo>
          <S.LogoImg src={mosaicoLogo} alt="mosaicoLogo" />
        </S.TitleLogo>
        <S.TextOverlay>
          Onde cada peça faz a diferença
        </S.TextOverlay>
      </S.TitleOverlayContainer>
      <S.Seta onClick={handleScroll}>
        <S.SetaImg src={seta} alt="mosaicoLogo" />
      </S.Seta>
      <S.VideoWrapper>
        <S.FullScreenVideo autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </S.FullScreenVideo>
      </S.VideoWrapper>
      <S.SectionBelowVideo ref={sectionRef}>
        <S.BackgroundImage backgroundImage={backgroundImage} />
        <S.PageCardContainer>
          <S.Line />
          <S.CardContainer>
            <S.SectionTextCard>
              <S.SectionTitle>
                O QUE É O MOSAICO?
              </S.SectionTitle>
              <S.SectionText>
                O Mosaico é uma plataforma digital que funciona como uma vitrine aberta para projetos:<br />
                • Sociais    • Culturais    • Ambientais    • Educacionais
              </S.SectionText>
            </S.SectionTextCard>
            <S.SectionTextCard>
              <S.SectionTitle>
                NOSSO MAIOR OBJETIVO!
              </S.SectionTitle>
              <S.SectionText>
                Dar visibilidade a iniciativas transformadoras, promovendo sua apreciação e inspirando um público amplo e diversificado
              </S.SectionText>
            </S.SectionTextCard>
            <S.SectionTextCard>
              <S.SectionTitle>
                CONTRIBUIMOS
              </S.SectionTitle>
              <S.SectionText>
                para superar um dos maiores desafios enfrentados por iniciativas do Brasil: a falta de acesso a um público amplo e diversificado            </S.SectionText>
            </S.SectionTextCard>
          </S.CardContainer>
        </S.PageCardContainer>
        <S.FaixaContainer isExpanded={isFaixaExpanded}>
          <S.FaixaTitleContainer>
            <S.FaixaTitle>
              POR QUE ESSA PÁGINA É NECESSÁRIA PARA O BRASIL?
            </S.FaixaTitle>
          </S.FaixaTitleContainer>
          <S.FaixaBody>
            <S.FaixaBodyCardsContainer>
              <S.FaixaBodyCardsTitle>
                No Brasil, projetos sociais e culturais frequentemente enfrentam barreiras como:
              </S.FaixaBodyCardsTitle>
              <S.FaixaBodyCards>
                <S.FaixaBodyCard backgroundColor={'#34140b'}>
                  <S.SubTitle>
                    <S.IconCard>
                      ❌
                    </S.IconCard>
                    <S.SubTitleFaxaCard>
                      Baixa visibilidade
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#34140b'}>
                  <S.SubTitle>
                    <S.IconCard>
                      ❌
                    </S.IconCard>
                    <S.SubTitleFaxaCard>
                      Dificuldade de legitimação
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#34140b'}>
                  <S.SubTitle>
                    <S.IconCard>
                      ❌
                    </S.IconCard>
                    <S.SubTitleFaxaCard>
                      Conexão limitada com o
                      público-alvo:
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#34140b'}>
                  <S.SubTitle>
                    <S.IconCard>
                      ❌
                    </S.IconCard>
                    <S.SubTitleFaxaCard>
                      Falta de inspiração coletiva:
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    A ausência de um espaço <br /> centralizado inibe a
                    troca de ideias e o <br /> surgimento de novas 
                    iniciativas inspiradas por projetos já existentes.
                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
              </S.FaixaBodyCards>
            </S.FaixaBodyCardsContainer>
            <S.FaixaBodyCardsContainer2>
            <S.EsclamacaoFaixa>
              <S.Escaclamacao src={esclamacaoverde}/>
            </S.EsclamacaoFaixa>
              <S.FaixaBodyCardsTitle2>
                <S.FaixaTilteBigText>
                  COM O
                </S.FaixaTilteBigText>
                <S.FaixaLogoMosaicoContainer>
                  <S.FaixaLogoMosaico src={mosaicoLogo}/>
                </S.FaixaLogoMosaicoContainer>
              </S.FaixaBodyCardsTitle2>
              <S.FaixaBodyCards>
                <S.FaixaBodyCard backgroundColor={'#4e5c2c'}>
                  <S.SubTitle>
                    <S.IconCard2>
                      <CheckIcon/>
                    </S.IconCard2>
                    <S.SubTitleFaxaCard>
                      Baixa visibilidade
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#4e5c2c'}>
                  <S.SubTitle>
                    <S.IconCard2>
                      <CheckIcon/>
                    </S.IconCard2>
                    <S.SubTitleFaxaCard>
                      Dificuldade de legitimação
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#4e5c2c'}>
                  <S.SubTitle>
                    <S.IconCard2>
                      <CheckIcon/>
                    </S.IconCard2>
                    <S.SubTitleFaxaCard>
                      Conexão limitada com o
                      público-alvo:
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    Muitas iniciativas incríveis permanecem<br />
                    desconhecidas devido à falta de<br />
                    plataformas adequadas para divulgação.

                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
                <S.FaixaBodyCard backgroundColor={'#4e5c2c'}>
                  <S.SubTitle>
                    <S.IconCard2>
                      <CheckIcon/>
                    </S.IconCard2>
                    <S.SubTitleFaxaCard>
                      Falta de inspiração coletiva:
                    </S.SubTitleFaxaCard>
                  </S.SubTitle>
                  <S.SubCardFaixaText>
                    A ausência de um espaço <br /> centralizado inibe a
                    troca de ideias e o <br /> surgimento de novas 
                    iniciativas inspiradas por projetos já existentes.
                  </S.SubCardFaixaText>
                </S.FaixaBodyCard>
              </S.FaixaBodyCards>
            </S.FaixaBodyCardsContainer2>
          </S.FaixaBody>
          <S.SetaFaixa onClick={toggleFaixa}>
            <S.SetaPlusImg
              src={seta}
              alt="seta"
              isExpanded={isFaixaExpanded}
            />
          </S.SetaFaixa>
        </S.FaixaContainer>
        <S.BackImg src={backgroundImage} alt="backgroundImage" />
      </S.SectionBelowVideo>
      <Footer />
    </S.Container>
  );
};

export default MosaicoPage;
