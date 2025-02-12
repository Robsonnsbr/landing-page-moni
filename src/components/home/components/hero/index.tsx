import ContentContainer from "@components/common/containers/ContentContainer";

import Image from "next/image";
import logoNomeMoni from "@public/logos/logo-nome-moni.webp";

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
        <h2 className="text-2xl font-bold leading-snug flex-wrap font-poppins text-noBlack">
          Advocacia atual e humanizada, especialista em prevenir e solucionar
          conflitos.
        </h2>
        <div className="flex items-center  justify-center w-60 h-12 bg-success rounded-full shadow-lg cursor-pointer opacity-90 hover:opacity-100 transition">
          <span className="text-white font-semibold font-poppins">
            Falar com Especialistas
          </span>
        </div>
      </div>
    </ContentContainer>
  );
}
