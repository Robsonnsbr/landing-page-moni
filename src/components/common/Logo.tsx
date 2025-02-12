import React from "react";
import Image from "next/image";
import logoMonichara from "@public/logos/logo-moni.png";
import logoMonicharaWhite from "@public/logos/logo-moni-white.png";

interface PropsLogo {
  width?: number;
  height?: number;
  logoWhite: boolean;
}

function Logo({ width, height, logoWhite = false }: PropsLogo) {
  return (
    <Image
      src={logoWhite ? logoMonicharaWhite : logoMonichara}
      alt={"logo-monichara-moccelin"}
      width={width || 491}
      height={height || 195}
      placeholder="blur"
      blurDataURL={"assets/logo/logo-moni.png"}
      rel="preload"
      style={{
        width: width || "auto",
        height: height || "auto",
        maxWidth: "100%",
        // minWidth: 140,
        objectFit: "contain",
      }}
    />
  );
}

export default Logo;
