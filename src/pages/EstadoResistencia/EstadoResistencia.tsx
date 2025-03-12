import React from 'react';
import * as S from './EstadoResistenciaStyled';

const EstadoResistencia: React.FC = () => {
  return (
    <S.MainContainer>
      <S.BeatIcon />
      <S.WorkInProgress>necessita envio do material</S.WorkInProgress>
    </S.MainContainer>
  );
};

export default EstadoResistencia;
