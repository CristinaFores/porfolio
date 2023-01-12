import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  ariaLabel: string;
}

const Button = ({ text, action, ariaLabel }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} aria-label={ariaLabel}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
