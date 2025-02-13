import ContentContainer from "@components/common/containers/ContentContainer";

import Image from "next/image";
import logoNomeMoni from "@public/logos/logo-nome-moni.webp";
import ButtonWhatsapp from "@components/common/button/ButtonWhatsapp";

export default function Hero() {
  return (
    <ContentContainer className="h-full w-full">
      <div className="flex flex-col m-auto gap-16 text-black font-poppins !text-center text-balance items-center">
        <h1 className="font-extrabold leading-none uppercase">
          <span className="font-raleway flex items-center justify-center">
            <span className="sr-only">moccelin advocacia</span>
            <Image
              alt="logo moccelin advocacia"
              src={logoNomeMoni}
              width={1267}
              height={606}
              loading="eager"
              style={{ maxHeight: "350px", width: "auto" }}
              placeholder="blur"
              priority={process.env.NODE_ENV === "production"}
            />
          </span>
        </h1>
        <h2 className="text-2xl font-bold leading-snug flex-wrap font-poppins text-deepIndigoBlue">
          Advocacia atual e humanizada, especialista em prevenir e solucionar
          conflitos.
        </h2>
        <ButtonWhatsapp label={" Falar com Especialistas"} />
      </div>
    </ContentContainer>
  );
}
