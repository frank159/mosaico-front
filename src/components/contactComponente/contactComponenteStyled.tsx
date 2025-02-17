import styled from 'styled-components';
import { Button, Container, TextField } from '@mui/material';

interface ContainerProps {
  backgroundColor?: string;
  buttonColor?: string;
  textColor?: string;
}

export const ContactSectionContainer = styled(Container)<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
  /* "&&" força maior precedência das regras sobre o estilo padrão do MUI */
  && {
    background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
    color: ${({ textColor }) => textColor || '#000'};
    height: 100vh;
    padding: 0; /* Remove o padding padrão do MUI Container, se desejar */
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: end;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const FormWrapper = styled.div`
  padding: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const MainCainteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const Cainteiner1 = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Cainteiner2 = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ButtonSubmit = styled(Button)<ContainerProps>`
    background-color: ${(prop)=> (prop.buttonColor) } !important;
`;

export const Input = styled(TextField)`
  width: 40vw !important;
`;

export const Img = styled.img`

`;
