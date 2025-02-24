"use client";
import { useSubmitForm } from "@hooks/useSubmitForm/useSubmitForm";
import ButtonWhatsapp from "../button/ButtonWhatsapp";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

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
      className={`flex flex-col h-full m-auto items-center justify-center sm:gap-16 gap-6 py-6 self-center transition-opacity ${
        isSubmitting ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex h-fit max-w-[350px] flex-col gap-4 shadow-md items-start bg-lightApricotSalmon p-4 rounded-md text-md"
      >
        <h3 className="text-center text-wrap font-poppins font-semibold text-white uppercase">
          Deixe seu contato e um especialista vai guiá-lo até a solução ideal
          para sua necessidade.
        </h3>
        <label
          htmlFor="name"
          className="flex flex-wrap gap-2 font-raleway  font-semibold text-mediumBlueGray items-center"
        >
          Nome
          <input
            {...register("name")}
            id="name"
            className="p-1 capitalize rounded-md text-mediumBlueGray font-sans font-normal"
          />
          {errors.name && (
            <p className="text-error  font-normal text-sm">
              {errors.name.message}
            </p>
          )}
        </label>
        <span className="font-raleway font-semibold text-mediumBlueGray">
          Escolha a melhor forma de contato:
        </span>
        <div className="flex flex-wrap gap-2 items-center">
          <label
            className={`flex items-center  font-raleway shadow-md px-2 hover:cursor-pointer select-none active:scale-95 font-semibold text-mediumBlueGray rounded-md bg-success p-1 border-2 border-lightApricotSalmon ${
              option === "phone" ? "border-lightBlueGray" : ""
            }`}
          >
            <input
              type="radio"
              {...register("option")}
              value="phone"
              className="hidden"
              checked={option === "phone"}
              onChange={(e) => handleOptionChange(e, setOption, setValue)}
            />
            <FaWhatsapp className="size-7 self-center" />
          </label>
          <label
            className={`flex items-center font-raleway hover:cursor-pointer shadow-md  px-2 select-none active:scale-95 bg-LightGray  font-semibold text-mediumBlueGray rounded-md  p-1 border-2 border-lightApricotSalmon ${
              option === "email" ? "border-lightBlueGray" : ""
            }`}
          >
            <input
              type="radio"
              {...register("option")}
              value="email"
              className="hidden"
              checked={option === "email"}
              onChange={(e) => handleOptionChange(e, setOption, setValue)}
            />
            <MdOutlineEmail className="size-7 self-center" />
          </label>

          {errors.option && (
            <p className="text-error  text-sm">{errors.option.message}</p>
          )}
        </div>
        {option === "email" && (
          <label
            htmlFor="email"
            className="flex flex-wrap gap-2 font-raleway  font-semibold  text-mediumBlueGray items-center "
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
            className="flex flex-row gap-2 font-raleway  font-semibold text-mediumBlueGray items-center"
          >
            Tel
            <input
              {...register("phone")}
              id="phone"
              placeholder="ex: (41) 98000-0009"
              onChange={(e) => handlePhoneChange(e, setValue)}
              className="p-1 rounded-md font-openSans font-normal text-mediumBlueGray"
            />
          </label>
        )}

        {/* btn send */}
        <button
          type="submit"
          className="font-raleway  font-semibold bg-mediumBlueGray py-1 text-xl shadow-md rounded-md w-full text-success opacity-95 hover:opacity-100 active:scale-95"
        >
          Enviar
        </button>

        {/* Campo para exibir erros do Zod */}
        {optionError && (
          <p className="text-sm text-center text-error">{optionError}</p>
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
            <span className="text-error">
              Ops! Tente novamente mais tarde...
            </span>
          ) : errors.name || errors.email || errors.phone ? (
            <span className="text-error">
              Por favor, preencha todos os campos corretamente.
            </span>
          ) : (
            ""
          )}
        </p>
        <a
          href="./privacy-policy"
          target="_blank"
          className="self-end text-xs text-mediumBlueGray hover:underline"
        >
          Política de privacidade.
        </a>
      </form>
      <ButtonWhatsapp
        className="text-xl px-4 w-fit order-first sm:order-none"
        label={" Falar com Especialistas"}
      />
    </div>
  );
};

export default Form;
