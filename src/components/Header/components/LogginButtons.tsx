import { LoginButton, LoginButtons } from "../styles";

const LoginButtonsComponent:React.FC = () => {
  return (
    <LoginButtons>
      <LoginButton>Login</LoginButton>
      <LoginButton>Try free for 7 days</LoginButton>
    </LoginButtons>
  );
};

export default LoginButtonsComponent;
