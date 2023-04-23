import styled from 'styled-components';

export const ReviewList = styled.ul`
  li {
    padding: 16px;
    border-radius: 5px;
    box-shadow: rgb(0, 0, 0) 0px 1px 4px,
      rgba(0, 0, 0, 0.8) -23px 0px 20px -23px,
      rgba(0, 0, 0, 0.8) 23px 0px 20px -23px, rgba(0, 0, 0, 0.1) 0px 0px 40px;
    max-height: 300px;
    overflow-y: scroll;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }

  h3 {
    margin-bottom: 8px;
  }
`;
