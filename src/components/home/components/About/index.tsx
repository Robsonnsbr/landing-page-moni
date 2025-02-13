export default function PerfilAdvogada() {
  const info = {
    nome: "Monichara Moccelin",
    oab: "OAB/PR 112.291",
    formacao: [
      "Bacharel em Direito pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
      "Especialista em Direito Empresarial e Civil pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
      "Especialista em Direito Médico e da Saúde pela Pontifícia Universidade Católica do Paraná (PUC-PR)",
    ],
    experiencia: [
      "Membro Relatora da Comissão de Juizados Especiais da Ordem dos Advogados do Brasil, Seccional do Paraná (2021-2024)",
    ],
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
          { title: "Experiência", items: info.experiencia },
          { title: "Cursos", items: info.cursos },
        ].map((section, index) => (
          <li
            key={index}
            className=" border-2 border-midBlack shadow-lg rounded-md flex-1 min-w-[280px] max-w-[400px] p-8 flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-semibold text-lightApricotSalmon">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-2 text-white text-md font-raleway font-semibold">
              {section.items.map((item, idx) => (
                <li key={idx} className="px-4">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex items-center  justify-center w-60 h-12 bg-success rounded-full shadow-lg cursor-pointer opacity-90 hover:opacity-100 transition">
        <span className="text-white font-semibold font-poppins text-center">
          QUERO FALAR AGORA COM UM ADVOGADO
        </span>
      </div>
    </>
  );
}
