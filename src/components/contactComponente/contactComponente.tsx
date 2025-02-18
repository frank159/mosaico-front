import React from 'react';
import {
    Checkbox,
    Typography,
    FormControlLabel
} from '@mui/material';
import {
    StyledForm,
    FormWrapper,
    ImageContainer,
    ContactSectionContainer
} from './contactComponenteStyled';

import * as S from "./contactComponenteStyled"

interface ContactSectionProps {
  backgroundColor?: string;
  buttonColor?: string;
  textColor?: string;
  imageUrl: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  backgroundColor = '#F9F6E9',
  buttonColor = '#000000',
  textColor = '#000000',
  imageUrl
}) => {
  return (
    <ContactSectionContainer
      maxWidth={false}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <S.MainCainteiner>
        <S.Cainteiner1>
          <ImageContainer>
            <S.Img src={imageUrl} alt="Contact" />
          </ImageContainer>
        </S.Cainteiner1>
        <S.Cainteiner2>
          <FormWrapper >
            <Typography variant="h4" gutterBottom>
              Contato
            </Typography>
            <Typography variant="body1" paragraph>
              Para mais detalhes do projeto entre em contato por e-mail:
            </Typography>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <S.Input 
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <S.Input
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <S.Input
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Eu aceito os Termos"
              />
              <S.ButtonSubmit buttonColor={buttonColor} variant="contained" color="primary" type="submit">
                Submit
              </S.ButtonSubmit>
            </StyledForm>
          </FormWrapper>
        </S.Cainteiner2>
      </S.MainCainteiner>
    </ContactSectionContainer>
  );
};

export default ContactSection;
