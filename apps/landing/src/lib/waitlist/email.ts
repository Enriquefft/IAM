import { Resend } from "resend";
import { render } from "@react-email/components";
import { createElement } from "react";
import WaitlistConfirm from "../../emails/WaitlistConfirm";
import {
  waitlistEmailCopy,
  waitlistEmailPlainText,
} from "@/lib/i18n/copy";
import type { Locale } from "@/lib/i18n/locales";

export interface SendConfirmEmailParams {
  to: string;
  confirmUrl: string;
  fromAddress: string;
  apiKey: string;
  locale: Locale;
}

export async function sendConfirmEmail(params: SendConfirmEmailParams): Promise<void> {
  const { to, confirmUrl, fromAddress, apiKey, locale } = params;

  const resend = new Resend(apiKey);

  const copy = waitlistEmailCopy(locale);
  const html = await render(
    createElement(WaitlistConfirm, { confirmUrl, locale }),
  );
  const text = waitlistEmailPlainText(locale, confirmUrl);

  const { error } = await resend.emails.send({
    from: fromAddress,
    to,
    subject: copy.subject,
    html,
    text,
    headers: {
      "List-Unsubscribe": `<mailto:hola@i-am.clinic?subject=Unsubscribe>`,
    },
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
}
