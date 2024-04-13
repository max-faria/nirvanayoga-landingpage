import { ContainerCenter, TitleSecondary } from "../Header/styles";
import ToggleButtonPrice from "./ToggleButton";

export const PricingSection: React.FC = () => {
  return (
    <ContainerCenter>
      <TitleSecondary>Pricing Plans</TitleSecondary>
      {/* <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}> */}
        <ToggleButtonPrice />
      {/* </div> */}
    </ContainerCenter>
  );
};

export default PricingSection;
