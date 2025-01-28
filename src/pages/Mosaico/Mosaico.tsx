import React, { useEffect, useState } from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import VoronoiCanvas from '../../components/Mosaico/Mosaico';
import Footer from '../../components/footer/footer';
import BigTextSection from '../../components/BigTextSection/BigTextSection';
import CustomCarousel from '../../components/Carousel/Carousel';

import * as S from "./MosaicoStyled";
import SectionPictureCarrocel from '../../components/SectionPictureCarrocel/SectionPictureCarrocel';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

const finalSvg = require('../../assets/images/products/cora.png');
const fundoPadrao = require('../../assets/images/products/fundoPadrão.png');

const hiddenText = `
  <p>O Mosaico é uma plataforma digital projetada para dar visibilidade a projetos sociais, culturais, ambientais e educacionais, contribuindo para superar um dos maiores desafios enfrentados por iniciativas no Brasil: a falta de acesso a um público amplo e diversificado.</p>

  <h3>Por que essa página é necessária no Brasil?</h3>
  <p>No Brasil, projetos sociais e culturais frequentemente enfrentam barreiras como:</p>
  <ul>
    <li><strong>Baixa visibilidade:</strong> Muitas iniciativas incríveis permanecem desconhecidas devido à falta de plataformas adequadas para divulgação.</li>
    <li><strong>Dificuldade de legitimação:</strong> Sem uma vitrine confiável, os projetos têm dificuldade de demonstrar credibilidade e atrair apoiadores.</li>
    <li><strong>Conexão limitada com o público-alvo:</strong> Projetos transformadores não alcançam as comunidades ou audiências que poderiam se beneficiar diretamente de suas ações.</li>
    <li><strong>Falta de inspiração coletiva:</strong> A ausência de um espaço centralizado inibe a troca de ideias e o surgimento de novas iniciativas inspiradas por projetos já existentes.</li>
  </ul>

  <h3>Como o Mosaico ajuda a solucionar esses problemas?</h3>
  <ol>
    <li><strong>Exposição e Credibilidade:</strong> O Mosaico funciona como uma vitrine confiável e profissional, ajudando projetos a ganharem reconhecimento.</li>
    <li><strong>Amplo Alcance:</strong> Oferece um espaço digital para conectar iniciativas a pessoas e organizações interessadas em apoiá-las ou promovê-las.</li>
    <li><strong>Inspiração:</strong> Projetos exibidos no Mosaico incentivam outros criadores e organizações a se envolverem em ações transformadoras.</li>
    <li><strong>Fortalecimento de Identidades Locais:</strong> Por meio da divulgação de projetos culturais e ambientais, a plataforma contribui para a preservação de tradições, histórias e práticas que refletem a diversidade do Brasil.</li>
  </ol>
`;

const bigText = `
<section>
  <header>
    <h1>Sobre Nós</h1>
    <h3>Sobre o Mosaico</h3>
  </header>
  <p>
    O Mosaico nasceu com o propósito de ser uma vitrine para projetos sociais e culturais de todas as áreas. 
    Acreditamos no poder da visibilidade para promover mudanças e valorizar ideias que transformam o mundo.
    Nossa missão é simples: mostrar ao mundo iniciativas que inspiram, educam e conectam.
  </p>
  <p>
    Com o Mosaico, criamos um espaço onde projetos podem brilhar, alcançando públicos diversos e celebrando a 
    diversidade de vozes e histórias que fazem parte do nosso mundo.
  </p>

  <section>
    <h3>Missão</h3>
    <p>Mostrar e valorizar projetos que inspiram.</p>
    <p>Destacar e valorizar projetos que promovem impacto positivo na sociedade, inspirando mudanças, preservação cultural e inovação.</p>
  </section>

  <section>
    <h3>Visão</h3>
    <p>Ser a principal plataforma de projetos sociais e culturais.</p>
    <p>
      Transformar o Mosaico na plataforma de referência para projetos sociais, culturais, ambientais e educacionais no Brasil, 
      conectando iniciativas a um público amplo e diversificado, inspirando mudanças, colaborações e inovações.
    </p>
  </section>

  <section>
    <h3>Por que é importante que projetos recebam visibilidade?</h3>
    <ul>
      <li><strong>Impacto Social Ampliado:</strong> Projetos que ganham visibilidade têm maior alcance, aumentando sua capacidade de promover mudanças em comunidades e grupos beneficiados.</li>
      <li><strong>Reconhecimento:</strong> A exposição ajuda iniciativas a serem valorizadas e legitimadas, abrindo portas para colaborações, financiamentos ou apoios institucionais.</li>
      <li><strong>Inspiração:</strong> Projetos bem-sucedidos servem como exemplos motivadores para outras iniciativas, criando um ciclo virtuoso de ações transformadoras.</li>
    </ul>
  </section>

  <section>
    <h3>Valores</h3>
    <ul>
      <li>
        <strong>Inclusão:</strong>
        <ul>
          <li>Todos os projetos, independentemente de tamanho, localidade ou tema, são bem-vindos no Mosaico.</li>
          <li>A plataforma busca representar a diversidade de iniciativas brasileiras, abrindo espaço para vozes que frequentemente não têm visibilidade.</li>
        </ul>
      </li>
      <li>
        <strong>Diversidade:</strong>
        <ul>
          <li>Promover iniciativas que representem a riqueza cultural, ambiental e social do Brasil.</li>
          <li>Valorizar tradições, práticas locais e inovações que destacam a pluralidade do país.</li>
          <li>Priorizar projetos de diferentes regiões e contextos (ex.: comunidades indígenas, rurais e urbanas).</li>
        </ul>
      </li>
      <li>
        <strong>Inspiração:</strong>
        <ul>
          <li>Motivar novas ideias e iniciativas, mostrando histórias de sucesso e impacto social real.</li>
          <li>Criar um ciclo de inovação social ao expor projetos que transformam.</li>
          <li>Ter uma seção de “Histórias que Inspiram” para compartilhar o impacto concreto de projetos cadastrados.</li>
        </ul>
      </li>
    </ul>
  </section>
</section>
` 

const slidesData = [
  {
    mainTitle: "Luz, Câmera, EcoAção!",
    mainText: "O projeto Luz, Câmera, EcoAção! Arte e Sustentabilidade propõe um espaço cultural inovador e interativo durante a COP 30, em novembro de 2025, em Belém/PA, ancorado em um barco no rio Guamá. O objetivo é explorar como as mudanças ambientais impactam o bem-estar psicológico, promovendo soluções sustentáveis e fomentando novas ideias. Utilizando as artes visuais, o projeto destaca iniciativas ambientais em andamento e inspira estratégias futuras, sendo um ponto de encontro para participantes da COP 30, artistas, ativistas, comunidade local e a mídia nacional e internacional.",
    subheading1: { title: "Primeiro Subtítulo", text: "Descrição do primeiro subtítulo" },
    subheading2: { title: "Segundo Subtítulo", text: "Descrição do segundo subtítulo" },
    imageSrc: require("../../assets/images/luz.png"),
  },
  {
    mainTitle: "Educação e Produção Audiovisual",
    mainText: "O projeto Educação e Produção Audiovisual para a Sustentabilidade COP 30, promovido pela Cooperativa de Cinema & Mídias Digitais e o Centro Audiovisual do Paraná, visa capacitar adolescentes e jovens de comunidades carentes de Belém/PA em técnicas de produção audiovisual com foco em temas ambientais como mudanças climáticas, biodiversidade e sustentabilidade. O curso, que combina teoria e prática, busca engajar os participantes como criadores de conteúdo e agentes de transformação social, promovendo a conscientização ambiental e o uso de plataformas digitais para alcançar amplos públicos. A iniciativa é uma resposta ao marco da COP 30 no Brasil, incentivando a juventude a desempenhar um papel ativo na construção de um futuro sustentável.",
    subheading1: { title: "Primeiro Subtítulo", text: "Descrição do primeiro subtítulo" },
    subheading2: { title: "Segundo Subtítulo", text: "Descrição do segundo subtítulo" },
    imageSrc: require("../../assets/images/boat2.jpg"),
  },
  {
    mainTitle: "C E E P A",
    mainText: "O projeto Centro de Excelência em Educação e Produção Audiovisual, iniciado em 2001, foi uma iniciativa sócio-cultural desenvolvida pela Cooperativa Cinema & Mídias Digitais com foco na arte-cidadania. Ele usou o audiovisual e formas de comunicação como ferramentas para a formação humana e promoção da cidadania, atendendo jovens de 12 a 17 anos em comunidades carentes. Com atividades práticas e teóricas, os participantes produziram documentários, materiais jornalísticos e conteúdos para WebTV, promovendo o desenvolvimento de habilidades técnicas e fortalecendo a autoestima comunitária. O projeto alcançou impacto regional, envolvendo mais de 150 pessoas e inspirando práticas de resgate cultural e inclusão social.",
    subheading1: { title: "Primeiro Subtítulo", text: "Descrição do primeiro subtítulo" },
    subheading2: { title: "Segundo Subtítulo", text: "Descrição do segundo subtítulo" },
    imageSrc: require("../../assets/images/comuni.png"),
  }
];
interface SlideItem {
  gradient: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  content?: React.ReactNode;
  backgroundColor2?: string;

  imageSrc: string; // Adicionado campo para a imagem
}
const MosaicoPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()


  useEffect(()=> {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  },[])
  
  return (
    <S.Container>
      <ScrollToTop />
      <S.MosaicoWrapper>
        <S.TitleOverlayContainer>
          <S.TitleOverlay>
            MOSAICO
          </S.TitleOverlay>
          <S.TextOverlay>
            Onde cada peça faz a diferença
          </S.TextOverlay>
        </S.TitleOverlayContainer>
        <VoronoiCanvas />
      </S.MosaicoWrapper>
      <CardComponent
        isMobile={isMobile}
        expandedMax='85vh'
        expandedMin='33vh'
        MobileHMax='250vh'
        MobileHMin='33vh'
        opacity='20%'
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#ffffff"
        borderColor="#0000000"
        mainTitle="O que é o Mosaico"
        mainText=""
        subheading1={{
          title: "Primeiro Subtítulo",
          text: "Descrição do primeiro subtítulo"
        }}
        subheading2={{
          title: "Segundo Subtítulo",
          text: "Descrição do segundo subtítulo"
        }}
        longText="O Mosaico é uma plataforma digital que funciona como uma vitrine aberta para projetos sociais, culturais, ambientais e educacionais. Seu objetivo é dar visibilidade a iniciativas transformadoras, promovendo sua apreciação e inspirando um público amplo e diversificado."
        frameWidth="25vw"
        frameHeight="25vh"
        imageWidth="20%"
        imageHeight="auto"      
        justify='end'
        imageSrc={finalSvg}
        hiddenText={hiddenText}
        />
      <SectionPictureCarrocel
        slides={slidesData}
        isMobile={isMobile}
      />
      <BigTextSection
        backgroundColor={"#000000"}
        colorCont={'white'}
        bigText={bigText}
        isMobile={isMobile}
        titleText={''}      
        expandedMax='205vh'
        expandedMin='60vh'
        MobileHMax='470vh'
        MobileHMin='33vh'
        portfo={true}
        Expanded={true}
      />
      <CustomCarousel
        isMobile={isMobile}
        backgroundColor = {'#ffffff'}
        backgroundColor2={'#000000'}
        textColor = {'#000000'}
        title = {''}
        subtitle = {''}      
      />
      <S.PageButtonSection>
        <S.FullImage src={fundoPadrao}/>
        <S.PageButton
          onClick={()=>{navigate("/Home")}}
        >
          Oque vem por ai!
        </S.PageButton>
      </S.PageButtonSection>
      <Footer/>
    </S.Container>
  );
};

export default MosaicoPage;