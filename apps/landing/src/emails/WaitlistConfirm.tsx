import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { palette } from "./palette";

interface WaitlistConfirmProps {
  confirmUrl: string;
}

export default function WaitlistConfirm({ confirmUrl }: WaitlistConfirmProps) {
  return (
    <Html lang="es" dir="ltr">
      <Head />
      <Preview>Confirmá tu lugar en la lista de espera de i-am.clinic</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={logoText}>i-am.clinic</Text>
          </Section>

          <Heading style={heading}>Un paso más</Heading>

          <Text style={paragraph}>
            Gracias por anotarte. Solo falta confirmar tu correo para reservar
            tu lugar en la lista de espera.
          </Text>

          <Section style={buttonSection}>
            <Button href={confirmUrl} style={button}>
              Confirmar mi lugar
            </Button>
          </Section>

          <Text style={paragraph}>
            Si el botón no funciona, copiá y pegá este enlace en tu navegador:
          </Text>

          <Link href={confirmUrl} style={link}>
            {confirmUrl}
          </Link>

          <Hr style={hr} />

          <Text style={footer}>
            Este enlace vence en 7 días. Si no te anotaste en i-am.clinic,
            podés ignorar este correo.
          </Text>

          <Text style={footer}>
            i-am.clinic — herramienta clínica para profesionales de la salud
            mental
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main: React.CSSProperties = {
  backgroundColor: palette.pageBg,
  fontFamily:
    '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const container: React.CSSProperties = {
  margin: "0 auto",
  padding: "40px 24px",
  maxWidth: "560px",
};

const logoSection: React.CSSProperties = {
  marginBottom: "32px",
};

const logoText: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: "700",
  color: palette.brand,
  margin: "0",
};

const heading: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: "700",
  color: palette.headingText,
  lineHeight: "1.2",
  margin: "0 0 16px",
};

const paragraph: React.CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.75",
  color: palette.bodyText,
  margin: "0 0 16px",
};

const buttonSection: React.CSSProperties = {
  margin: "32px 0",
  textAlign: "center",
};

const button: React.CSSProperties = {
  backgroundColor: palette.primary,
  borderRadius: "10px",
  color: palette.buttonFg,
  fontSize: "15px",
  fontWeight: "600",
  textDecoration: "none",
  padding: "12px 28px",
  display: "inline-block",
};

const link: React.CSSProperties = {
  color: palette.primary,
  fontSize: "13px",
  wordBreak: "break-all",
};

const hr: React.CSSProperties = {
  borderColor: palette.border,
  margin: "32px 0 24px",
};

const footer: React.CSSProperties = {
  fontSize: "12px",
  lineHeight: "1.6",
  color: palette.mutedText,
  margin: "0 0 8px",
};
