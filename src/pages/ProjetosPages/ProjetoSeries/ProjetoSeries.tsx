import { useEffect, useState } from "react";
import * as S from "./ProjetoSeriesStyled";
import useImagesLoaded from "../../../hooks/useImagesLoaded";
import LoadingOverlay from "../../../components/LoadingComponente/Loading";

const SeriePuruna =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758221007/Purun%C3%A32_mlhabo.jpg";
const SeriePalcoDeRua =
  "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758300013/logo512_vv996q.png";

const ProjetoSeries: React.FC = () => {
  interface SlideItem {
    id: number;
    title: string;
    text: string;
    rote?: string;
    img: string; // Adicionado campo para a imagem
  }

  const [onLoading, setOnLoading] = useState(true);

  const imageUrls = [SeriePuruna, SeriePalcoDeRua];
  const allImagesLoaded = useImagesLoaded(imageUrls);

  useEffect(() => {
    if (allImagesLoaded) {
      const timer = setTimeout(() => {
        setOnLoading(false);
        
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [allImagesLoaded]);

  const defaultSlides: SlideItem[] = [
    {
      id: 1,
      img: SeriePuruna,
      title: "Purunã",
      text: "O seriado conta as aventuras de Franco e Maloni, dois moradores da região dos Campos Gerais, que são os guardiões da bela região da serra de São Luiz do Purunã. Entre roubo de cavalos, maquinários agrícolas, assalto a bancos, a bandidagem não consegue se criar na região.",
      rote: "SeriePuruna",
    },
    {
      id: 2,
      img: SeriePalcoDeRua,
      title: "Palco de Rua",
      text: "Palco de Rua é uma série documental em 12 episódios que percorre as cinco regiões do Brasil para revelar a arte vibrante e diversa dos artistas de rua.",
      rote: "SeriePalcoDeRua",
    },
  ];

  return (
    <S.MoviesContainer>
      {onLoading && <LoadingOverlay />}

      <S.Title>SÉRIES:</S.Title>
      <S.MoviesGrid>
        {defaultSlides.map((movie, index) => (
          <S.MovieCard key={index}>
            {index === 1 ? (
              <S.MovieImageAlt src={movie.img} alt={movie.title} />
            ) : (
              <S.MovieImage src={movie.img} alt={movie.title} />
            )}
            <S.MovieTitle>{movie.title}</S.MovieTitle>
            <S.MovieDescription>{movie.text}</S.MovieDescription>
            <S.ButtonContainer>
              <S.MovieButton
                onClick={() => (window.location.href = movie.rote || "#")}
              >
                Saiba Mais
              </S.MovieButton>
            </S.ButtonContainer>
          </S.MovieCard>
        ))}
      </S.MoviesGrid>
    </S.MoviesContainer>
  );
};

export default ProjetoSeries;
