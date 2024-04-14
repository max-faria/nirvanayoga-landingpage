import { ContainerCenter, TitleSecondary } from "../Header/styles";
import ToggleButtonPrice from "./components/ToggleButton";

export const PricingSection: React.FC = () => {
  return (
    <ContainerCenter>
      <TitleSecondary>Pricing Plans</TitleSecondary>
        <ToggleButtonPrice />
    </ContainerCenter>
  );
};

export default PricingSection;
