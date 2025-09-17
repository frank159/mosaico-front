import * as S from "./SeriePalcoDeRuaStyled";

const SeriePalcoDeRua: React.FC = () => {
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
            <S.TitleA>Palco de Rua</S.TitleA>
            <S.TextoAContiner>
              <S.TextoA>
                Palco de Rua é uma série documental em 12 episódios que percorre
                as cinco regiões do Brasil para revelar a arte vibrante e
                diversa dos artistas de rua. Entre músicos, cantores, mágicos,
                cordelistas e clowns, cada episódio apresenta personagens que
                transformam praças e calçadas em verdadeiros palcos,
                compartilhando talento, sonhos e desafios. Com linguagem
                dinâmica e intimista, a série mergulha tanto nas performances
                quanto no universo pessoal desses artistas, destacando a riqueza
                cultural brasileira e a força de quem faz da rua sua profissão e
                sua resistência.
              </S.TextoA>

              <S.TextoC>
                <strong>Direção:</strong> Homero Camargo
                <br />
                <strong>Fotografo:</strong> Frank de Castro
                <br />
                <strong>Direção </strong>e Arte: Marylena bukowski
                <br />
                <strong>Som:</strong> Márcio Jacovani
                <br />
                <strong>Assistente:</strong> Agnes Schumacker
              </S.TextoC>
            </S.TextoAContiner>
          </S.ContainerRightA>
        </S.ContainerSubA>
      </S.Body>
      <S.BodyB>
        <S.TitleB>Carlos Homero Gonçalves Camargo Ribas</S.TitleB>
        <S.TextB>
          <strong>Naturalidade:</strong> Curitiba, Paraná, Brasil
          <br />
          <strong>Formação:</strong> Comunicação – Universidade de Brasília
          (UnB) Experiência profissional e roles
          <br />
          • Cineasta, produtor e realizador audiovisual, com atuação de mais de
          35 anos no mercado.
          <br />
          • Fundador da Cooperativa Cinema &amp; Mídias Digitais, produtora
          sediada no Paraná.
          <br />
          • Membro fundador do Sindicato da Indústria Audiovisual do Paraná
          (SIAPAR) Principais obras / produções destacadas
          <br />
          • Tropeiro: Alma sem Fronteira (2002) – documentário
          co-dirigido/direção de Homero Camargo.
          <br />
          • O Brasil de Saint‐Hilaire: Campos Gerais do Paraná (documentário),
          sobre a estada do botânico francês Saint Hilaire no Paraná.
          <br />
          • Produção de longas-metragens como Navalha na Carne, Frente Fria que
          a Chuva Traz, Deus Jr., Os Xeretas Informação adicional relevante
          <br />
          • Além de dirigir e produzir, Camargo também atua fortemente na
          produção cultural regional, com interesse especial em registrar
          geografias, paisagens e culturas do Paraná.
          <br />• Já foi chefe de reportagem do Jornal da Manchete e diretor de
          rádio e TV da agência Umuarama Comunicação &amp; Marketing.
        </S.TextB>
        <S.ButtonB
          onClick={() => {
            window.location.href = "/CooperativaCurriculo";
          }}
        >
          Saiba Mais
        </S.ButtonB>
      </S.BodyB>
    </S.MainContainer>
  );
};

export default SeriePalcoDeRua;
