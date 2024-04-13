import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
`;

export const NavigationBar = styled.nav`
  display: flex;
  height: 72px;
  padding: 0px 64px 0px 64px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Kuno-Grey, #676767);
  background: var(--White, #fff);
`;

export const LogoContainer = styled.div`
  display: flex;
  padding: 29px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10.498px;
`;

export const Logo = styled.img`
  width: 170px;
`;

export const NavButtonsContainer = styled.div`
  display: flex;
`;
export const SectionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 24px;
`;

export const LoginButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const NavButton = styled.button`
  display: flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  color: var(--Black, #000);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 5px;
  border: 1px solid var(--Black, #000);
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  background-color: #fff;
  cursor: pointer;

  &:nth-child(even) {
    background: #000;
    color: #fff;
  }
`;

export const ContainerHeroSection = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--White, #fff);
  justify-content: space-between;
`;

export const TextHero = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 60px;
  gap: 15px;
`;

export const ImgContainer = styled.div`
  display: flex;
`;

export const ImgHero = styled.img`
  flex: 1;
  height: 100%;
`;

export const ImgAboutUs = styled.img`
  flex: 1;
  height: 640px;
  padding-right: 64px;
`;
export const Title = styled.h1`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */
`;

export const TitleSecondary = styled.h2`
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */
`;

export const Subtitle = styled.div`
  color: var(--Black, #000);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 40px;
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px;
`;
