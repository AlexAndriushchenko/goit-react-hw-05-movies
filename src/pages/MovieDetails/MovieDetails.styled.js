import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkGoBack = styled(Link)`
  display: block;
  min-width: 60px;
  max-width: 140px;
  padding: 4px;
  font-weight: 500;
  border-radius: 4px;
  margin-bottom: 16px;
  text-decoration: none;
  color: black;

  &:hover:not(.active),
  &:focus:not(.active) {
    color: pink;
  }
`;

export const MovieCardStyled = styled.div`
  display: flex;
  margin-bottom: 32px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 1px 4px, rgba(0, 0, 0, 0.8) -23px 0px 20px -23px,
    rgba(0, 0, 0, 0.8) 23px 0px 20px -23px, rgba(0, 0, 0, 0.1) 0px 0px 40px;
`;

export const Container = styled.main`
  padding: 32px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Rating = styled.p`
  margin-bottom: 32px;
`;

export const Overview = styled.div`
  margin-bottom: 32px;
  h3 {
    margin-bottom: 8px;
  }
`;

export const Genres = styled.div`
  h3 {
    margin-bottom: 8px;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin-right: 32px;
`;

export const AdditionalInfo = styled.div`
  h2 {
    font-size: 20px;
  }
`;

export const LinkAdditional = styled(Link)`
  text-decoration: none;
  font-size: 16px;
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
