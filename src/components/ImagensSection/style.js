import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 230px;
    }
  }
`;
