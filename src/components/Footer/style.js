import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #90d4c5; //hsl(168, 34%, 41%);

  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: hsl(167, 40%, 24%); //hsl(168, 34%, 41%);
    font-family: "Barlow", sans-serif;
    font-weight: 900;
  }
`;

export const NavFooter = styled.nav`
  width: 240px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: hsl(167, 40%, 24%);
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 14px;

    transition: all 0.2s ease-out;

    &:hover {
      color: white;
    }
  }
`;

export const SocialMediaBrowsing = styled.div`
  margin-top: 60px;
  width: 140px;
  display: flex;
  justify-content: space-between;

  img {
    cursor: pointer;
    svg path:hover {
      fill: black;
    }
  }
`;

export const svg = styled.div`
  cursor: pointer;
  
  &:hover > svg path {
    fill: white;
  }
`;
