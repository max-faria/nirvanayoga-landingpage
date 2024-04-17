import { Logo, LogoContainer } from "../Header/styles";
import {
  FlexContainer,
  FooterContainer,
  InputContainer,
  LinksContainer,
  ListLinks,
  SocialLinksContainer,
  SubscribeButton,
  SubscribeContainer,
  SubscribeInput,
  SubscribeSubtitle,
  SubscribeText,
  SubscribeTitle,
} from "./styles";
import logo from "../../assets/logo.svg";
import { FacebookLogo, InstagramLogo, XLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <FooterContainer>
      <SubscribeContainer>
        <SubscribeText>
          <SubscribeTitle>Subscribe to our newsletter</SubscribeTitle>
          <SubscribeSubtitle>
            Access to exclusive content and offers
          </SubscribeSubtitle>
        </SubscribeText>

        <InputContainer>
          <SubscribeInput placeholder="Enter your email"></SubscribeInput>
          <SubscribeButton>Subscribe</SubscribeButton>
        </InputContainer>
      </SubscribeContainer>

      <LinksContainer>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
        <ListLinks>
          <h4>Explore</h4>
          <p>Treatment</p>
          <p>Location</p>
          <p>Services</p>
        </ListLinks>
        <ListLinks>
          <h4>Resources</h4>
          <p>Career</p>
          <p>Communities Servies</p>
          <p>Blog</p>
          <p>Voluntering</p>
          <p>Jobs</p>
        </ListLinks>
        <ListLinks>
          <h4>About Us</h4>
          <p>Contact</p>
          <p>Help/Support</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Partners</p>
        </ListLinks>
      </LinksContainer>
      <div
        style={{ backgroundColor: "#FFF", height: "1px", alignSelf: "stretch" }}
      ></div>
      <SubscribeContainer>
        <FlexContainer>
          <a href="">2023 Nirvana. All rights reserved</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies Settings</a>
        </FlexContainer>
        <SocialLinksContainer>
          <FacebookLogo size={20} color="#FFF" />
          <InstagramLogo size={20} color="#FFF" />
          <XLogo size={20} color="#FFF" />
        </SocialLinksContainer>
      </SubscribeContainer>
    </FooterContainer>
  );
};

export default Footer;
