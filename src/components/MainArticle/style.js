import styled, { StyleSheetManager } from "styled-components";
import bgEgg from "../../assets/images/desktop/image-transform.jpg";
import bgCup from "../../assets/images/desktop/image-stand-out.jpg";

import graphicDesign from "../../assets/images/desktop/image-graphic-design.jpg";
import photographer from "../../assets/images/desktop/image-photography.jpg";

export const Section = styled.section`
  width: 100%;

  /* @media (max-width: 550px) {
    grid-template-columns: 1fr;
  } */
`;

export const inlineContent = styled.div`
  width: 100%;
`;

export const ArticleContent = styled.div`
  width: 50%;

  padding: 40px;

  height: 400px;
  background-color: aliceblue;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 100%;
    max-width: 370px;
    position: relative;
  }

  h1 {
    font-family: "Fraunces", serif;
    font-size: 34px;
    font-weight: 900;
    margin-bottom: 26px;
    color: hsl(212, 27%, 19%);
  }

  p {
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    color: hsl(167, 40%, 24%);
    line-height: 22px;
    font-size: 15px;
    margin-bottom: 26px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const LinkRed = styled.a`
  font-family: "Fraunces", serif;
  font-weight: 900;
  text-decoration: none;
  color: hsl(212, 27%, 19%);

  position: relative;
  width: 1px;
  z-index: 10;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:after {
    content: "";
    z-index: 0;
    position: absolute;
    top: 80%;
    left: -10px;
    width: 110%;
    padding: 5px;
    background-color: hsl(7, 99%, 70%);
    opacity: 0.5;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 0.7;
  }
`;

export const LinkYellow = styled.a`
  font-family: "Fraunces", serif;
  font-weight: 900;
  text-decoration: none;
  color: hsl(212, 27%, 19%);

  position: relative;
  z-index: 10;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:after {
    content: "";
    z-index: 0;
    position: absolute;
    /* bottom: 100%; */
    top: 80%;
    left: -10px;
    /* right: 0px; */
    width: 110%;
    padding: 5px;
    background-color: hsl(51, 100%, 49%);
    opacity: 0.5;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 0.7;
  }
`;

export const ImageIllustrationEgg = styled.div`
  width: 50%;
  float: right;
  min-height: 400px;

  background-image: url(${bgEgg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ImageIllustrationCup = styled.div`
  width: 50%;
  float: left;
  min-height: 400px;

  background-image: url(${bgCup});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ArticleContentDesign = styled.div`
  height: 400px;
  padding: 50px;
  position: relative;
  color: rgba(0, 0, 0, 0.85);

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: absolute;
    bottom: 0px;
    max-width: 400px;
    /* left: 0; */
    padding: 50px 40px;
    text-align: center;
  }

  h1 {
    font-family: "Fraunces", serif;
    font-weight: 900;
    font-size: 23px;
    color: rgba(0, 0, 0, 0.75);
  }

  p {
    margin-top: 17px;
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const ContentGraphicDesign = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  background-image: url(${graphicDesign});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ContentPhotography = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  background-image: url(${photographer});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
