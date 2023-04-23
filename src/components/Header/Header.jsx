import React from 'react'
import { Container, Link } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Container>
  );
}
