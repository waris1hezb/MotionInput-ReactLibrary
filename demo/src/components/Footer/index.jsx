/* eslint-disable prettier/prettier */
import React from "react";
import { Container } from "../../styles/helpers.styles";
import {
  AddressHolder,
  CaptchaHolder,
  Footer,
  LinkHolder,
  LinkSection,
  LogoHolder,
  LogoSection,
  SolutionHolder,
  TermsHolder,
  TextHolder,
} from "./Footer.styles";
import Anchor from "../Anchor";

/**
 * Renders the footer of the page.
 *
 * @returns {JSX.Element} The footer component.
 */
const PageFooter = () => (
  <Footer>
    <Container>
      <LogoSection>
        <LogoHolder>
          <Anchor to="/">
            <img src={logoWhite} alt="logo" />
          </Anchor>
        </LogoHolder>
        <LinkSection>
          <LinkHolder underline>
            <Anchor to="/about-us">About Us</Anchor>
          </LinkHolder>
          <LinkHolder underline>
            <Anchor to="/about-us">Solutions</Anchor>
            <SolutionHolder>
              <Anchor to="/about-us" sm>
                Digital Accounts
              </Anchor>
              <Anchor to="/about-us" sm>
                BIN Sponsorship
              </Anchor>
            </SolutionHolder>
          </LinkHolder>
          <LinkHolder underline>
            <Anchor to="/about-us">Use Case</Anchor>
          </LinkHolder>
        </LinkSection>
      </LogoSection>
      <AddressHolder>
        <TextHolder>
          <p>
            GOAT S.A, Tucuman 633, C1049AAM
            <br /> CABA, Buenos Aires,
            <span>Argentina.</span>
            <span className="phone">Phone: +541123974603</span>
          </p>
        </TextHolder>
        <TermsHolder>
          <span className="copyright">
            © 2023 GOAT. Todos los derechos reservados.{" "}
          </span>
          <LinkHolder>
            <Anchor to="/" sm>
              Press Kit{" "}
            </Anchor>
          </LinkHolder>
          <LinkHolder>
            <Anchor to="/about-us" sm>
              Políticas de Privacidad
            </Anchor>
          </LinkHolder>
          <LinkHolder>
            <Anchor to="/about-us" sm>
              Informacion al usuario financiero
            </Anchor>
          </LinkHolder>
          <LinkHolder>
            <Anchor to="/about-us" sm>
              Terminos y Condiciones
            </Anchor>
          </LinkHolder>
        </TermsHolder>
      </AddressHolder>
      <CaptchaHolder>
        <div className="img-holder">
          <img src={captcha} alt="captcha" />
        </div>
        <div className="text-holder">
          <p>
            GOAT está inscripto en el BCRA como PSP bajo el registro 33706. GOAT
            ofrece servicios de pago, no es una entidad financiera ni tiene
            autorización para operar como tal. <br /> Los fondos depositados en
            cuentas de pago no constituyen depósitos en una entidad financiera
            por lo que no cuentan con las garantías que tales depósitos puedan
            gozar de acuerdo con la legislación y reglamentación aplicables en
            materia de depósitos en entidades financieras, al mismo tiempo GOAT
            es supervisada por el BCRA para que el 100% de tus fondos se
            encuentren disponibles en todo momento en cuentas a la vista en
            entidades financieras.
          </p>
        </div>
      </CaptchaHolder>
    </Container>
  </Footer>
);

export default PageFooter;
