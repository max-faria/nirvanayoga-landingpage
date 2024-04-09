import logo from "../../assets/logo.svg";
import {
  LoginButton,
  LoginButtons,
  Logo,
  LogoContainer,
  NavButton,
  NavButtonsContainer,
  NavigationBar,
  SectionButtons,
} from "./styles";

const Header = () => {
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
    </NavigationBar>
  );
};

export default Header;
