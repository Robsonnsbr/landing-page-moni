"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaZod } from "src/types/schemaZod";
import { FormDataProps } from "src/types/types";
import { useSubmitForm } from "@hooks/useSubmitForm/useSubmitForm";

const Form = () => {
  const [option, setOption] = useState<"email" | "phone">("email");
  const { handleSubmitForm } = useSubmitForm();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(schemaZod),
  });

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = event.target.value as "email" | "phone";
    setOption(selectedOption);

    if (selectedOption === "email") {
      setValue("phone", "");
    } else {
      setValue("email", "");
    }
  };

  // Função para aplicar máscara ao telefone
  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 10) {
      return numericValue.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
      return numericValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = formatPhone(event.target.value);
    setValue("phone", maskedValue);
  };

  const optionError = errors?.email?.message || errors?.phone?.message;

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-2 items-start bg-white"
    >
      <label htmlFor="name" className="flex flex-row gap-2">
        Nome
        <input {...register("name")} id="name" />
        {errors.name && (
          <p className="text-errorRed/60 text-sm">{errors.name.message}</p>
        )}
      </label>
      <div className="flex flex-wrap gap-2 items-center">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register("option")}
            value="email"
            className="w-4 h-4"
            onChange={handleOptionChange}
          />
          <span>Email</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            {...register("option")}
            value="phone"
            className="w-4 h-4"
            onChange={handleOptionChange}
          />
          <span>WhatsApp</span>
        </label>

        {errors.option && (
          <p className="text-red-500 text-sm">{errors.option.message}</p>
        )}
      </div>
      {option === "email" && (
        <label htmlFor="email" className="flex flex-row gap-2">
          Email
          <input {...register("email")} id="email" />
        </label>
      )}

      {option === "phone" && (
        <label htmlFor="phone" className="flex flex-row gap-2">
          Telefone
          <input
            {...register("phone")}
            id="phone"
            placeholder="(99) 99999-9999"
            onChange={handlePhoneChange}
          />
        </label>
      )}

      <button type="submit">Enviar</button>

      {/* Campo para exibir erros do Zod */}
      {optionError && <p className="text-errorRed/60 text-sm">{optionError}</p>}
    </form>
  );
};

export default Form;
