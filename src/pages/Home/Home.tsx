import React from 'react';
import {Container} from "./HomeStyled";
import FullScreenMedia from '../../components/FullScreenMedia/FullScreenMedia';
import SectionPicture from '../../components/SectionPicture/SectionPicture';
import CustomCarousel from '../../components/Carousel/Carousel';
import CardComponent from '../../components/CardComponent/CardComponent';
import BigTextSection from '../../components/BigTextSection/BigTextSection';
import TitlePage from '../../components/TitlePage/TitlePage';

const boat = require('../../assets/images/products/boat.jpg');

const HomePage: React.FC = () => {
  return (
    <Container>
      <FullScreenMedia mediaSrc={boat} />
      <TitlePage titleText="Mosaico" titleColor="#ffffff" textColor="#ffffff" backgroundColor="#0000000"/>
      <hr/>
      <SectionPicture
      backgroundColor='#0000000'
      />
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
      <BigTextSection
        titleText='Um pouco mais sobre COP30'
        bigText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Quisque vehicula, nunc ac pellentesque interdum, eros felis faucibus neque, sed pulvinar lacus ipsum a mi. Ut bibendum ultrices malesuada. Sed id facilisis libero, non fringilla risus. Praesent a urna id sem tristique malesuada. Integer at enim ut tortor dictum tincidunt ac eget nunc. Nam sit amet ex eu eros pellentesque viverra. Sed vel semper nisi. Fusce a lacus vel purus faucibus laoreet ut sit amet orci. Integer vitae nisl vel sapien tristique malesuada. Etiam efficitur viverra ante a fermentum. Vestibulum ac odio non urna ultrices suscipit nec vel velit.
        Phasellus aliquet, nunc in hendrerit feugiat, lacus risus convallis mauris, nec auctor lectus odio sit amet purus. Sed id metus nec odio suscipit interdum. Duis euismod semper arcu, id cursus sem laoreet in. Donec vehicula tincidunt libero, nec sagittis arcu. Curabitur eget ante eu ex lacinia vehicula. Integer convallis erat quis magna consectetur, vel gravida eros dapibus. Nulla facilisi. Curabitur id tellus sit amet risus ultrices eleifend. Nulla sagittis, eros quis consectetur mollis, libero nulla tristique purus, id fringilla orci mi non justo. Praesent consectetur dui eget dapibus feugiat. Nam tincidunt, ex id vehicula eleifend, odio nisi tincidunt lectus, nec tincidunt eros nunc id justo. Fusce condimentum ultrices eros, quis interdum massa venenatis quis.
        Vivamus at ligula a odio ornare vehicula ut sit amet lorem. Ut pretium risus id metus gravida, id efficitur velit fringilla. Integer convallis urna id eros luctus tincidunt. Proin sed bibendum risus, in molestie mauris. Vestibulum euismod fermentum elit sed fringilla. Mauris tempus eros vitae turpis aliquet, ut vehicula enim dictum. Aliquam erat volutpat. Fusce a odio nec lacus tincidunt posuere. Integer nec turpis vitae sapien egestas luctus. Vivamus vel enim id augue tincidunt efficitur non vitae purus.
        Sed id ligula vel ipsum egestas dapibus sit amet quis ligula. Pellentesque tempor sollicitudin lorem, et vulputate lorem convallis vel. Nam venenatis, arcu at vestibulum tempor, mi felis convallis ex, at dignissim ligula justo sed ex. Cras auctor molestie ipsum sed laoreet. Phasellus quis arcu ut turpis viverra ultrices eget at turpis. Sed eget nisi vitae lorem sodales tincidunt. Aliquam dapibus, quam vel sodales mollis, augue nisi fermentum nisi, nec suscipit libero lacus ac mi. Donec faucibus nisl vel nunc pretium, in vulputate est fermentum. Ut nec gravida lorem. Pellentesque a congue eros, at condimentum metus.
        Aenean accumsan neque nec leo tincidunt, nec fermentum quam facilisis. Cras aliquam a lorem vel vehicula. Curabitur tincidunt magna libero, at scelerisque magna ultricies sed. Nullam bibendum sapien ligula, id vestibulum nisl elementum ac. Etiam eu eros eu tortor ultrices cursus. Nulla facilisi. Fusce ut massa vel nisi ultricies convallis. Integer ultrices risus sapien, eget fringilla lorem auctor non.'
      />
    </Container>
  );
};

export default HomePage;
