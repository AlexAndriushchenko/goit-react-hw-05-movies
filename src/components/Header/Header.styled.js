import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 32px;
  border-radius: 4px;
  box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -8px rgba(0, 0, 0, 0.75);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: black;

  &:not(:last-of-type) {
    margin-right: 32px;
  }

  &.active {
    color: pink;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    color: pink;
  }
`;
