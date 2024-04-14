import { ContainerCenter, TitleSecondary } from "../Header/styles";
import { ResponsiveCardContainer } from "../PricingSection/components/PriceCard/styles";
import AshtangaTeacherCard from "./TeachersCard/AshtangaTeacherCard";
import VinyasaTeacherCard from "./TeachersCard/VinyasaTeacherCard";
import YinTeacherCard from "./TeachersCard/YinTeacherCard";

const TeachersSection = () => {
  return (
    <ContainerCenter>
      <TitleSecondary>Meet our teachers</TitleSecondary>
        <div style={{ paddingTop: '60px'}}>
      <ResponsiveCardContainer>
          <VinyasaTeacherCard />
          <AshtangaTeacherCard />
          <YinTeacherCard />
      </ResponsiveCardContainer>
        </div>
    </ContainerCenter>
  );
};

export default TeachersSection;
