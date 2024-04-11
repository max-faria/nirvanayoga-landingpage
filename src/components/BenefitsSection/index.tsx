import {
  CardContent,
  CardContentB,
  Container,
  DescriptionCard,
  Grid,
  Title,
  TitleCard,
} from "./styles";

const BenefitsSection = () => {
  return (
    <Container>
      <Title>Benefits and Outcomes</Title>
      <Grid>
        <CardContent>
          <TitleCard>Meditation</TitleCard>
          <DescriptionCard>
            Reducing stress and enhancing overall well-being. It sharpens focus,
            boosts creativity, and improves emotional stability, paving the way
            for a more mindful and balanced life.
          </DescriptionCard>
        </CardContent>
        <CardContentB>
          <TitleCard>Weight Loss</TitleCard>
          <DescriptionCard>
            Yoga fosters weight loss by boosting metabolism, enhancing
            mindfulness, and reducing stress, which collectively help in making
            healthier dietary choices and improving overall physical fitness.{" "}
          </DescriptionCard>
        </CardContentB>
      </Grid>
    </Container>
  );
};

export default BenefitsSection;
