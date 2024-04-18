import { NavButton, SectionButtons } from "../styles";

const NavButtons:React.FC = () => {

  return (
    <SectionButtons>
      <NavButton>
        <a href="#">Home</a>
      </NavButton>
      <NavButton>
        <a href="#about-us">About us</a>
      </NavButton>
      <NavButton>
        <a href="#classes">Classes</a>
      </NavButton>
      <NavButton>
        <a href="#pricing">Pricing</a>
      </NavButton>
      <NavButton>
        <a href="#teachers">Teachers</a>
      </NavButton>
    </SectionButtons>
  );
};

export default NavButtons;
