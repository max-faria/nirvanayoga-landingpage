import { useLayoutEffect, useState } from "react";
import { MobileMenuIcon, NavButtonsContainer, NavigationBar } from "./styles";
import { List } from "@phosphor-icons/react";
import LogoComponent from "./components/Logo";
import NavButtons from "./components/NavButtons";
import LoginButtonsComponent from "./components/LogginButtons";
import MobileMenuComponent from "./components/MobileMenu";

const useLockBodyScroll = (lock: boolean) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [lock]);
};

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(isMenuOpen);

  return (
    <header>
      <NavigationBar>
        <LogoComponent />
        <NavButtonsContainer>
          <NavButtons />
          <LoginButtonsComponent />
        </NavButtonsContainer>
        <MobileMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
          <List size={24} />
        </MobileMenuIcon>
      </NavigationBar>
      <MobileMenuComponent isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
};

export default Header;
