import * as S from './CooperativaStyled';

const cooperativa = require("../../assets/images/logo/cooperativa.png")

const Cooperativa: React.FC = () => {

  return (
    <S.MainContainer>
      <S.Img src={cooperativa}/>
      <S.Text>  TRABALHO EM PROGRESSO</S.Text>
    </S.MainContainer>
  );
};

export default Cooperativa;
