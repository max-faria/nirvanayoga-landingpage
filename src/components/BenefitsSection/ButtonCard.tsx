import { ButtonContainer, ButtonLearnMore } from "./styles";
import { CaretRight } from "@phosphor-icons/react";

interface ButtonCardInterface {
    linkTo: string,
}

const ButtonCard: React.FC<ButtonCardInterface> = (props) => {

    return (
        <a href={props.linkTo} style={{textDecoration: 'none'}}>
        <ButtonContainer>
            <ButtonLearnMore>Learn More</ButtonLearnMore>
            <CaretRight size={24} color="#FFF"/>
        </ButtonContainer>
        </a>
    )
}

export default ButtonCard