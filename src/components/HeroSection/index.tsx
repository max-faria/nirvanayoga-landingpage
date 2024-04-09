import {
  ContainerHeroSection,
  ImgHero,
  LoginButton,
  LoginButtons,
  Subtitle,
  TextHero,
  Title,
} from "../Header/styles";
import HeroPhoto from "../../assets/hero-photo.png";

const HeroSection = () => {
  return (
    <ContainerHeroSection>
      <TextHero>
        <Title>Join Our Online Yoga Classes</Title>
        <Subtitle>
          Welcome to a space where your journey to inner peace and physical
          strength begins. Here, each breath opens the door to a new
          possibility, and every movement takes you closer to your true self.
          Discover the transformative power of yoga with us, and let your
          journey unfold into a harmonious blend of mind, body, and spirit.
          Start your path to wellness today, and let the harmony within guide
          you to a life of balance and vitality.
        </Subtitle>
        <LoginButtons>
          <LoginButton>Login</LoginButton>
          <LoginButton>Try free for 7 days</LoginButton>
        </LoginButtons>
      </TextHero>
      <ImgHero src={HeroPhoto} />
    </ContainerHeroSection>
  );
};

export default HeroSection;
