import React from "react";
import { Typography } from "@mui/material";
import {
  StyledForm,
  FormWrapper,
  ImageContainer,
  ContactSectionContainer,
} from "./contactComponenteStyled";

import * as S from "./contactComponenteStyled";

interface ContactSectionProps {
  backgroundColor?: string;
  buttonColor?: string;
  textColor?: string;
  imageUrl: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  backgroundColor = "#F9F6E9",
  buttonColor = "#000000",
  textColor = "#000000",
  imageUrl,
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
          <S.CreditosContainer>
            Criação: Homero Camargo e Bruna Madsen – Centro Audiovisual do
            Paraná
            <br />
            Desenvolvedora do Projeto: Paloma Vogt – Graciosa Pictures UG
            <br />
            Tania Madureira: Consultoria Saúde Mental
          </S.CreditosContainer>
        </S.Cainteiner1>
        <S.Cainteiner2>
          <FormWrapper>
            <Typography variant="h4" gutterBottom>
              Contato
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ fontFamily: "Arsenal, sans-serif" }}
            >
              Para mais detalhes do projeto entre em contato por e-mail:
            </Typography>
            <StyledForm
              action="https://formsubmit.co/mosaico.vitrinecultural@gmail.com"
              method="POST"
            >
              <S.Input
                name="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <S.Input
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <S.Input
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />

              <input type="text" name="_honey" style={{ display: "none" }} />

              <input type="hidden" name="_captcha" value="false" />

              <input
                type="hidden"
                name="_next"
                value="https://www.mosaicovitrinecultural.com/EcoAcao"
              />

              <input
                type="hidden"
                name="_subject"
                value="Nova mensagem recebida pelo formulário do site"
              />

              <S.ButtonSubmit
                buttonColor={buttonColor}
                variant="contained"
                color="primary"
                type="submit"
              >
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
