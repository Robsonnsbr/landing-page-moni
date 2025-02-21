import React from "react";
import Image from "next/image";
import logoMonicharaWhite from "@public/logos/logo-moni-white.png";

const Logo = () => (
  <Image
    src={logoMonicharaWhite}
    alt="Logo Monichara Moccelin"
    width={491}
    height={195}
    placeholder="blur"
    loading="lazy"
    className="w-auto h-auto"
  />
);

export default Logo;
