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
    "advocacia, direito, solução de conflitos, consultoria jurídica, advogado",
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
