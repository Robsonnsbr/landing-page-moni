import ButtonWhatsapp from "@components/common/button/ButtonWhatsapp";
import Line from "@components/common/svgs/Line";
import Link from "next/link";

export default function About() {
  const info = {
    nome: "Monichara Moccelin",
    oab: "OAB/PR 112.291",
    formacao: [
      "Bacharel em Direito pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
      "Especialista em Direito Empresarial e Civil pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
      "Especialista em Direito Médico e da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
    ],
    // experiencia: [
    //   "Membro Relatora da Comissão de Juizados Especiais da Ordem dos Advogados do Brasil, Seccional do Paraná (2021-2024)",
    // ],
    cursos: [
      "Curso Contratos - Negociações Preliminares (Fundação Getúlio Vargas)",
      "Curso Introdução ao Direito Imobiliário (Fundação Getúlio Vargas)",
      "Curso Direito Médico e da Saúde - Osvaldo Simonelli",
    ],
  };

  return (
    <>
      <div className="text-center text-white">
        <h1 className="text-3xl font-extrabold text-lightApricotSalmon uppercase tracking-wider">
          {info.nome}
        </h1>
        <p className="text-lg font-semibold text-lightApricotSalmon">
          {info.oab}
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-6 w-full">
        {[
          { title: "Formação", items: info.formacao },
          // { title: "Experiência", items: info.experiencia },
          { title: "Cursos", items: info.cursos },
        ].map((section, index) => (
          <li
            key={index}
            className="relative flex-grow min-w-[280px] w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-[390px] hover:scale-105 transition-transform"
          >
            <Line
              position={{ left: "0px", top: "0px" }}
              className="!fill-lightApricotSalmon"
            />
            <Line
              rotation={90}
              position={{ right: "0px", top: "0px" }}
              className="!fill-lightApricotSalmon"
            />
            <Line
              rotation={180}
              position={{ right: "0px", bottom: "0px" }}
              className="!fill-lightApricotSalmon"
            />
            <Line
              rotation={270}
              position={{ left: "0px", bottom: "0px" }}
              className="!fill-lightApricotSalmon"
            />
            <div className="text-center p-6 bg-midBlack shadow-lg rounded-md flex flex-col h-full ">
              <h2 className="text-2xl font-semibold text-lightApricotSalmon">
                {section.title}
              </h2>

              <ul className="mt-6 space-y-2 flex-grow flex flex-col justify-center ">
                {section.items.map((item, idx) => (
                  <li key={idx} className="px-4 text-white font-semibold">
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="https://moccelinadvocacia.com/#ref-resumo-sobre"
                target="_blank"
                rel="noopener"
                className="py-6 px-4 text-success font-openSans font-semibold hover:underline"
              >
                Saiba mais
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <ButtonWhatsapp label={"QUERO FALAR AGORA COM UM ADVOGADO"} />
    </>
  );
}
