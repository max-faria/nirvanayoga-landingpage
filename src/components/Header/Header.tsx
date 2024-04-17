import { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  LoginButton,
  LoginButtons,
  Logo,
  LogoContainer,
  MobileMenu,
  MobileMenuIcon,
  NavButton,
  NavButtonsContainer,
  NavigationBar,
  SectionButtons,
} from "./styles";
import { List } from "@phosphor-icons/react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <NavigationBar>
      <LogoContainer>
        <Logo src={logo} alt="" />
      </LogoContainer>
      <NavButtonsContainer>
        <SectionButtons>
          <NavButton>Home</NavButton>
          <NavButton>About us</NavButton>
          <NavButton>Class</NavButton>
          <NavButton>Pricing</NavButton>
          <NavButton>Team</NavButton>
        </SectionButtons>
        <LoginButtons>
          <LoginButton>Login</LoginButton>
          <LoginButton>Try free for 7 days</LoginButton>
        </LoginButtons>
      </NavButtonsContainer>

      <MobileMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
        <List size={24} />
      </MobileMenuIcon>
      <MobileMenu isOpen={isMenuOpen}>
        <SectionButtons>
          <NavButton onClick={() => setMenuOpen(false)}>Home</NavButton>
          <NavButton onClick={() => setMenuOpen(false)}>About us</NavButton>
          <NavButton onClick={() => setMenuOpen(false)}>Class</NavButton>
          <NavButton onClick={() => setMenuOpen(false)}>Pricing</NavButton>
          <NavButton onClick={() => setMenuOpen(false)}>Team</NavButton>
        </SectionButtons>
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px', width: '50%', gap: '8px' }}>
          <LoginButton onClick={() => setMenuOpen(false)}>Login</LoginButton>
          <LoginButton onClick={() => setMenuOpen(false)}>
            Try free for 7 days
          </LoginButton>
        </div>
      </MobileMenu>
    </NavigationBar>
  );
};

export default Header;
