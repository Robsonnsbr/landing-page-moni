import emailjs from "@emailjs/browser";
import { EmailProps } from "src/types/emailsType";

const NEXT_PUBLIC_EMAILJS_USER_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_USER_KEY || "";
const NEXT_PUBLIC_EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

export const sendEmail = async ({
  name,
  // subject, // se for usar a plataforma Resend do react add subject
  phone,
  email,
  option,
}: EmailProps) => {
  const templateParams = {
    from_name: name,
    // subject: subject || "", // se for usar a plataforma Resend do react add subject
    contato: phone || email,
    option,
  };

  try {
    const response = await emailjs.send(
      NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      NEXT_PUBLIC_EMAILJS_USER_KEY
    );

    return response.status;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    console.error("Erro desconhecido ao enviar e-mail:", error);
  }
};
