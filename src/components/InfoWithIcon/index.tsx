import React from "react";
import { IconContainer, InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
  icon: React.ReactNode;
  text: React.ReactNode | string;
  iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>
        {icon}
      </IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}