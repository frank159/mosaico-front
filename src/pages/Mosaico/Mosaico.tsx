import React from 'react';
import {Container, MosaicoWrapper} from "./MosaicoStyled";
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import CustomCarousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/CardComponent/CardComponent';
import BigTextSection from '../../components/BigTextSection/BigTextSection';
import VoronoiCanvas from '../../components/Mosaico/Mosaico';
import TitlePage from '../../components/TitlePage/TitlePage';

const boat = require('../../assets/images/products/boat.jpg');

const MosaicoPage: React.FC = () => {
  return (
    <Container>
      <MosaicoWrapper>
        <VoronoiCanvas/>
      </MosaicoWrapper>
      <TitlePage titleText="Mosaico" text="" titleColor="#000000" textColor="#ffffff" backgroundColor="#ffffff"/>
      <hr/>
      <CardComponent
        backgroundColor="#000000"
        textColor="#ffffff"
        titleColor="#ffffff"
        borderColor="#ffffff"
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
        longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque vehicula, nunc ac pellentesque interdum, eros felis faucibus neque, sed pulvinar lacus ipsum a mi. Ut bibendum ultrices malesuada. Sed id facilisis libero, non fringilla risus. Praesent a urna id sem tristique malesuada. Integer at enim ut tortor dictum tincidunt ac eget nunc. Nam sit amet ex eu eros pellentesque viverra. Sed vel semper nisi. Fusce a lacus vel purus faucibus laoreet ut sit amet orci. Integer vitae nisl vel sapien tristique malesuada. Etiam efficitur viverra ante a fermentum. Vestibulum ac odio non urna ultrices suscipit nec vel velit. Sed id ligula vel ipsum egestas dapibus sit amet quis ligula. Pellentesque tempor sollicitudin lorem, et vulputate lorem convallis vel. Nam venenatis, arcu at vestibulum tempor, mi felis convallis ex, at dignissim ligula justo sed ex. Cras auctor molestie ipsum sed laoreet. Phasellus quis arcu ut turpis viverra ultrices eget at turpis. Sed eget nisi vitae lorem sodales tincidunt. Aliquam dapibus, quam vel sodales mollis, augue nisi fermentum nisi, nec suscipit libero lacus ac mi. Donec faucibus nisl vel nunc pretium, in vulputa."
        imageSrc={boat}
      />
      <BigTextSection/>
    </Container>
  );
};

export default MosaicoPage;
