import React from 'react';
import {Container, Hr} from "./SchoolStyled";
import FullScreenMedia from '../../components/FullScreenMedia/FullScreenMedia';
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import CardComponent from '../../components/CardComponent/CardComponent';
import BigTextSection from '../../components/BigTextSection/BigTextSection';
import TitlePage from '../../components/TitlePage/TitlePage';
import Footer from '../../components/footer/footer';

const boat = require('../../assets/images/school.jpg')
const luz = require("../../assets/images/camera.jpg")

const text = `
<section>
  <h3>Impacto Social</h3>
  <p>
    A iniciativa envolveu diretamente a comunidade local, alcançando resultados significativos:
  </p>
  <ul>
    <li>
      <strong>Participação da Comunidade:</strong> Entre <strong>600 inscritos</strong>, <strong>30 adolescentes</strong> foram selecionados para participar do projeto. Mais de <strong>150 pessoas</strong>, direta e indiretamente, foram beneficiadas. A comunidade esteve envolvida em todas as etapas, fortalecendo o <strong>senso de pertencimento e cidadania</strong>.
    </li>
  </ul>

  <h3>Produção e Resultados</h3>
  <p>
    Os participantes se engajaram em todas as etapas do processo audiovisual, desde a criação até a finalização:
  </p>
  <ul>
    <li>
      O projeto culminou na <strong>Mostra Criação de Cinema</strong>, organizada pelos próprios participantes, que contou com um público de <strong>aproximadamente 4 mil pessoas</strong>.
    </li>
  </ul>

  <h3>Reconhecimento</h3>
  <p>
    A iniciativa recebeu <strong>reconhecimento nacional e internacional</strong>:
  </p>
  <ul>
    <li>
      Nacionalmente, foi destaque em veículos como o <strong>Globo Repórter</strong>.
    </li>
    <li>
      Internacionalmente, foi apresentado como um <strong>case de sucesso</strong> na <strong>3ª Conferência Internacional BAWB Brasil (Business as an Agent of World Benefit)</strong>, em 2005.
    </li>
  </ul>

  <h3>Impacto na Mídia</h3>
  <p>
    O projeto gerou visibilidade significativa:
  </p>
  <ul>
    <li>
      <strong>Reportagens e divulgações</strong> destacaram sua inovação e o impacto positivo na formação dos jovens.
    </li>
    <li>
      Promoveu discussões sobre o <strong>audiovisual como ferramenta de inclusão e transformação social</strong>.
    </li>
  </ul>

  <h3>Estrutura</h3>
  <p>
    O CEEPA operou por meio de dois grandes núcleos:
  </p>
  <ol>
    <li>
      <strong>Audiovisual e Comunicação</strong>, com três laboratórios principais:
      <ul>
        <li><strong>Produção e Criação</strong></li>
        <li><strong>Imagem</strong></li>
        <li><strong>Áudio</strong></li>
      </ul>
    </li>
    <li>
      <strong>Escola itinerante</strong>, estruturada em uma carreta adaptada, que levou ensino a comunidades remotas, promovendo <strong>integração cultural e inclusão social</strong>.
    </li>
  </ol>

  <p>
    Com essa abordagem, o projeto se consolidou como um <strong>marco de transformação social</strong>, utilizando o audiovisual para <strong>oferecer oportunidades, resgatar histórias locais</strong> e fortalecer a <strong>identidade cultural e a cidadania</strong>.
  </p>
</section>

`

const School: React.FC = () => {
  return (
    <Container>
      <FullScreenMedia mediaSrc={boat} />
      <TitlePage titleText="C E E P A" titleColor="#000000" textColor="#000000" backgroundColor="#0000000"/>
      <hr/>
      <CardComponent
        expandedMax='122vh'
        expandedMin='33vh'
        opacity='20%'
        backgroundColor="#e9e6d0"
        textColor="#1A3F13"
        titleColor="#1A3F13"
        borderColor="#000000"
        mainTitle="Centro de Excelência em Educação e Produção Audiovisual"
        mainText=""
        subheading1={{
          title: "Primeiro Subtítulo",
          text: "Descrição do primeiro subtítulo"
        }}
        subheading2={{
          title: "Segundo Subtítulo",
          text: "Descrição do segundo subtítulo"
        }}
        longText="O Centro de Excelência em Educação e Produção Audiovisual (CEEPA) foi um projeto piloto realizado em Tibagi, Paraná, que utilizou o cinema e a comunicação jornalística como ferramentas de transformação social. A iniciativa teve como foco adolescentes de 12 a 16 anos da rede pública de ensino, promovendo uma formação cultural, técnica e cidadão."
        frameWidth="25vw"
        frameHeight="25vh"
        imageWidth="20%"
        imageHeight="auto"      
        justify='end'
        hiddenText={text}
        />
        <SectionPicture
        imageSrc={luz}
        backgroundColor = '#ecebdc'
        textColor = '#1A3F13'
        titleColor = '#1A3F13'
        borderColor = '#1A3F13'
        backgroundColorHover = '#e9e6d0'
        height = '60vh'
        width = '90vw'
        scale = '1.01'
        mainTitle = 'Resumindo'
        mainText = {'O projeto Centro de Excelência em Educação e Produção Audiovisual, desenvolvido pela Cooperativa Cinema & Mídias Digitais (CCMD), é uma iniciativa sociocultural que utiliza audiovisual e comunicação como ferramentas para promover cidadania e desenvolvimento socioeconômico em comunidades carentes. Realizado em Tibagi (PR), o projeto selecionou 30 adolescentes entre 600 inscritos e beneficiou mais de 150 pessoas, com resultados apresentados em uma mostra de cinema que reuniu 4 mil espectadores. A proposta inclui dois núcleos principais (Audiovisual e Comunicação), oferecendo formação teórica e prática em jornalismo, web TV/rádio e produção de documentários, com foco na preservação cultural e no desenvolvimento comunitário sustentável.'}
      />
      {/* <Footer marginTop={'5vh'}/> */}
    </Container>
  );
};

export default School;
