import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed; /* Torna o cabeçalho fixo na tela */
  top: 0;
  left: 0;
  width: 100%; /* Garante que o cabeçalho ocupe toda a largura */
  background-color: #062400;
  padding: 10px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000; /* Garante que ele ficará acima de outros elementos */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra para destacar o cabeçalho */
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
