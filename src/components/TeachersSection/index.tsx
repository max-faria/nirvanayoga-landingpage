import { ContainerCenter, TitleSecondary } from "../Header/styles";
import AshtangaTeacherCard from "./TeachersCard/AshtangaTeacherCard";
import VinyasaTeacherCard from "./TeachersCard/VinyasaTeacherCard";
import YinTeacherCard from "./TeachersCard/YinTeacherCard";

const TeachersSection = () => {
  return (
    <ContainerCenter>
      <TitleSecondary>Meet our teachers</TitleSecondary>
      <div style={{ display: "flex", gap: "4rem", marginTop: '50px' }}>
        <VinyasaTeacherCard />
        <AshtangaTeacherCard/>
        <YinTeacherCard/>
      </div>
    </ContainerCenter>
  );
};

export default TeachersSection;
