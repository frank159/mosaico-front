import React, { useEffect, useState } from 'react';
import {Container, Hr} from "./HomeStyled";
import FullScreenMedia from '../../components/FullScreenMedia/FullScreenMedia';
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import CustomCarousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/CardComponent/CardComponent';
import BigTextSection from '../../components/BigTextSection/BigTextSection';
import TitlePage from '../../components/TitlePage/TitlePage';
import Footer from '../../components/footer/footer';

const boat = require('../../assets/images/barco.jpg')
const luz = require("../../assets/images/luz.png")

const text = `
<section>
  <p>
    O <strong>Projeto Luz, Câmera, EcoAção! – Arte e Sustentabilidade</strong> é uma iniciativa inovadora que acontecerá durante a <strong>COP 30</strong>, de 10 a 21 de novembro de 2025, em Belém, Pará. Sediado em um barco ancorado no rio Guamá, o projeto combina arte e sustentabilidade para explorar como as mudanças ambientais impactam nosso bem-estar psicológico. Ele apresentará soluções ambientais já implementadas globalmente e fomentará a discussão de novas ideias para enfrentar desafios futuros.
  </p>
  <p>
    A programação incluirá <strong>podcasts, painéis de discussão, exposições interativas e oficinas de co-criação</strong>, promovendo a troca de ideias entre participantes da COP 30, artistas, ativistas, educadores e a comunidade local. Haverá ainda uma <strong>plataforma virtual</strong> e espaços de <strong>networking</strong> para ampliar o alcance e fortalecer redes de colaboração.
  </p>
  <p>
    Com um público esperado de <strong>700 a 900 pessoas por dia</strong>, o projeto funcionará como um ponto de encontro para diálogos transformadores entre <strong>arte, meio ambiente e saúde mental</strong>, inspirando práticas sustentáveis e conscientização global. A iniciativa busca gerar um impacto duradouro, influenciando políticas e fortalecendo a conexão entre a sustentabilidade e o bem-estar.
  </p>
</section>
`

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    console.log("window.innerWidth <= 768", window.innerWidth <= 768)
    setIsMobile(window.innerWidth <= 768);
  },[])

  return (
    <Container>
      <FullScreenMedia mediaSrc={boat} />
      <TitlePage titleText="Luz, Câmera, EcoAção!" titleColor="#000000" textColor="#000000" backgroundColor="#0000000"/>
      <hr/>
      <SectionPicture
        imageSrc={luz}
        backgroundColor = '#ecebdc'
        textColor = '#1A3F13'
        titleColor = '#1A3F13'
        borderColor = '#1A3F13'
        backgroundColorHover = '#e9e6d0'
        height = '80vh'
        width = '90vw'
        scale = '1.01'
        mainTitle = 'Projeto Luz, Câmera, EcoAção! - Arte e Sustentabilidade'
        mainText = {text}
      />
      {/* <CustomCarousel/> */}
      <Hr/>
      <CardComponent
        isMobile={isMobile}
        expandedMax='0'
        expandedMin='0'
        MobileHMax='0'
        MobilePadding='0 0 2rem 0'
        MobileHMin='auto'
        widthLongText='97%'
        // justify={true}
        imgMargin=' 5rem 5rem 2rem 0'
        click={false}
        width='90vw'
        backgroundColor="#e9e6d0"
        textColor="#1A3F13"
        titleColor="#1A3F13"
        mainTitle="Objetivos e Temas do Projeto"
        mainText="O Projeto Luz, Câmera, EcoAção! – Arte e Sustentabilidade busca envolver e inspirar diversos públicos, promovendo um diálogo global sobre sustentabilidade, saúde mental e as mudanças ambientais. Durante a COP30, o projeto usará a arte como ferramenta para destacar soluções ambientais, explorar a interconexão entre meio ambiente e saúde mental, e incentivar ações para um futuro mais sustentável."
        subheading1={{
          title: "Primeiro Subtítulo",
          text: "Descrição do primeiro subtítulo"
        }}
        subheading2={{
          title: "Segundo Subtítulo",
          text: "Descrição do segundo subtítulo"
        }}
        longText={`
        O projeto visa destacar soluções ambientais existentes e estimular novas ideias, utilizando diferentes formas de arte para abordar e refletir sobre o impacto das mudanças ambientais. A interseção entre a sustentabilidade e o bem-estar mental será central, com o objetivo de inspirar mudanças de comportamento que promovam a saúde ambiental e mental. Ao explorar como as mudanças no meio ambiente afetam a saúde mental, o projeto busca promover uma conscientização profunda e discutir soluções que ajudem a mitigar esses impactos. Esse diálogo será enriquecido pela participação de artistas, ativistas, especialistas e membros da comunidade local, incentivando a colaboração interdisciplinar para gerar um impacto duradouro.<br/>
        Além disso, o projeto foca em valorizar a cultura local e fomentar colaborações interdisciplinares. Ao promover a herança cultural da Amazônia, busca-se fortalecer a identidade local enquanto se trabalha para um futuro mais sustentável e mentalmente saudável. A inclusão de um público diversificado é essencial, criando um espaço acessível para que todos, de diferentes origens, possam contribuir para o intercâmbio de ideias e experiências. A cobertura midiática global e a participação de líderes mundiais e especialistas são cruciais para amplificar a mensagem do projeto e garantir que ele alcance e influencie um público ainda maior, dando visibilidade às iniciativas sustentáveis e culturais apresentadas.
        `}
        imageSrc={''}
        frameHeight={'20vh'}
        frameWidth={'40vw'}
        imageWidth={'40vw'}
        imageHeight={'20vh'}
        hiddenText=''
      />
      <BigTextSection
        textAlign={'center'}
        portfo={false}
        titleText='Um pouco mais sobre COP30'
        bigText='
        A COP (Conferência das Partes) é um evento anual organizado pela ONU com o objetivo de discutir e implementar ações globais contra as mudanças climáticas. Ela reúne líderes de todo o mundo para negociar acordos que busquem mitigar os impactos ambientais da atividade humana, especialmente no que se refere ao aquecimento global. O Brasil, com sua vasta biodiversidade, desempenha um papel crucial nestas discussões.
        A COP 30, que ocorrerá em 2025, será um marco importante. O evento, a ser realizado em Belém (PA), visa fortalecer as ações para combater as mudanças climáticas e promover a sustentabilidade. Além disso, o Brasil tem uma responsabilidade estratégica devido à sua riqueza natural, que é fundamental para as soluções globais.
        A principal meta das conferências é manter o aumento da temperatura global abaixo de 1,5°C até o final do século XXI. Para atingir esse objetivo, os países devem se comprometer a reduzir suas emissões de gases de efeito estufa e promover fontes de energia renováveis. O progresso das negociações nas COPs é essencial para o sucesso de qualquer plano climático global.
        Além de estabelecer metas climáticas, a COP também enfatiza a importância da adaptação às mudanças climáticas já em curso. O apoio aos países mais vulneráveis, como os pequenos estados insulares, é uma das questões centrais discutidas. Esses países enfrentam os maiores impactos e necessitam de recursos financeiros e tecnológicos para lidar com as mudanças.
        Por fim, a COP 30 terá um papel fundamental no fortalecimento da colaboração internacional. A crise climática é um desafio global, e somente com a cooperação entre os países será possível alcançar resultados eficazes. O Brasil, ao sediar a conferência, terá a oportunidade de influenciar as políticas climáticas internacionais e impulsionar iniciativas que beneficiem tanto o país quanto o mundo.'/>
      {/* <Footer/>   */}
    </Container>
  );
};

export default HomePage;
