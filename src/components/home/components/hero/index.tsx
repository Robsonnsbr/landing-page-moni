import Image from "next/image";
import logoNomeMoni from "@public/logos/logo-nome-moni.webp";

import ContentContainer from "@components/common/containers/ContentContainer";
import Form from "@components/common/form";

export default function Hero() {
  return (
    <ContentContainer className="h-full w-full flex-col sm:gap-2 sm:flex-row">
      <div className="flex flex-col sm:gap-16 gap-6 self-center text-black font-poppins !text-center text-balance items-center">
        <h1 className="font-extrabold leading-none uppercase">
          <span className="font-raleway flex items-center justify-center">
            <span className="sr-only">Monichara Moccelin advocacia</span>
            <Image
              alt="logo moccelin advocacia"
              src={logoNomeMoni}
              width={887}
              height={424}
              loading="eager"
              className="h-auto w-auto mt-6 sm:mt-0"
              placeholder="blur"
              priority={process.env.NODE_ENV === "production"}
            />
          </span>
        </h1>
        <h2 className="text-2xl font-bold leading-snug flex-wrap font-poppins text-deepIndigoBlue">
          <span className="text-3xl font-extrabold text-primary">
            Precisando de um Advogado? Atendimento Rápido e Online!
          </span>
          <br />

          <br />
          <ul className="text-lg list-none list-inside space-y-0 text-center">
            <li>✔ Consultoria jurídica online sem burocracia</li>
            <li>✔ Atendimento direto por telefone ou WhatsApp</li>
            <li>✔ Rapidez, sigilo e comprometimento no seu caso</li>
            <li>
              ✔ Especialista em contratos, negociações e defesa de direitos
            </li>
          </ul>
          <br />
        </h2>
      </div>
      <Form />
    </ContentContainer>
  );
}
