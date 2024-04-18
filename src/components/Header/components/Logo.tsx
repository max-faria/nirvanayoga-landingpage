import { Logo, LogoContainer } from "../styles"
import logo from "../../../assets/logo.svg";

const LogoComponent:React.FC = () => {

    return(
        <LogoContainer>
          <Logo src={logo} alt="Nirvana Logo" />
        </LogoContainer>
    )
}

export default LogoComponent