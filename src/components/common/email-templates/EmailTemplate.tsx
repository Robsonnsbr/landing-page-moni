//TODO: Remover se for usar o emailjs
import { EmailProps } from "src/types/emailsType";

type EmailTemplateProps = {
  formData: EmailProps;
};

export const EmailTemplate = ({ formData }: Readonly<EmailTemplateProps>) => {
  const { name, email, phone, subject } = formData;

  const rowStyles = "border border-black px-4 py-2";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Informações do Formulário de contato da Landing-page:
      </h1>
      <table className="w-full border-collapse mb-6 text-black">
        <tbody>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Nome Cliente:</td>
            <td className={rowStyles}>{name}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Assunto</td>
            <td className={rowStyles}>{subject}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>WhatsApp/Email:</td>
            <td className={rowStyles}>{email ? email : phone}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
