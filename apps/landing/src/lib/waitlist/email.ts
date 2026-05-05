import { Resend } from "resend";
import { render } from "@react-email/components";
import { createElement } from "react";
import WaitlistConfirm from "../../emails/WaitlistConfirm";

export interface SendConfirmEmailParams {
  to: string;
  confirmUrl: string;
  fromAddress: string;
  apiKey: string;
}

export async function sendConfirmEmail(params: SendConfirmEmailParams): Promise<void> {
  const { to, confirmUrl, fromAddress, apiKey } = params;

  const resend = new Resend(apiKey);

  const html = await render(createElement(WaitlistConfirm, { confirmUrl }));
  const text = `Confirmá tu lugar en la lista de espera de i-am.clinic.\n\nAbrí este enlace: ${confirmUrl}\n\nEste enlace vence en 7 días.`;

  const { error } = await resend.emails.send({
    from: fromAddress,
    to,
    subject: "Confirmá tu lugar en la lista de espera de i-am.clinic",
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
