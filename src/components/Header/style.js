import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;

  display: flex;
  justify-content: space-between;

  img {
    width: 150px;
    object-fit: contain;
  }
`;

export const Navigate = styled.nav`
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 13px;

  a {
    margin-right: 20px;
    color: white;
    text-decoration: none;
  }

  button {
    border-radius: 19px;
    border: none;
    color: white;
    padding: 12px 17px;
    font-size: 11px;
    background-color: rgba(255, 255, 255, 0.2);

    transition: all 0.2s ease-out;
    cursor: pointer;
    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  img {
    width: 25px;
    cursor: pointer;
  }
`;
export const triangle = styled.div`
  float: right;
  width: 0px;
  height: 0px;

  border-left: 15px solid transparent;
  border-top: 15px solid transparent;
  border-bottom: 15px solid white;
`;
export const Menu = styled.div`
  z-index: 20;
  position: absolute;
  top: 15px;
  right: 0;
`;

export const ContainerMenu = styled.menu`
  width: 200px;
  margin-top: 30px;
  background-color: white;
  background-color: 0 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 15px;
    color: #707070;
    margin-bottom: 15px;

    &:hover {
      color: #505050;
    }
  }

  button {
    background-color: hsl(51, 100%, 49%);
    font-family: "Fraunces", serif;
    font-size: 12px;
    border: none;
    padding: 8px 18px;
    border-radius: 15px;

    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover {
      opacity: 0.9;
    }
  }
`;
