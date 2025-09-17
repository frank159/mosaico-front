import * as S from "./ProjetoSeriesStyled";

const ProjetoSeries: React.FC = () => {
  interface SlideItem {
    id: number;
    title: string;
    text: string;
    rote?: string;
    img: string; // Adicionado campo para a imagem
  }

  const SeriePuruna =
    "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758056176/as_domadoras_ktkbp2.jpg";
  const SeriePalcoDeRua = "/logo512.png";

  const defaultSlides: SlideItem[] = [
    {
      id: 1,
      img: SeriePuruna,
      title: "Purunã (As Domadoras)",
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
      <S.Title>SÉRIES:</S.Title>
      <S.MoviesGrid>
        {defaultSlides.map((movie, index) => (
          <S.MovieCard key={index}>
            {index === 1 ? (
              <S.MovieImageAlt src={movie.img} alt={movie.title} />
            ) : (
              <S.MovieImage
                src={movie.img}
                alt={movie.title}
              />
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
