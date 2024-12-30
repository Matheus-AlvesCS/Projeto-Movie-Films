import { InfoButton } from "./styles";

function Button({ children, button, ...props }) {
  return (
    <InfoButton {...props} $button={button}>
      {children}
    </InfoButton>
  );
}

export default Button;
