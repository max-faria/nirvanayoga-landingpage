import {
  CardContainer,
  CardImg,
  CardTitle,
  ImgCardContainer,
  InformationContainer,
  TextDescriptionCard,
} from "./styles";
import { LoginButton } from "../../Header/styles";
import { Clock, Ranking } from "@phosphor-icons/react";
import { useState } from "react";
import PopupComponent from "../PopupComponent";

interface CardInterface {
  img: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  column: string;
}

const ClassesCard: React.FC<CardInterface> = (props) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <CardContainer column={props.column}>
      <CardTitle>{props.title}</CardTitle>
      <ImgCardContainer>
        <CardImg src={props.img} />
      </ImgCardContainer>
      <div style={{ padding: '10px'}}>
        <InformationContainer>
          <Ranking size={20} />
          <p>{props.level}</p>
        </InformationContainer>
        <InformationContainer>
          <Clock size={20} />
          <p>{props.duration}</p>
        </InformationContainer>
        <TextDescriptionCard>{props.description}</TextDescriptionCard>
        <LoginButton onClick={togglePopup} >Learn more</LoginButton>
      </div>
      {isPopupOpen && <PopupComponent content="Here is more detailed information about the class." onClose={togglePopup} />}
    </CardContainer>
  );
};

export default ClassesCard;
