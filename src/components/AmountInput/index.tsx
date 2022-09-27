import { useState } from "react";
import { Minus, Plus } from "phosphor-react";
import { AmountInputContainer, IconWrapper } from "./styles";

interface AmountInputProps {
  size?: 'small' | 'medium';
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function AmountInput({ size = 'medium', onIncrease, onDecrease, quantity }: AmountInputProps) {



  return (
    <AmountInputContainer size={size}>
      <IconWrapper disabled={quantity <= 0} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </AmountInputContainer>
  )
}