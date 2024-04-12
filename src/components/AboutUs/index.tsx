import {
  ContainerHeroSection,
  ImgAboutUs,
  ImgContainer,
  LoginButton,
  Subtitle,
  TextHero,
  TitleSecondary,
} from "../Header/styles";
import Posture from "../../assets/yogaposture.png";

const AboutUs = () => {
  return (
    <ContainerHeroSection>
      <TextHero>
        <TitleSecondary>About us</TitleSecondary>
        <Subtitle>
          <p>
            We are dedicated to teaching the timeless practice of yoga in a
            welcoming and supportive environment. Our expert instructors are
            passionate about helping each student discover their unique path
            towards physical health and mental clarity through traditional and
            innovative yoga techniques.
          </p>
          <br />
          <p>
            We offer a variety of classes both online and at our serene studio,
            ensuring that you can always find a practice that fits your schedule
            and lifestyle. Whether you're a beginner or an experienced yogi, our
            school is committed to providing personalized support and guidance
            to help you grow your practice and achieve your wellness goals. Join
            us to start your transformative journey with yoga today.
          </p>
        </Subtitle>
        <LoginButton>Book Appointment</LoginButton>
      </TextHero>
      <ImgContainer>
        <ImgAboutUs src={Posture} />
      </ImgContainer>
    </ContainerHeroSection>
  );
};

export default AboutUs;
