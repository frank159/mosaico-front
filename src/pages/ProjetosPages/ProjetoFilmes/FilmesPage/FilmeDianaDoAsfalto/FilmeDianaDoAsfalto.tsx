import * as S from "./FilmeDianaDoAsfaltoStyled";

const FilmeDianaDoAsfalto: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/arquivos/BETOCARMINATcurriculo.docx";
    link.setAttribute("download", "BETO CARMINAT curriculo.docx");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <S.MainContainer>
      <S.Body>
        <S.ContainerSubA>
          <S.ContainerRightA>
            <S.TitleA>Diana do Asfalto</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                O projeto “Diana do Asfalto”, roteiro de Pedro Merege, acompanha
                a trajetória de Diana, uma mulher independente, que vive entre
                viagens, relações passageiras e trabalhos como acompanhante.
                Ambientado no litoral do Paraná e em cidades próximas, o enredo
                mistura cenas cotidianas (como alugar um apartamento, pintar
                quadros, frequentar bares e estradas) com encontros que revelam
                tanto vulnerabilidade quanto força. A história constrói o
                retrato de uma mulher que transita entre a busca por autonomia,
                a sobrevivência e a constante exposição aos perigos e
                julgamentos sociais, revelando o contraste entre o glamour
                superficial e a dureza da vida nas margens.
              </S.TextoA>

              <S.TextoC>
                <strong>Direção:</strong> Beto Carminatti e Pedro Merege
              </S.TextoC>
            </S.TextoAContiner>
          </S.ContainerRightA>
        </S.ContainerSubA>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Beto Carminatti</S.TitleB>
        <S.TextB>
          Diretor, roteirista, produtor e editor, com DRT em direção de
          produção, direção de fotografia, roteiro e edição. É diretor da
          Celluloid Filmes e criador do Cine Clube Espoleta. Também atua como
          docente em universidades (Universidade Positivo, PUC, UNESPAR) e já
          dirigiu teatro e escreveu literatura e HQ. Carreira
          <br />
          <br />
          • Mais de 20 filmes entre longas, telefilmes e curtas.
          <br />
          • Direção de 90 programas de TV e trabalhos para Globo/RPC (4 seriados
          e 23 episódios).
          <br />
          • Produções recentes: Chiffonnade (2023), Um Olhar Paulistano sobre a
          Bossa Nova e o Jazz (2023), Senhora das Imagens (2021), Cormorant
          (2014), Profissão Insônia (2012), As Muitas Vidas de VX (2010) e Madre
          (2000).
          <br />
          • Seriados: Amor em Tempos de Guerra, A Lenda das Encantadas,
          Contestado e Mistérios do Lagamar. Premiações
          <br />
          • Festival da Lapa: Melhor atriz, fotografia e som (Cormorant, 2015).
          <br />
          • Prêmio Globo/RPC: Melhor direção e melhor filme (Amor em Tempos de
          Guerra, 2012).
          <br />
          • Festival CINEP/Recife: Melhor fotografia e direção de arte
          (Mistéryos, 2010).
          <br />
          • Festival de Curitiba: Melhor direção (Mistéryos, 2008).
          <br />
          • 4 Kikitos no Festival de Gramado (Terra, 1986; Balada do Vampiro,
          2006). Outros trabalhos
          <br />
          • Direção para Discovery Channel (Desafio em Dose Dupla Brasil).
          <br />• Cobertura de shows nos anos 1990 (The Wailers, Titãs, Cássia
          Eller, entre outros).{" "}
        </S.TextB>
        <S.ButtonB
          onClick={() => {
            handleDownload();
          }}
        >
          Saiba Mais
        </S.ButtonB>
      </S.BodyB>
    </S.MainContainer>
  );
};

export default FilmeDianaDoAsfalto;
