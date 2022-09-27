import { InputHTMLAttributes, forwardRef } from "react";
import { RegularText } from "../Typograhy";
import { InputContainer, InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <InputWrapper>
      <InputContainer {...props} ref={ref} />
      {error && (
        <RegularText size="s">{error}</RegularText>
      )}
    </InputWrapper>
  )
})