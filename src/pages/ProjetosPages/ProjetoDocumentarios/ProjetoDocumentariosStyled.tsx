import { Button } from "@mui/material";
import styled from "styled-components";


export const MoviesContainer = styled.div`
  margin-top: 6rem;
`;

export const Title = styled.h1`
  color: white;
  text-align: start;
  padding-left: 4rem;
  padding-bottom: 4rem;
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  padding: 0 5vw;
  margin-bottom: 5rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const MovieCard = styled.div`
  display: grid;
  grid-template-areas:
    "image"
    "title"
    "desc"
    "button";
  grid-template-rows: auto auto 1fr auto;
  background-color: #222020d8;
  padding: 1rem;
  color: white;
  position: relative;
  z-index: 1;
  overflow: hidden;
  align-items: start;
`;

export const MovieImage = styled.img`
  grid-area: image;
  width: 100%;
  height: 20rem;
  object-fit: cover;
  margin-bottom: 2rem;
`;

export const MovieTitle = styled.h2`
  grid-area: title;
  margin-bottom: 0.5rem !important;
  text-align: center;
`;

export const MovieDescription = styled.p`
  grid-area: desc;
  font-size: 1rem;
  margin-bottom: 1.5rem !important;
  border-left: 4px solid #00000034;
  padding-left: 1rem;
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1224px) {
    height: auto;
  }
`;

export const MovieButton = styled(Button)`
  background-color: #fca827 !important;
  color: #000 !important;
  border-radius: 3px !important;
  text-transform: none !important;
  width: 30% !important;
  margin-top: auto !important;
  font-family: "Arsenal", sans-serif !important;
  @media (max-width: 1224px) {
    width: 40% !important;
  }
`;

export const CardImgAltProjeto = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #314536;
  color: white;
`;
