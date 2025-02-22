import { useEffect, useState } from "react";
import { useForm, UseFormSetValue } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailProps } from "src/types/emailsType";
import { schemaZod } from "src/types/schemaZod";
import { FormDataProps } from "src/types/types";
import { sendEmail } from "@services/sendEmail";
import { validateRecaptcha } from "@services/validateRecaptcha";

export const useSubmitForm = () => {
  const [isWasSend, setIsWasSend] = useState(false);
  const [isError, setError] = useState(false);
  const [RECAPTCHA_SITE_KEY, setRECAPTCHA_SITE_KEY] = useState("");
  const [option, setOption] = useState<"email" | "phone">("phone");

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
      subject: "",
      option: "phone",
    },
  });

  // Função para aplicar a máscara ao telefone
  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 10) {
      return numericValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return numericValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  // Função para manipular a troca de opção entre email e telefone
  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setOption: React.Dispatch<React.SetStateAction<"email" | "phone">>,
    setValue: UseFormSetValue<FormDataProps>
  ) => {
    const selectedOption = event.target.value as "email" | "phone";
    setOption(selectedOption);

    if (selectedOption === "email") {
      setValue("phone", "");
    } else {
      setValue("email", "");
    }
  };

  // Função para lidar com a mudança no campo de telefone e aplicar a máscara
  const handlePhoneChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: UseFormSetValue<FormDataProps>
  ) => {
    const maskedValue = formatPhone(event.target.value);
    setValue("phone", maskedValue);
  };

  // Mock de envio de email (substitua quando for para produção)
  // const sendEmailMock = async (data: Partial<EmailProps>) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log("Email enviado", data);
  //       resolve(200); // Simula envio bem-sucedido
  //     }, 3000);
  //   });
  // };

  const handleSubmitForm = async (data: EmailProps) => {
    const { subject, name, email, phone, option } = data;

    const isValid = await validateRecaptcha();

    if (!isValid) {
      try {
        // const resultado = await sendEmailMock({
        //   subject,
        //   name,
        //   email,
        //   phone,
        //   option,
        // });
        const resultado = await sendEmail({
          subject,
          name,
          email,
          phone,
          option,
        });

        if (resultado === 200) {
          setIsWasSend(true);
          reset();
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
        setTimeout(() => {
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
    register,
    handleSubmit,
    setValue,
    RECAPTCHA_SITE_KEY,
    isError,
    errors,
    isSubmitting,
    isWasSend,
    option,
    handleOptionChange, // Função dentro do hook
    handlePhoneChange, // Função dentro do hook
    setOption, // Retornando `setOption` para o componente
  };
};
