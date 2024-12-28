import { InfoButton } from "./styles";

function Button({ children, button }) {
  return <InfoButton $button={button}>{children}</InfoButton>;
}

export default Button;
