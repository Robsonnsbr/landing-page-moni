import type { Metadata } from "next";

import { raleway, poppins, openSans } from "@font/index";
import "./styles/globals.css";

import ButtonWhatsappFloat from "@components/common/button/ButtonWhatsappFloat";

export const metadata: Metadata = {
  title: "Moccelin Advocacia",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Advocacia atual e humanizada, especialista em prevenir e solucionar conflitos jurídicos com ética e eficiência.",
  keywords:
    "advocacia, Curitiba, Paraná, direito, solução de conflitos, consultoria jurídica, advogada, advogado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="robots" content="index, follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-sans`}
      >
        {children}
        <ButtonWhatsappFloat />
      </body>
    </html>
  );
}
