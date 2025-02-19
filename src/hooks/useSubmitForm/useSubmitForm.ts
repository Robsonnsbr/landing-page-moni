import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailProps } from "src/types/emailsType";
import { schemaZod } from "src/types/schemaZod";
import { FormDataProps } from "src/types/types";

export const useSubmitForm = () => {
  const [isWasSend, setIsWasSend] = useState(false);
  const [isError, setError] = useState(false);
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [RECAPTCHA_SITE_KEY, setRECAPTCHA_SITE_KEY] = useState("");

  useEffect(() => {
    setRECAPTCHA_SITE_KEY(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "");
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormDataProps>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schemaZod),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "Pedido de contato de cliente",
    },
  });

  // Mock de envio de email (substitua quando for para produção)
  const sendEmailMock = async ({
    subject,
    name,
    email,
    phone,
  }: Partial<EmailProps>) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Email enviado", { subject, email, phone, name });
        resolve(200); // Simula envio bem-sucedido
      }, 3000);
    });
  };

  const handleSubmitForm = async (data: EmailProps) => {
    console.log("entrei no handleSubmitForm");
    const { subject, name, email, phone } = data;

    if (captcha || !RECAPTCHA_SITE_KEY) {
      try {
        const resultado = await sendEmailMock({ subject, name, email, phone });

        if (resultado === 200) {
          setIsWasSend(true);
          reset();
        } else {
          setError(true);
        }
        setCaptcha(null);
      } catch (error) {
        setError(true);
        setTimeout(() => {
          setCaptcha(null);
          setError(false);
        }, 5000);
        console.error("Erro ao enviar e-mail:", error);
      }
    } else {
      alert('Para continuar, clique em "Não sou um robô".');
    }
  };

  return {
    handleSubmitForm,
    setCaptcha,
    register,
    handleSubmit,
    setValue, // Retornando setValue para ser usado no formulário
    RECAPTCHA_SITE_KEY,
    isWasSend,
    isError,
    errors,
    isSubmitting,
  };
};
