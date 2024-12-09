import React from 'react';
import { HeaderContainer, Title, Nav, NavList, NavItem, StyledLink } from './HeaderStyled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Minha Aplicação</Title>
      <Nav>
        <NavList>
          <NavItem>
            <StyledLink to="/">Home</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/about">About</StyledLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;


