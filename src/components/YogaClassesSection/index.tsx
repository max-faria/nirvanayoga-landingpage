import ClassesCard from "./ClassesCard";
import { ContainerCenter, Subtitle, TitleSecondary } from "../Header/styles";

import VinyasaYoga from "../../assets/vinyasa-yoga.jpeg";
import AshtangaYoga from "../../assets/ashtanga-yoga.jpeg";
import YinYoga from "../../assets/yin-yoga.jpeg";
import { GridClassesSection } from "./ClassesCard/styles";

const YogaClasses = () => {
  return (
    <ContainerCenter>
      <TitleSecondary>Yoga Classes For Every Level</TitleSecondary>
      <Subtitle>
        <p style={{ marginTop: "20px" }}>Find that one which suits you better</p>
      </Subtitle>
      <GridClassesSection>
        <ClassesCard
          column="1"
          img={VinyasaYoga}
          title="Vinyasa Yoga"
          level="Level 1"
          duration="60 min"
          description="Vinyasa Yoga, often referred to as 'flow' yoga, emphasizes the seamless transition between poses, coordinated with the breath."
        />
        <ClassesCard
          column="2"
          img={AshtangaYoga}
          title="Ashtanga Yoga"
          level="Level 2"
          duration="90 min"
          description="A highly structured and intense form of yoga that involves a specific sequence of postures, each held for a set amount of time and linked by breath."
        />

        <ClassesCard
          column="3"
          img={YinYoga}
          title="Yin Yoga"
          level="Level 1"
          duration="45 min"
          description="Yin Yoga is a slower, more meditative approach to yoga, where poses are held for longer periods, typically 3 to 5 minutes."
        />
      </GridClassesSection>
    </ContainerCenter>
  );
};

export default YogaClasses;
