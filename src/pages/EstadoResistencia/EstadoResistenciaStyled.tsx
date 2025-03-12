import styled from 'styled-components';
import HardwareIcon from '@mui/icons-material/Hardware';

export const MainContainer = styled.div`
  background: #000000;
  overflow-x: hidden;
  position: relative;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Globe = styled.img`
  width: 100px;
  height: 100px;
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const BeatIcon = styled(HardwareIcon)`
  font-size: 4rem !important;
  color: #ffffff;
  animation: spin 5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const WorkInProgress = styled.h1`
  color: #ffffff;
  margin-top: 20px;
`;

