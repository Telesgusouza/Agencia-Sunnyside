import * as Styled from "./style";

import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";

import menuHamburguer from '../../assets/images/icon-hamburger.svg';

export default function Header() {
  const [widthScreen, setWidthScreen] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);

  useEffect(() => {
    setWidthScreen(window.screen.width);
    console.log(widthScreen)
  }, [widthScreen]);

  function showMenu() {
    setViewMenu(p => !p)
  }

  return (
    <Styled.Header>
      <img src={logo} />
      {widthScreen >= 600 
      ? 
      <Styled.Navigate>
      <a href="*">About</a>
      <a href="*">Services</a>
      <a href="*">Projects</a>
      <button>CONTACT</button>
    </Styled.Navigate> 
      :
      <Styled.Container>
        <img src={menuHamburguer} onClick={showMenu} />
        {viewMenu && (
          <Styled.Menu>
            <Styled.triangle></Styled.triangle>
            <Styled.ContainerMenu>
              <a href="*" >About</a>
              <a href="*" >Services</a>
              <a href="*" >Projects</a>
              <button>CONTACT</button>
            </Styled.ContainerMenu>
          </Styled.Menu>
        )}
      </Styled.Container>
      }
    </Styled.Header>
  );
}
