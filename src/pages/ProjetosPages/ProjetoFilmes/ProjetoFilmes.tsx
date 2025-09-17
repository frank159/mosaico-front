import * as S from "./ProjetoFilmesStyled";

const ProjetoFilmes: React.FC = () => {
  interface SlideItem {
    id: number;
    title: string;
    text: string;
    rote?: string;
    img: string; // Adicionado campo para a imagem
  }

  const FilmeDianaDoAsfalto = "/logo512.png";
  const FilmeMataramZacarias =
    "/logo512.png";
  const FilmeMentesArtificiais =
    "https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758122815/mentes_srguun.jpg";

  const defaultSlides: SlideItem[] = [
    {
      id: 1,
      img: FilmeDianaDoAsfalto,
      title: "Diana do Asfalto",
      text: "O projeto “Diana do Asfalto”, roteiro de Pedro Merege, acompanha a trajetória de Diana, uma mulher independente, que vive entre viagens, relações passageiras e trabalhos como acompanhante.",
      rote: "FilmeDianaDoAsfalto",
    },
    {
      id: 2,
      img: FilmeMataramZacarias,
      title: "Mataram Zacarias",
      text: "Mataram João Zacaria é uma tragédia rural. Será um filme de setenta minutos, ambientado no interior do Paraná, na metade do século XX. A história se desenvolve em torno de uma grande fazenda numa comunidade rural. É uma livre interpretação do episódio bíblico da morte de João Batista, transposto para o universo rural do Brasil no século passado.",
      rote: "FilmeMataramZacarias",
    },
    {
      id: 3,
      img: FilmeMentesArtificiais,
      title: "Mentes Artificiais",
      text: "Dois neurocientistas dão os primeiros passos na inserção de implantes neurais em seres humanos, criando uma interface cérebro-máquina, o que possibilita a manipulação das funções cognitivas de seus pacientes, eliminando as suas razões e dores existenciais.  O filme longa-metragem mostra uma discreta perversidade dos personagens que estão à frente do audacioso projeto, que é financiado por um suposto fazendeiro excêntrico.",
      rote: "FilmeMentesArtificiais",
    },
  ];

  return (
    <S.MoviesContainer>
      <S.Title>FILMES:</S.Title>
      <S.MoviesGrid>
        {defaultSlides.map((movie, index) => (
          <S.MovieCard key={index}>
            {index === 0 || index === 1 ? (
              <S.MovieImageAlt src={movie.img} alt={movie.title} />
            ) : (
              <S.MovieImage
                src={movie.img}
                alt={movie.title}
                style={
                  index === 2
                    ? { objectFit: "contain", backgroundColor: "#000000" }
                    : {}
                }
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

export default ProjetoFilmes;
