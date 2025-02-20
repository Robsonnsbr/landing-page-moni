"use client";
import { useSubmitForm } from "@hooks/useSubmitForm/useSubmitForm";
import ButtonWhatsapp from "../button/ButtonWhatsapp";

const Form = () => {
  const {
    handleSubmitForm,
    handleOptionChange,
    handlePhoneChange,
    setOption,
    option,
    errors,
    isError,
    handleSubmit,
    isSubmitting,
    isWasSend,
    setValue,
    register,
  } = useSubmitForm();
  const optionError = errors?.email?.message || errors?.phone?.message;

  return (
    <div
      className={`flex flex-col h-full m-auto items-center justify-center gap-16 py-6 self-center transition-opacity ${
        isSubmitting ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex h-fit max-w-[350px] flex-col gap-2 items-start bg-lightApricotSalmon p-4 rounded-md text-md"
      >
        <h3 className="text-center text-wrap font-poppins font-semibold text-white">
          Deixe seu contato e falaremos com você!
        </h3>
        <label
          htmlFor="name"
          className="flex flex-wrap gap-2 font-raleway  font-semibold text-mediumBlueGray"
        >
          Nome
          <input
            {...register("name")}
            id="name"
            className="p-1 capitalize rounded-md text-mediumBlueGray font-sans font-normal"
          />
          {errors.name && (
            <p className="text-mediumBlueGray font-normal text-sm">
              {errors.name.message}
            </p>
          )}
        </label>
        <span className="font-raleway font-semibold text-white">
          Escolha a melhor forma de contato.
        </span>
        <div className="flex flex-wrap gap-2 items-center">
          <label className="flex items-center space-x-2 font-raleway  font-semibold text-mediumBlueGray">
            <input
              type="radio"
              {...register("option")}
              value="email"
              className="w-4 h-4 accent-lightBlueGray"
              defaultChecked={option === "email"}
              onChange={(e) => handleOptionChange(e, setOption, setValue)}
            />
            <span>Email</span>
          </label>

          <label className="flex items-center space-x-2 font-raleway  font-semibold text-mediumBlueGray">
            <input
              type="radio"
              {...register("option")}
              value="phone"
              className="w-4 h-4 accent-lightBlueGray"
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
            className="flex flex-row gap-2 font-raleway  font-semibold  text-mediumBlueGray"
          >
            Email
            <input
              {...register("email")}
              id="email"
              placeholder="email@example.com"
              className="p-1 rounded-md font-sans text-mediumBlueGray font-normal"
            />
          </label>
        )}

        {option === "phone" && (
          <label
            htmlFor="phone"
            className="flex flex-row gap-2 font-raleway  font-semibold text-mediumBlueGray"
          >
            Tel
            <input
              {...register("phone")}
              id="phone"
              placeholder="(99) 99999-9999"
              onChange={(e) => handlePhoneChange(e, setValue)}
              className="p-1 rounded-md font-mono font-normal text-mediumBlueGray"
            />
          </label>
        )}

        {/* btn send */}
        <button
          type="submit"
          className="font-raleway  font-semibold bg-mediumBlueGray px-2 py-1 shadow-sm rounded-md text-success"
        >
          Enviar
        </button>

        {/* Campo para exibir erros do Zod */}
        {optionError && (
          <p className="text-errorRed/60 text-sm">{optionError}</p>
        )}

        {/* aviso de enviado ou enviado/erro */}
        <p className="text-errorRed/60 text-sm self-center text-center">
          {isSubmitting ? (
            <span className="animate-pulse">Enviando...</span>
          ) : isWasSend ? (
            <span className="text-white bg-success px-2 py-1 rounded-md shadow-sm">
              Tudo enviado! Logo, a gente se fala!
            </span>
          ) : isError ? (
            "Ops! Tente novamente mais tarde..."
          ) : errors.name || errors.email || errors.phone ? (
            "Por favor, preencha todos os campos corretamente."
          ) : (
            ""
          )}
        </p>
      </form>
      <ButtonWhatsapp
        className="text-xl px-4 w-fit order-first sm:order-none"
        label={" Falar com Especialistas"}
      />
    </div>
  );
};

export default Form;
