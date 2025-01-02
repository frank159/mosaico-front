import React from 'react';
import {Container} from "./HomeStyled";
import FullScreenMedia from '../../components/FullScreenMedia/FullScreenMedia';
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import CustomCarousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/CardComponent/CardComponent';
import BigTextSection from '../../components/BigTextSection/BigTextSection';

const boat = require('../../assets/images/products/boat.jpg');

const HomePage: React.FC = () => {
  return (
    <Container>
      <FullScreenMedia mediaSrc={boat} />
      <hr/>
      <SectionPicture/>
      <CustomCarousel/>
      <CardComponent
        backgroundColor="#F8F6E6"
        textColor="#1A3F13"
        titleColor="#1A3F13"
        mainTitle="Título Principal do Card"
        mainText="Texto principal do card que descreve o conteúdo"
        subheading1={{
          title: "Primeiro Subtítulo",
          text: "Descrição do primeiro subtítulo"
        }}
        subheading2={{
          title: "Segundo Subtítulo",
          text: "Descrição do segundo subtítulo"
        }}
        longText="Texto longo que aparece na parte inferior do card..."
        imageSrc={boat}
      />
      <BigTextSection/>
    </Container>
  );
};

export default HomePage;
