import styled from "styled-components";
import bg from "../../assets/images/desktop/image-header.jpg";

export const Main = styled.main`
  width: 100%;
  height: 100vh;

  background-image: url(${bg});

  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 140%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Fraunces", serif;
  color: white;
  font-size: 24px;

  h1 {
    text-align: center;
    position: relative;
    bottom: 40px;
    padding: 0 20px;
  }

  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
