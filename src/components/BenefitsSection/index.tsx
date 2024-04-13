import {
  CardContent,
  Container,
  DescriptionCard,
  Grid,
  ImgCard,
  Title,
  TitleCard,
} from "./styles";
import MoonIcon from "../../assets/moon.svg";
import ChartIcon from "../../assets/chart.svg";
import HeartIcon from "../../assets/heart-circle.svg";
import EmogiIcon from "../../assets/emoji-happy.svg";
import TriangleIcon from "../../assets/triangle.svg";
import FlashIcon from '../../assets/flash.svg'

import ButtonCard from "./ButtonCard";

const BenefitsSection = () => {
  return (
    <Container>
      <Title>Benefits and Outcomes</Title>
      <Grid>
        <CardContent gridcolumn="1">
          <ImgCard src={MoonIcon} />
          <TitleCard>Meditation</TitleCard>
          <DescriptionCard>
            Yoga boosts creativity, and improves emotional stability, paving the
            way for a more mindful and balanced life.
          </DescriptionCard>
          <ButtonCard linkTo="" />
        </CardContent>
        <CardContent gridcolumn="2">
          <ImgCard src={ChartIcon} />
          <TitleCard>Weight Loss</TitleCard>
          <DescriptionCard>
            Yoga improve physical fitness, boost metabolism and reduce stress,
            which help in making healthier dietary choices.{" "}
          </DescriptionCard>
          <ButtonCard linkTo={""} />
        </CardContent>
        <CardContent gridcolumn="1" gridrow="2">
          <ImgCard src={HeartIcon} />
          <TitleCard>Lower Blood Pressure</TitleCard>
          <DescriptionCard>
            Yoga helps to naturally lower blood pressure, promoting a calmer and
            healthier cardiovascular system.
          </DescriptionCard>
          <ButtonCard linkTo="" />
        </CardContent>
        <CardContent gridcolumn="2" gridrow="2">
          <ImgCard src={EmogiIcon} />
          <TitleCard>Increase Flexibility</TitleCard>
          <DescriptionCard>
            Enhance your flexibility through yoga, which gently stretches and
            strengthens your body for improved mobility.
          </DescriptionCard>
          <ButtonCard linkTo="" />
        </CardContent>
        <CardContent gridcolumn="1" gridrow="3">
          <ImgCard src={TriangleIcon} />
          <TitleCard>Balance Your Mind</TitleCard>
          <DescriptionCard>
            Yoga harmonizes the mind, offering mental clarity and emotional
            stability in our chaotic world.
          </DescriptionCard>
          <ButtonCard linkTo="" />
        </CardContent>
        <CardContent gridcolumn="2" gridrow="3">
          <ImgCard src={FlashIcon} />
          <TitleCard>Improve Health</TitleCard>
          <DescriptionCard>
            Regular yoga practice boosts overall health, fortifying your immune
            system and enhancing vitality.
          </DescriptionCard>
          <ButtonCard linkTo="" />
        </CardContent>
      </Grid>
    </Container>
  );
};

export default BenefitsSection;
