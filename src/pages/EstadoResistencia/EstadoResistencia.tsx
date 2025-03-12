import React from 'react';
import * as S from './EstadoResistenciaStyled';
import HardwareIcon from '@mui/icons-material/Hardware';

const EstadoResistencia: React.FC = () => {
  return (
    <S.MainContainer>
      <S.BeatIcon />
      <S.WorkInProgress>Trabalho em andamento</S.WorkInProgress>
    </S.MainContainer>
  );
};

export default EstadoResistencia;
