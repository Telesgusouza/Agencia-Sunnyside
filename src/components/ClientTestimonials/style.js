import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
`;

export const ContainerSectionClients = styled.div`
  margin: 60px 0;

  h3 {
    text-align: center;
    margin-bottom: 10px;
    font-family: "Fraunces", serif;
    opacity: 0.9;
    font-weight: 900;
    font-size: 14px;
    color: #707070;
  }
`;

export const ContainerUser = styled.div`
  padding: 20px;
  max-width: 800px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const User = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  img {
    width: 45px;
    height: 45px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 25px;
  }

  p {
    height: 95px;
    width: 90%;
    text-align: center;
    margin-bottom: 2px;
    font-size: 12px;
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    line-height: 20px;
    overflow: hidden;
    color: #131b28; 
  }

  strong {
    color: hsl(212, 27%, 19%);
  }

  span {
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #707070;
    margin-top: 10px;
  }

  @media (max-width: 530px) {
    width: 70%;

    img {
      margin-bottom: 15px;
    }

    p {
      height: fit-content;
      max-height: 95px;
      margin-bottom: 10px;
    }

    span {
      margin-bottom: 35px;
    }
  }

  @media (max-width: 370px) {
  width: 100%;
  }
`;
