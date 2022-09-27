import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import heroImg from '../../../../assets/hero-image.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { RegularText } from '../../../../components/Typograhy';
import { BenefitsContainer, LandingContainer, LandingContent, LandingTitle } from "./styles";

export function Landing() {

  const { colors } = useTheme();

  return (
    <LandingContainer>
      <LandingContent className="container">
        <div>
          <section>
            <LandingTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </LandingTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              text="Compra simples e segura"
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight='fill' />}
              text="Embalagem mantém o café intacto"
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight='fill' />}
              text="Entrega rápida e rastreada"
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Coffee weight='fill' />}
              text="O café chega fresquinho até você"
              iconBg={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>
        <img src={heroImg} alt="" />
      </LandingContent>
    </LandingContainer>

  )
}