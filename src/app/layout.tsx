import type { Metadata } from "next";
import { raleway, poppins, openSans } from "@font/index";
import "./styles/globals.css";
import ButtonWhatsappFloat from "@components/common/button/ButtonWhatsappFloat";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Moccelin Advocacia | Advogada em Curitiba",
  description: `Precisa de um advogado em Curitiba? Atendimento rápido e seguro! 
  Oferecemos consultoria jurídica online e soluções eficazes para resolver seu problema 
  com agilidade e total transparência.`,

  keywords: `[adv curitiba], [advogado curitiba], [consulta jurídica curitiba], [contratar advogado curitiba], 
[preciso de advogado curitiba], [consultoria jurídica online curitiba], [advogado curitiba whatsapp], 
[preciso de um advogado curitiba], [site de advogado curitiba], [advogado telefone curitiba], 
[telefone advogado curitiba], [advogado contratos curitiba], [melhor advogado curitiba], 
[advogado especialista curitiba], [advogado trabalhista curitiba], [advogado cível curitiba], 
[advogado empresarial curitiba], [advogado de confiança curitiba], [atendimento jurídico curitiba], 
[assessoria jurídica curitiba], [advogado urgente curitiba], [advogado online curitiba]`,

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
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
          rel="canonical"
          href={
            process.env.NEXT_PUBLIC_SITE_URL ||
            "https://advogadocuritiba.moccelinadvocacia.com/"
          }
        />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <GoogleAnalytics gaId="AW-16892245591" />
        <ButtonWhatsappFloat />
      </body>
    </html>
  );
}
