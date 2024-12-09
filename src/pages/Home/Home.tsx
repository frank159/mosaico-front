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
      <CardComponent/>
      <BigTextSection/>
    </Container>
  );
};

export default HomePage;