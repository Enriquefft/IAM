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
import { waitlistEmailCopy } from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/locales";

interface WaitlistConfirmProps {
  confirmUrl: string;
  locale: Locale;
}

export default function WaitlistConfirm({
  confirmUrl,
  locale,
}: WaitlistConfirmProps) {
  const copy = waitlistEmailCopy(locale);
  return (
    <Html lang={locale} dir="ltr">
      <Head />
      <Preview>{copy.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={logoText}>i-am.clinic</Text>
          </Section>

          <Heading style={heading}>{copy.heading}</Heading>

          <Text style={paragraph}>{copy.intro}</Text>

          <Section style={buttonSection}>
            <Button href={confirmUrl} style={button}>
              {copy.buttonLabel}
            </Button>
          </Section>

          <Text style={paragraph}>{copy.fallbackHelper}</Text>

          <Link href={confirmUrl} style={link}>
            {confirmUrl}
          </Link>

          <Hr style={hr} />

          <Text style={footer}>{copy.footerExpiry}</Text>

          <Text style={footer}>{copy.brandTagline}</Text>
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
