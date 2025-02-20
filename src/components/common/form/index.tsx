"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaZod } from "src/types/schemaZod";
import { FormDataProps } from "src/types/types";
import { useSubmitForm } from "@hooks/useSubmitForm/useSubmitForm";

const Form = () => {
  const {
    handleSubmitForm,
    handleOptionChange,
    handlePhoneChange,
    setOption,
    option,
  } = useSubmitForm();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(schemaZod),
  });

  const optionError = errors?.email?.message || errors?.phone?.message;

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-2 items-start bg-lightApricotSalmon p-4 m-4 rounded-md text-md text-midBlack"
    >
      <h3 className="text-center text-wrap font-openSans font-semibold text-midBlack uppercase">
        Deixe seu contato e um especialista entrará em contato.
      </h3>
      <label
        htmlFor="name"
        className="flex flex-row gap-2 font-raleway  font-semibold"
      >
        Nome
        <input {...register("name")} id="name" className="p-1 capitalize" />
        {errors.name && (
          <p className="text-errorRed/60 text-sm">{errors.name.message}</p>
        )}
      </label>
      <span className="font-raleway font-semibold text-midBlack">
        Escolha a melhor forma de contato!
      </span>
      <div className="flex flex-wrap gap-2 items-center">
        <label className="flex items-center space-x-2 font-raleway  font-semibold">
          <input
            type="radio"
            {...register("option")}
            value="email"
            className="w-4 h-4"
            onChange={(e) => handleOptionChange(e, setOption, setValue)}
          />
          <span>Email</span>
        </label>

        <label className="flex items-center space-x-2 font-raleway  font-semibold">
          <input
            type="radio"
            {...register("option")}
            value="phone"
            className="w-4 h-4"
            onChange={(e) => handleOptionChange(e, setOption, setValue)}
          />
          <span>WhatsApp</span>
        </label>

        {errors.option && (
          <p className="text-red-500 text-sm">{errors.option.message}</p>
        )}
      </div>
      {option === "email" && (
        <label
          htmlFor="email"
          className="flex flex-row gap-2 font-raleway  font-semibold"
        >
          Email
          <input {...register("email")} id="email" />
        </label>
      )}

      {option === "phone" && (
        <label
          htmlFor="phone"
          className="flex flex-row gap-2 font-raleway  font-semibold"
        >
          Telefone
          <input
            {...register("phone")}
            id="phone"
            placeholder="(99) 99999-9999"
            onChange={(e) => handlePhoneChange(e, setValue)}
          />
        </label>
      )}

      <button
        type="submit"
        className="font-raleway  font-semibold bg-mediumBlueGray p-1 rounded-md text-white"
      >
        Enviar
      </button>

      {/* Campo para exibir erros do Zod */}
      {optionError && <p className="text-errorRed/60 text-sm">{optionError}</p>}
    </form>
  );
};

export default Form;
