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
  const MestreLeonildo = 'https://res.cloudinary.com/dzsj3kqi8/image/upload/v1758053387/6D63A1BC-275B-4DF7-B8BB-1C26FBACE5C0_shfsmv.png'

  const defaultSlides: SlideItem[] = [
    {
      id: 0,
      img: chocolateEterno,
      title: "chocolate: eterno cidadão do teste",
      text: "O Eterno Cidadão Samba é uma homenagem e também uma profunda reflexão sobre a luta contra o preconceito racial e social. O filme retrata com sensibilidade e autenticidade a história desse homem que, apesar de todas as adversidades, manteve vivo o espírito do samba e sua cultura, tornando-se uma referência e inspiração para muitas gerações.",
      rote: "DocumentarioChocolate",
    },
    {
      id: 1,
      img: ComitivaTrilhasDasTropas,
      title: "Comitiva Trilhas Das Tropas",
      text: "O projeto contempla a realização de uma série documental em 8 capítulos de 24 minutos para exibição em TV aberta ou por assinatura. O tema é a exploração das trilhas dos tropeiros utilizadas no comércio no interior do Brasil desde o século XVIII até metade do século XX.",
      rote: "DocumentarioComitivaTrilhasDasTropas",
    },
    {
      id: 2,
      img: MestreLeonildo,
      title: "Mestre Leonildo sapateando e valseando a vida",
      text: "Mestre Leonildo sapateando e valseando a vida é um documentário de longa metragem socio-antropológicocultural, captado e finalizado em digital, ao longo de mais de 20 anos, que narra, através do fandango, num dos biomas de mata atlântica mais preservadas do Brasil,",
      rote: "DocumentarioMestreLeonildo",
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
              style={index === 1 || index === 2  ? { objectPosition: "top" } : {}}
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
