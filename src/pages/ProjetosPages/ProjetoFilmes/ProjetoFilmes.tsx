import * as S from "./ProjetoFilmesStyled";

const ProjetoFilmes: React.FC = () => {
  interface SlideItem {
    id: number;
    title: string;
    text: string;
    rote?: string;
    img: string; // Adicionado campo para a imagem
  }

  const chocolateEterno = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1745364593/sample.jpg'
  const domadoras = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1745364593/sample.jpg'
  const puruna = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1745364593/sample.jpg'

  const defaultSlides: SlideItem[] = [
    {
      id: 1,
      img: chocolateEterno,
      title: "chocolate: eterno cidadão do samba",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rote: "FilmeChocolate",
    },
    {
      id: 2,
      img: domadoras,
      title: "as domadoras",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rote: "teste",
    },
    {
      id: 3,
      img: puruna,
      title: "purunã",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rote: "teste",
    },
  ];

  return (
    <S.MoviesContainer>
      <S.Title>FILMES:</S.Title>
      <S.MoviesGrid>
        {defaultSlides.map((movie, index) => (
          <S.MovieCard key={index}>
            <S.MovieImage
              src={movie.img}
              alt={movie.title}
            />
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

export default ProjetoFilmes;
