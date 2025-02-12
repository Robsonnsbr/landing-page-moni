import { FormData } from "src/types/formType";

type EmailTemplateProps = {
  formData: FormData;
};

export const EmailTemplate = ({ formData }: Readonly<EmailTemplateProps>) => {
  const { name, contact } = formData;

  const rowStyles = "border border-black px-4 py-2";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Informações do Formulário de contato da Landing-page:
      </h1>
      <table className="w-full border-collapse mb-6 text-black">
        <tbody>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Nome Completo:</td>
            <td className={rowStyles}>{name}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>WhatsApp/Email:</td>
            <td className={rowStyles}>{contact}</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
