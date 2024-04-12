import {
  CardContainer,
  CardImg,
  CardTitle,
  InformationContainer,
  TextDescriptionCard,
} from "./styles";
import GroupPractice from "../../assets/group-practice.png";
import { LoginButton } from "../Header/styles";
import { Clock, Ranking } from "@phosphor-icons/react";

const ClassesCard = () => {
  return (
    <CardContainer>
      <CardImg src={GroupPractice} />
      <CardTitle>Vinyasa Yoga</CardTitle>
      <InformationContainer>
        <Ranking size={20} />
        <p>Level 2</p>
      </InformationContainer>
      <InformationContainer>
        <Clock size={20} />
        <p>45 min</p>
      </InformationContainer>
      <TextDescriptionCard>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </TextDescriptionCard>
      <LoginButton>Book now</LoginButton>
    </CardContainer>
  );
};

export default ClassesCard;
