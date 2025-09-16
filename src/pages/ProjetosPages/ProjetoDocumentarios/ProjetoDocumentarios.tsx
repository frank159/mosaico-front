import * as S from "./ProjetoDocumentariosStyled";

const ProjetoDocumentarios: React.FC = () => {
  interface SlideItem {
    id: number;
    title: string;
    text: string;
    rote?: string;
    img: string; // Adicionado campo para a imagem
  }

  const chocolateEterno = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758040686/choco_der9fq.jpg'
  const ComitivaTrilhasDasTropas = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758049779/trilha_e_tropas_xpsqyc.jpg'
  const puruna = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1745364593/sample.jpg'

  const defaultSlides: SlideItem[] = [
    {
      id: 0,
      img: chocolateEterno,
      title: "chocolate: eterno cidadão do teste",
      text: "O Eterno Cidadão Samba é uma homenagem e também uma profunda reflexão sobre a luta contra o preconceito racial e social. O filme retrata com sensibilidade eautenticidade a história desse homem que, apesar de todas as adversidades, manteve vivo oespírito do samba e sua cultura, tornando-se uma referência e inspiração para muitasgerações.",
      rote: "DocumentarioChocolate",
    },
    {
      id: 1,
      img: ComitivaTrilhasDasTropas,
      title: "Comitiva Trilhas Das Tropas",
      text: "O projeto contempla a realização de uma série documental em 8 capítulos de 24 minutos para exibição em TV aberta ou por assinatura. O tema é a exploração das trilhas dos tropeiros utilizadas nocomércio no interior do Brasil desde o século XVIII até metade do século XX.",
      rote: "DocumentarioComitivaTrilhasDasTropas",
    },
    {
      id: 2,
      img: puruna,
      title: "purunã",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rote: "teste",
    },
  ];

  return (
    <S.MoviesContainer>
      <S.Title>documentários:</S.Title>
      <S.MoviesGrid>
        {defaultSlides.map((movie, index) => (
            <S.MovieCard key={index}>
            <S.MovieImage
              src={movie.img}
              alt={movie.title}
              style={index === 1 ? { objectPosition: "top" } : {}}
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

export default ProjetoDocumentarios;
